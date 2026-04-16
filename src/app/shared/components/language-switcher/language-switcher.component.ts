import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-language-switcher',
  imports: [NgClass],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  protected readonly i18n = inject(I18nService);
}
