import { NavigationItem } from '../models/navigation-item.model';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    label: 'Home',
    route: '/',
    icon: 'home'
  },
  {
    label: 'Sobre',
    route: '/',
    fragment: 'sobre',
    icon: 'corporate_fare'
  },
  {
    label: 'Serviços',
    route: '/',
    fragment: 'servicos',
    icon: 'medical_services'
  },
  {
    label: 'Contato',
    route: '/',
    fragment: 'contato',
    icon: 'mail'
  }
] as const;
