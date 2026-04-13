# Del Tecnologia | Site Institucional + Portal Autenticado

Aplicação web institucional premium desenvolvida em Angular para a **Del Tecnologia - Engenharia Clínica**, com foco em:

- presença institucional de alto nível
- visual corporativo e responsivo
- experiência moderna com Angular Material
- arquitetura limpa e escalável
- área autenticada pronta para evoluir para portal do cliente/usuário

O projeto foi estruturado com mentalidade de produto real, não como landing page simples. Além do site institucional, ele já inclui fluxo de autenticação mockado, recuperação de senha em duas etapas, guards por autenticação/permissão e uma área interna com navegação própria.

## Visão geral

O sistema é dividido em dois grandes contextos:

1. **Site institucional**
   Páginas públicas com foco em posicionamento de marca, serviços, diferenciais, geração de demanda e contato.

2. **Portal autenticado**
   Área protegida com dashboard inicial, navegação interna por perfil, recuperação de senha em etapas e estrutura pronta para backend real.

## Stack

- **Angular 20**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **SCSS**
- **Standalone Components**
- **Signals / computed**
- **Reactive Forms**

## Principais recursos

- Home institucional premium com hero, serviços, sobre, benefícios, diferenciais, área de atuação e contato rápido
- Header responsivo com CTA e acesso para login
- Menu mobile full-screen com visual executive
- Favicon e branding com imagens reais da empresa
- Uso de imagens institucionais distribuídas por seção com tratamento responsivo
- Formulário de contato com validações
- Login corporativo mockado
- Cadastro corporativo mockado
- Recuperação de senha em duas etapas
- Persistência de sessão com `localStorage` / `sessionStorage`
- Guards por autenticação e por permissão
- Portal autenticado com sidebar premium
- Dashboard inicial com métricas, atalhos por perfil e governança básica
- Estrutura preparada para integração com API
- Base preparada para internacionalização futura

## Arquitetura

O projeto segue separação por camadas e por features.

```text
src/
  app/
    core/
      constants/
      enums/
      guards/
      models/
      services/
    features/
      about/
      auth/
      contact/
      dashboard/
      home/
      services/
    layout/
      components/
        footer/
        header/
        main-layout/
    shared/
      components/
        info-card/
        section-title/
      directives/
        scroll-reveal.directive.ts
```

### `core`

Camada de regras transversais da aplicação:

- constantes institucionais
- enums de rotas, perfis e permissões
- guards
- models tipados
- services globais

### `features`

Cada domínio funcional é isolado por feature.

- `home`: composição da homepage e seus blocos reutilizáveis
- `about`, `services`, `contact`: páginas públicas
- `auth`: login, cadastro e recuperação de senha
- `dashboard`: shell interno, visão geral, operações e governança

### `layout`

Componentes estruturais globais:

- `header`
- `footer`
- `main-layout`

### `shared`

Recursos reutilizáveis entre features:

- `section-title`
- `info-card`
- `scroll-reveal.directive`

## Rotas

As rotas estão centralizadas em [src/app/app.routes.ts](src/app/app.routes.ts).

### Públicas

- `/`
- `/sobre`
- `/servicos`
- `/contato`
- `/login`
- `/cadastro`
- `/recuperar-senha`

### Portal autenticado

- `/area-del/visao-geral`
- `/area-del/operacoes`
- `/area-del/governanca`

## Fluxo de autenticação

O projeto já possui um fluxo autenticado completo em modo mock.

### Login

O login:

- valida e-mail e senha
- identifica perfil com base no e-mail informado
- cria sessão tipada
- persiste sessão conforme a escolha de “manter conectado”

### Perfis simulados

O `AuthService` reconhece perfis diferentes com base no prefixo do e-mail:

- `admin`, `diretoria`, `gestao`, `executivo` → perfil executivo
- `cliente`, `gerente`, `coordenador`, `hospital` → gestor do cliente
- demais casos → operação técnica

### Recuperação de senha em duas etapas

O fluxo de recuperação já foi preparado com duas fases:

1. identificação da conta
2. confirmação com código + definição da nova senha

Código mock atual:

```text
204060
```

### Guards

- `authGuard`: protege acesso a rotas autenticadas
- `publicAuthGuard`: impede usuário autenticado de acessar login/cadastro novamente
- `permissionGuard`: controla acesso por permissão dentro do portal

## Permissões e portal

As permissões do portal estão modeladas em:

- `AuthRole`
- `PortalPermission`

O shell autenticado filtra navegação com base nas permissões do usuário logado. Isso permite crescer para:

- múltiplos tipos de usuário
- gestão por tenant/cliente
- regras por módulo
- visões customizadas por operação

## Estrutura visual

O projeto foi desenhado com direção visual corporativa e tecnológica:

- tons de azul, branco e cinza
- vidro sutil e superfícies premium
- animações leves por scroll
- layout responsivo
- navegação institucional + portal interno
- uso de imagens reais da marca ao longo das seções

## Imagens e assets

Os assets estão em:

```text
public/assets/images
```

Atualmente:

- `del-02.png` é usado como favicon e identidade visual principal
- `del-01.png` é usado no hero
- `del-03.png` é usado na seção Sobre
- `del-04.png` é usado como destaque editorial em Serviços
- `del-05.png` é usado em Área de atuação
- `del-06.png` é usado em Contato rápido

## Padrões técnicos adotados

- `ChangeDetectionStrategy.OnPush`
- componentes standalone
- tipagem forte em models e enums
- separação entre `constants`, `models`, `services`, `guards` e `features`
- `ReactiveFormsModule` para formulários críticos
- `signals` e `computed` em pontos de estado local/global
- lazy loading por `loadComponent`
- HTML semântico e `alt` em imagens

## Como rodar o projeto

### Pré-requisitos

- Node.js 20+ recomendado
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

### Build de produção

```bash
npm run build
```

Saída gerada em:

```text
dist/deltecnologia
```

### Testes

```bash
npm test
```

## Scripts disponíveis

```bash
npm start
npm run build
npm run watch
npm test
```

## Arquivos importantes

### Aplicação e rotas

- [src/main.ts](src/main.ts)
- [src/app/app.routes.ts](src/app/app.routes.ts)

### Layout institucional

- [src/app/layout/components/header/header.component.ts](src/app/layout/components/header/header.component.ts)
- [src/app/layout/components/main-layout/main-layout.component.ts](src/app/layout/components/main-layout/main-layout.component.ts)
- [src/app/layout/components/footer/footer.component.ts](src/app/layout/components/footer/footer.component.ts)

### Conteúdo institucional

- [src/app/core/constants/company.constants.ts](src/app/core/constants/company.constants.ts)
- [src/app/core/constants/site-content.constants.ts](src/app/core/constants/site-content.constants.ts)

### Autenticação e portal

- [src/app/core/services/auth.service.ts](src/app/core/services/auth.service.ts)
- [src/app/core/guards/auth.guard.ts](src/app/core/guards/auth.guard.ts)
- [src/app/core/guards/public-auth.guard.ts](src/app/core/guards/public-auth.guard.ts)
- [src/app/core/guards/permission.guard.ts](src/app/core/guards/permission.guard.ts)
- [src/app/features/dashboard/layout/dashboard-shell/dashboard-shell.component.ts](src/app/features/dashboard/layout/dashboard-shell/dashboard-shell.component.ts)

## Decisões de arquitetura

### Por que standalone components?

Para reduzir acoplamento, simplificar lazy loading e deixar a aplicação mais alinhada ao Angular moderno.

### Por que `signals`?

Porque a camada autenticada já precisava de um estado mais previsível e fácil de evoluir, especialmente para:

- sessão atual
- permissões
- mensagens contextuais entre rotas
- desafio de recuperação de senha

### Por que separar portal do layout institucional?

Porque o contexto de uso é diferente:

- o site público precisa vender, posicionar e converter
- o portal precisa organizar operação, navegação e contexto do usuário autenticado

## Melhorias futuras recomendadas

- integração real com backend de autenticação
- interceptors HTTP para token e renovação de sessão
- API real para formulário de contato
- i18n com múltiplos idiomas
- CMS/headless para conteúdo institucional
- gráficos reais no dashboard
- módulo de chamados, ativos, usuários e relatórios
- testes unitários para services, guards e formulários
- testes e2e da jornada institucional e autenticada
- otimização adicional de imagens

## Observações

- o projeto usa conteúdo institucional já preenchido e refinado para a Del Tecnologia
- a autenticação atual é mockada, mas a estrutura foi desenhada para substituição por API real
- o portal interno já serve como base de evolução para área do cliente, operação técnica ou gestão

## Status atual

Projeto pronto para:

- apresentação institucional
- continuidade visual
- expansão funcional
- integração futura com backend

---

Desenvolvido em Angular para a **Del Tecnologia - Engenharia Clínica**, com foco em credibilidade corporativa, tecnologia médica e escalabilidade de produto.
