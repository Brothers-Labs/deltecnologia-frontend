export type AppLocale = 'pt-BR' | 'en-US';

export interface TranslationParams {
  readonly [key: string]: string | number | null | undefined;
}
