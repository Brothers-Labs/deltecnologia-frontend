import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthRole } from '../../../../core/enums/auth-role.enum';
import { AuthService } from '../../../../core/services/auth.service';
import { SeoService } from '../../../../core/services/seo.service';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-operations-page',
  imports: [MatCardModule, MatIconModule, SectionTitleComponent, ScrollRevealDirective],
  templateUrl: './operations-page.component.html',
  styleUrl: './operations-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationsPageComponent {
  private readonly authService = inject(AuthService);
  private readonly seoService = inject(SeoService);

  protected readonly role = computed(() => this.authService.session()?.user.role ?? AuthRole.Operator);
  protected readonly assets = computed(() => {
    if (this.role() === AuthRole.Admin) {
      return [
        { sector: 'UTI Adulto', coverage: '218 ativos', status: '99,2% conformidade' },
        { sector: 'Centro Cirurgico', coverage: '164 ativos', status: '4 corretivas em execucao' },
        { sector: 'Diagnostico por imagem', coverage: '122 ativos', status: 'Janela de calibracao ativa' }
      ];
    }

    if (this.role() === AuthRole.ClientManager) {
      return [
        { sector: 'Bloco clinico', coverage: '96 ativos', status: 'Preventivas acima de 97%' },
        { sector: 'UTI', coverage: '54 ativos', status: '1 ativo sob analise' },
        { sector: 'Pronto atendimento', coverage: '73 ativos', status: 'Fila controlada' }
      ];
    }

    return [
      { sector: 'Rota tecnica A', coverage: '18 ordens', status: '5 atendimentos hoje' },
      { sector: 'Rota tecnica B', coverage: '22 ordens', status: '2 pendencias externas' },
      { sector: 'Laboratorio central', coverage: '9 ativos', status: 'Checklist em execucao' }
    ];
  });

  constructor() {
    this.seoService.updatePage({
      title: 'Portal Del | Operacoes',
      description: 'Visao operacional com ativos, manutencoes e andamento tecnico da conta.'
    });
  }
}
