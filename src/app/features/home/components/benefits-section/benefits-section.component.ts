import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InfoCardItem } from '../../../../core/models/info-card.model';
import { InfoCardComponent } from '../../../../shared/components/info-card/info-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-benefits-section',
  imports: [SectionTitleComponent, InfoCardComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsSectionComponent {
  @Input({ required: true }) items: readonly InfoCardItem[] = [];
  @Input() title = 'Benefícios estratégicos para sua operação';
  @Input() description =
    'Uma abordagem técnica bem estruturada impacta disponibilidade, segurança, previsibilidade e governança dos ativos eletromédicos.';
}
