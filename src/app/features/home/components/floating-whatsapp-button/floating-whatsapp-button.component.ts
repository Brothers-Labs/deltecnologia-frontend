import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../../../core/services/i18n.service';
import { PremiumCardDirective } from '../../../../shared/directives/premium-card.directive';

@Component({
  selector: 'app-floating-whatsapp-button',
  imports: [MatIconModule, PremiumCardDirective],
  templateUrl: './floating-whatsapp-button.component.html',
  styleUrl: './floating-whatsapp-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingWhatsappButtonComponent {
  protected readonly i18n = inject(I18nService);
  @Input({ required: true }) href = '';
}
