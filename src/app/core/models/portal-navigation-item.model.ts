import { PortalPermission } from '../enums/portal-permission.enum';

export interface PortalNavigationItem {
  readonly label: string;
  readonly route: string;
  readonly icon: string;
  readonly description: string;
  readonly permissions: readonly PortalPermission[];
}
