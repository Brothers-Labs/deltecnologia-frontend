import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InfoCardItem } from '../../../../core/models/info-card.model';
import { PremiumCardDirective } from '../../../../shared/directives/premium-card.directive';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-differential-card',
  imports: [MatIconModule],
  templateUrl: './differential-card.component.html',
  styleUrl: './differential-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollRevealDirective, PremiumCardDirective]
})
export class DifferentialCardComponent {
  @Input({ required: true }) item!: InfoCardItem;
}
