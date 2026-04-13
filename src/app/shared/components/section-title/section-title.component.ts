import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-title',
  imports: [NgClass],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollRevealDirective]
})
export class SectionTitleComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() align: 'left' | 'center' = 'left';
}
