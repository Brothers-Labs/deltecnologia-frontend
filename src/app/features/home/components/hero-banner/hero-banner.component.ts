import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HeroContent } from '../../../../core/models/hero-content.model';
import { I18nService } from '../../../../core/services/i18n.service';
import { PremiumCardDirective } from '../../../../shared/directives/premium-card.directive';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero-banner',
  imports: [NgOptimizedImage, MatButtonModule, RouterLink, ScrollRevealDirective, PremiumCardDirective],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollRevealDirective]
})
export class HeroBannerComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly trustItems =
    this.i18n.value<readonly { title: string; description: string }[]>('pages.home.executive.stats') ?? [];
  @Input({ required: true }) content!: HeroContent;
}
