export interface HeroMetric {
  readonly value: string;
  readonly label: string;
}

export interface HeroAction {
  readonly label: string;
  readonly route: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly primaryAction: HeroAction;
  readonly secondaryAction: HeroAction;
  readonly metrics: readonly HeroMetric[];
  readonly imagePath: string;
  readonly imageAlt: string;
}
