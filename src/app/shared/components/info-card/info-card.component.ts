import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InfoCardItem } from '../../../core/models/info-card.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-info-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollRevealDirective]
})
export class InfoCardComponent {
  @Input({ required: true }) item!: InfoCardItem;
}
