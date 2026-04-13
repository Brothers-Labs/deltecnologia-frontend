import { Injectable } from '@angular/core';
import { AuthRole } from '../enums/auth-role.enum';
import { PortalPermission } from '../enums/portal-permission.enum';
import { DashboardActivity } from '../models/dashboard-activity.model';
import { DashboardMetric } from '../models/dashboard-metric.model';
import { DashboardShortcut } from '../models/dashboard-shortcut.model';

@Injectable({
  providedIn: 'root'
})
export class PortalDataService {
  getMetrics(role: AuthRole): readonly DashboardMetric[] {
    switch (role) {
      case AuthRole.Admin:
        return [
          { label: 'Ativos monitorados', value: '1.284', trend: '+8,4% no trimestre', icon: 'devices_other' },
          { label: 'SLA de atendimento', value: '98,7%', trend: 'Meta acima do alvo', icon: 'verified' },
          { label: 'Ordens em execucao', value: '42', trend: '17 priorizadas hoje', icon: 'build_circle' },
          { label: 'Contratos ativos', value: '26', trend: '3 novos em onboarding', icon: 'handshake' }
        ];
      case AuthRole.ClientManager:
        return [
          { label: 'Ativos da sua operacao', value: '342', trend: 'Cobertura integral', icon: 'memory' },
          { label: 'Preventivas em dia', value: '96,9%', trend: 'Ritmo estavel', icon: 'event_available' },
          { label: 'Chamados em aberto', value: '12', trend: '4 aguardando validacao', icon: 'support_agent' },
          { label: 'Alertas criticos', value: '2', trend: 'Ambos com tratativa', icon: 'warning' }
        ];
      default:
        return [
          { label: 'OS em andamento', value: '18', trend: '7 com janela hoje', icon: 'assignment' },
          { label: 'SLA pessoal', value: '97,2%', trend: 'Acima da referencia', icon: 'speed' },
          { label: 'Ativos na fila', value: '84', trend: '12 com alta prioridade', icon: 'monitor_heart' },
          { label: 'Pendencias tecnicas', value: '5', trend: '1 bloqueio externo', icon: 'rule' }
        ];
    }
  }

  getShortcuts(role: AuthRole): readonly DashboardShortcut[] {
    switch (role) {
      case AuthRole.Admin:
        return [
          {
            title: 'Painel operacional',
            description: 'Acompanhe contratos, ativos e ordens com visao consolidada.',
            route: '/area-del/operacoes',
            icon: 'query_stats',
            permissions: [PortalPermission.ViewOperations]
          },
          {
            title: 'Governanca de acesso',
            description: 'Revise perfis, auditoria e politicas da conta.',
            route: '/area-del/governanca',
            icon: 'policy',
            permissions: [PortalPermission.ManageUsers]
          }
        ];
      case AuthRole.ClientManager:
        return [
          {
            title: 'Prioridades da sua operacao',
            description: 'Visualize ativos criticos e manutencoes em curso.',
            route: '/area-del/operacoes',
            icon: 'biotech',
            permissions: [PortalPermission.ViewOperations]
          },
          {
            title: 'Abrir atendimento consultivo',
            description: 'Fale com a Del sobre planejamento, performance e suporte.',
            route: '/contato',
            icon: 'forum',
            permissions: [PortalPermission.ManageTickets]
          }
        ];
      default:
        return [
          {
            title: 'Fila tecnica do dia',
            description: 'Entre rapidamente nas prioridades operacionais.',
            route: '/area-del/operacoes',
            icon: 'fact_check',
            permissions: [PortalPermission.ViewOperations]
          },
          {
            title: 'Escalar para governanca',
            description: 'Direcione temas que precisem de aprovacao ou visibilidade extra.',
            route: '/area-del/governanca',
            icon: 'north_east',
            permissions: [PortalPermission.ViewReports]
          }
        ];
    }
  }

  getActivities(role: AuthRole): readonly DashboardActivity[] {
    switch (role) {
      case AuthRole.Admin:
        return [
          { title: 'Contrato Hospital Leste', description: 'Onboarding digital liberado para 3 perfis gestores.', status: 'Concluido', time: 'Agora' },
          { title: 'Rota tecnica regional', description: 'Replanejada para elevar cobertura em ativos criticos.', status: 'Em analise', time: '12 min' },
          { title: 'Indicadores trimestrais', description: 'Relatorio consolidado pronto para comite executivo.', status: 'Disponivel', time: '35 min' }
        ];
      case AuthRole.ClientManager:
        return [
          { title: 'Preventiva UTI adulta', description: 'Checklist tecnico finalizado com conformidade total.', status: 'Concluido', time: '9 min' },
          { title: 'Monitor multiparametrico 04', description: 'Ajuste corretivo agendado para a tarde.', status: 'Planejado', time: '21 min' },
          { title: 'Inventario setorial', description: 'Nova rodada de validacao liberada para aprovacao.', status: 'Pendente', time: '1 h' }
        ];
      default:
        return [
          { title: 'Ordem tecnica #1748', description: 'Aguardando confirmacao de peca para concluir o atendimento.', status: 'Bloqueio externo', time: '18 min' },
          { title: 'Calibracao setorial', description: 'Execucao confirmada para o turno da tarde.', status: 'Agendado', time: '44 min' },
          { title: 'Fechamento de chamados', description: '3 registros retornaram para validacao final.', status: 'Em revisao', time: '1 h' }
        ];
    }
  }
}
