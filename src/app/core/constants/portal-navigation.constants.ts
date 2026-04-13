import { AppRoute } from '../enums/app-route.enum';
import { PortalPermission } from '../enums/portal-permission.enum';
import { PortalNavigationItem } from '../models/portal-navigation-item.model';

export const PORTAL_NAVIGATION: readonly PortalNavigationItem[] = [
  {
    label: 'Visao geral',
    route: `/${AppRoute.Dashboard}/${AppRoute.DashboardOverview}`,
    icon: 'space_dashboard',
    description: 'KPIs, resumo executivo e fila prioritaria.',
    permissions: [PortalPermission.ViewOverview]
  },
  {
    label: 'Operacoes',
    route: `/${AppRoute.Dashboard}/${AppRoute.DashboardOperations}`,
    icon: 'precision_manufacturing',
    description: 'Ativos, manutencoes, SLA e execucao operacional.',
    permissions: [PortalPermission.ViewOperations, PortalPermission.ViewAssets]
  },
  {
    label: 'Governanca',
    route: `/${AppRoute.Dashboard}/${AppRoute.DashboardGovernance}`,
    icon: 'admin_panel_settings',
    description: 'Permissoes, auditoria e controles da conta.',
    permissions: [PortalPermission.ViewReports, PortalPermission.ManageUsers]
  }
] as const;
