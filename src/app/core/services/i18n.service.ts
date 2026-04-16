import { DOCUMENT, registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localePt from '@angular/common/locales/pt';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { translations } from '../i18n/translations';
import { AppLocale, TranslationParams } from '../i18n/i18n.types';

registerLocaleData(localePt);
registerLocaleData(localeEn);

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private static readonly storageKey = 'deltecnologia.locale';
  private readonly document = inject(DOCUMENT);
  private readonly localeState = signal<AppLocale>(this.readStoredLocale());

  readonly locale = computed(() => this.localeState());
  readonly localeShort = computed(() => this.t('locale.short'));
  readonly languageName = computed(() => this.t('locale.label'));
  readonly isEnglish = computed(() => this.localeState() === 'en-US');
  readonly availableLocales = [
    { code: 'pt-BR' as const, label: 'PT' },
    { code: 'en-US' as const, label: 'EN' }
  ] as const;

  constructor() {
    effect(() => {
      const locale = this.localeState();
      this.document.documentElement.lang = locale;
      this.document.documentElement.setAttribute('data-locale', locale);
      globalThis.localStorage?.setItem(I18nService.storageKey, locale);
    });
  }

  setLocale(locale: AppLocale): void {
    this.localeState.set(locale);
  }

  toggleLocale(): void {
    this.localeState.update((current) => (current === 'pt-BR' ? 'en-US' : 'pt-BR'));
  }

  t(key: string, params?: TranslationParams, locale = this.localeState()): string {
    const value = this.value<string>(key, locale);

    if (typeof value !== 'string') {
      return key;
    }

    return this.interpolate(value, params);
  }

  value<T>(key: string, locale = this.localeState()): T | undefined {
    const source = translations[locale];
    const result = key.split('.').reduce<unknown>((current, segment) => {
      if (current && typeof current === 'object' && segment in (current as Record<string, unknown>)) {
        return (current as Record<string, unknown>)[segment];
      }

      return undefined;
    }, source);

    return result as T | undefined;
  }

  private interpolate(template: string, params?: TranslationParams): string {
    if (!params) {
      return template;
    }

    return template.replace(/\{\{(\w+)\}\}/g, (_, token: string) => {
      const value = params[token];
      return value === undefined || value === null ? '' : String(value);
    });
  }

  private readStoredLocale(): AppLocale {
    const stored = globalThis.localStorage?.getItem(I18nService.storageKey);
    return stored === 'en-US' ? 'en-US' : 'pt-BR';
  }
}
