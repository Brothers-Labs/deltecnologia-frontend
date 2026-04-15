import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EquipmentHighlightItem } from '../../../../core/models/equipment-highlight.model';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { PremiumCardDirective } from '../../../../shared/directives/premium-card.directive';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-equipment-highlights-section',
  imports: [MatCardModule, MatIconModule, SectionTitleComponent, ScrollRevealDirective, PremiumCardDirective],
  templateUrl: './equipment-highlights-section.component.html',
  styleUrl: './equipment-highlights-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentHighlightsSectionComponent {
  @Input({ required: true }) items: readonly EquipmentHighlightItem[] = [];
}
