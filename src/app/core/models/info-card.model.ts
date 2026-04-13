export interface InfoCardItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly accent?: string;
}

export interface ContactChannelItem extends InfoCardItem {
  readonly href: string;
  readonly value: string;
}
