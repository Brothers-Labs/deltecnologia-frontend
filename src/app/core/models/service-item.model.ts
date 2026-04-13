import { InfoCardItem } from './info-card.model';

export interface ServiceItem extends InfoCardItem {
  readonly slug: string;
}
