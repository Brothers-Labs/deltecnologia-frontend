import { AppRoute } from '../enums/app-route.enum';
import { NavigationItem } from '../models/navigation-item.model';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    label: 'Home',
    route: '/',
    icon: 'home'
  },
  {
    label: 'Sobre',
    route: `/${AppRoute.About}`,
    icon: 'corporate_fare'
  },
  {
    label: 'Serviços',
    route: `/${AppRoute.Services}`,
    icon: 'medical_services'
  },
  {
    label: 'Contato',
    route: `/${AppRoute.Contact}`,
    icon: 'mail'
  }
] as const;
