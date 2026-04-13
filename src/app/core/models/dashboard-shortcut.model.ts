import { PortalPermission } from '../enums/portal-permission.enum';

export interface DashboardShortcut {
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly icon: string;
  readonly permissions: readonly PortalPermission[];
}
