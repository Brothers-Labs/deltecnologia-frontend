import { AppLocale } from './i18n.types';

export const translations: Record<AppLocale, Record<string, unknown>> = {
  'pt-BR': {
    locale: {
      label: 'Português',
      short: 'PT'
    },
    company: {
      shortName: 'Del Tecnologia'
    },
    ui: {
      actions: {
        talkToDel: 'Falar com a Del',
        talkToDelFull: 'Falar com a Del Tecnologia',
        directWhatsapp: 'WhatsApp direto',
        triggerSupport: 'Acionar atendimento',
        sendMessage: 'Enviar mensagem',
        continue: 'Continuar para verificação',
        back: 'Voltar',
        resetPassword: 'Redefinir senha',
        signInSecurely: 'Entrar com segurança',
        createCorporateAccount: 'Criar conta corporativa',
        viewPortfolio: 'Ver portfólio completo',
        goNow: 'Ir agora',
        logout: 'Sair'
      },
      labels: {
        navigation: 'Navegação',
        contact: 'Contato',
        phone: 'Telefone',
        email: 'E-mail',
        accountLinked: 'Conta vinculada',
        sessionValidUntil: 'Sessão válida até',
        primaryEmail: 'E-mail principal',
        executiveMenu: 'Menu executivo',
        medicalTechnology: 'Tecnologia Médica',
        clinicalEngineering: 'Engenharia Clínica',
        language: 'Idioma'
      },
      accessibility: {
        goToHomepage: 'Ir para a página inicial da Del Tecnologia',
        mainNavigation: 'Navegação principal',
        openMenu: 'Abrir menu de navegação',
        closeMenu: 'Fechar menu',
        institutionalIndicators: 'Indicadores institucionais',
        whatsappContact: 'Entrar em contato pelo WhatsApp',
        showPassword: 'Mostrar senha',
        hidePassword: 'Ocultar senha'
      },
      status: {
        copyright: '© {{year}} {{companyName}}. Todos os direitos reservados.'
      }
    },
    pages: {
      home: {
        executive: {
          eyebrow: 'Posicionamento',
          title: 'Engenharia clínica tratada como ativo estratégico da instituição.',
          description:
            'Mais do que manutenção, a Del Tecnologia organiza o parque eletromédico com visão de continuidade operacional, governança técnica e apoio à tomada de decisão.',
          stats: [
            { title: 'Performance', description: 'Processos desenhados para sustentar disponibilidade e previsibilidade.' },
            { title: 'Segurança', description: 'Critérios técnicos claros para operações críticas e ambientes assistenciais.' },
            { title: 'Escalabilidade', description: 'Base preparada para crescimento, integração e evolução tecnológica.' }
          ]
        },
        differentials: {
          eyebrow: 'Diferenciais',
          title: 'Estrutura técnica, visão estratégica e compromisso com resultados confiáveis.',
          description:
            'Nossa proposta combina especialização, tecnologia aplicada e atendimento consultivo para apoiar instituições de saúde que buscam maturidade operacional.'
        },
        signature: {
          eyebrow: 'Assinatura Del',
          title: 'Clareza técnica, estética corporativa e confiança em cada ponto de contato.',
          description:
            'Um site institucional de alta performance também comunica método, maturidade e excelência. Por isso, a experiência visual acompanha o posicionamento consultivo da empresa.'
        },
        contact: {
          eyebrow: 'Captação de clientes',
          title: 'Vamos construir uma operação mais segura, previsível e eficiente para sua instituição.',
          description:
            'Se sua empresa busca uma parceira com posicionamento técnico sólido e comunicação corporativa clara, a Del Tecnologia está pronta para apoiar seu próximo ciclo de evolução.'
        }
      },
      aboutSection: {
        eyebrow: 'Quem somos',
        title: 'Del Tecnologia: engenharia clínica com credibilidade, organização e visão de futuro.',
        description:
          'A Del Tecnologia atua como parceira estratégica de instituições de saúde que desejam elevar o nível de controle técnico, confiabilidade operacional e maturidade na gestão dos ativos eletromédicos. Nosso posicionamento une competência técnica, processos estruturados e uma visão contemporânea da tecnologia médica.',
        paragraphs: [
          'Nossa atuação é orientada por resultados consistentes: maior disponibilidade de equipamentos, redução de riscos operacionais, melhor aproveitamento dos investimentos e suporte técnico à eficiência das equipes assistenciais.',
          'Com foco em inovação, segurança e eficiência operacional, desenvolvemos soluções que apoiam a governança do parque tecnológico e fortalecem a confiança das instituições em cada etapa da jornada técnica.'
        ],
        figureTitle: 'Atuação técnica com presença executiva',
        figureDescription: 'Processos organizados, leitura operacional e proximidade com a realidade hospitalar.',
        figureAlt: 'Ambiente técnico e institucional da Del Tecnologia com foco em engenharia clínica.'
      },
      benefitsSection: {
        eyebrow: 'Benefícios',
        defaultTitle: 'Benefícios estratégicos para sua operação',
        defaultDescription:
          'Uma abordagem técnica bem estruturada impacta disponibilidade, segurança, previsibilidade e governança dos ativos eletromédicos.'
      },
      servicesSection: {
        eyebrow: 'Serviços',
        defaultTitle: 'Soluções completas em engenharia clínica',
        defaultDescription:
          'Estruturamos serviços técnicos para sustentar a performance do parque tecnológico e apoiar decisões com visão de longo prazo.',
        spotlightEyebrow: 'Execução especializada',
        spotlightTitle: 'Uma operação desenhada para manter o parque tecnológico previsível, seguro e produtivo.',
        spotlightDescription:
          'As imagens e a composição desta seção reforçam o posicionamento da Del como parceira técnica de alto nível, com visão estruturada para manutenção, inventário, governança e evolução tecnológica.',
        spotlightAlt: 'Equipe e recursos da Del Tecnologia atuando em serviços técnicos e engenharia clínica.'
      },
      coverageSection: {
        eyebrow: 'Área de atuação',
        title: 'Atendimento preparado para operações críticas e ambientes assistenciais de alta responsabilidade.',
        description:
          'A Del Tecnologia atua com visão técnica e organizacional para diferentes perfis de instituições de saúde que dependem de ativos eletromédicos confiáveis e bem geridos.',
        figureTitle: 'Presença preparada para ambientes críticos',
        figureDescription: 'Hospitais, clínicas, laboratórios e operações com alta exigência técnica.',
        figureAlt: 'Atuação da Del Tecnologia em operações de saúde, hospitais e ambientes assistenciais.'
      },
      equipmentSection: {
        eyebrow: 'Equipamentos em destaque',
        title: 'Atuação técnica em ativos estratégicos para diagnóstico, monitorização e suporte à vida.',
        description:
          'A Del Tecnologia trabalha com equipamentos críticos para a rotina hospitalar, apoiando disponibilidade, segurança e previsibilidade operacional em diferentes frentes assistenciais.',
        summary: [
          { title: '6 frentes críticas', description: 'Equipamentos com alta relevância clínica e operacional.' },
          { title: 'Leitura consultiva', description: 'Manutenção, conformidade e governança técnica em cada ativo.' }
        ]
      },
      quickContactSection: {
        eyebrow: 'Contato rápido',
        title: 'Fale com uma equipe preparada para entender sua operação e estruturar a melhor solução.',
        description:
          'Apresente sua necessidade e receba um contato consultivo com foco em engenharia clínica, tecnologia médica e eficiência operacional.',
        figureTitle: 'Conversa consultiva com leitura da sua operação',
        figureDescription: 'Relacionamento comercial e técnico pensado para decisão, segurança e continuidade.',
        figureAlt: 'Contato institucional e atendimento consultivo da Del Tecnologia.'
      },
      contactForm: {
        eyebrow: 'Fale conosco',
        title: 'Solicite um contato consultivo',
        description: 'Envie sua necessidade para que nossa equipe avalie o melhor caminho técnico para sua instituição.',
        fields: { name: 'Nome', email: 'E-mail', phone: 'Telefone', company: 'Empresa', message: 'Mensagem' }
      }
    },
    forms: {
      register: {
        profileType: 'Tipo de cadastro',
        terms:
          'Li e concordo com os termos e com o tratamento dos dados para fins de relacionamento corporativo.',
        updates:
          'Desejo receber novidades institucionais, atualizações e comunicações estratégicas da Del Tecnologia.',
        footerPrompt: 'Já possui cadastro ou precisa redefinir seu acesso?',
        footerActions: ['Entrar na área Del', 'Recuperar senha'],
        fields: {
          fullName: 'Nome completo',
          corporateEmail: 'E-mail corporativo',
          phone: 'Telefone',
          company: 'Empresa',
          jobTitle: 'Cargo / função',
          segment: 'Segmento',
          employeesRange: 'Porte da operação',
          password: 'Senha',
          confirmPassword: 'Confirmar senha'
        }
      },
      login: {
        fields: { corporateEmail: 'E-mail corporativo', password: 'Senha' },
        remember: 'Manter sessão ativa neste dispositivo',
        forgotPassword: 'Esqueci minha senha',
        needSupport: 'Precisa de suporte?',
        footerPrompt: 'Ainda não possui acesso?',
        footerActions: ['Criar conta corporativa', 'Solicitar atendimento consultivo']
      },
      forgot: {
        fields: {
          email: 'E-mail',
          company: 'Empresa',
          verificationCode: 'Código de verificação',
          password: 'Nova senha',
          confirmPassword: 'Confirmar nova senha'
        },
        links: ['Voltar para login', 'Criar nova conta']
      },
      errors: {
        required: 'Este campo é obrigatório.',
        invalidCorporateEmail: 'Informe um e-mail corporativo válido.',
        invalidEmail: 'Informe um e-mail válido.',
        invalidField: 'Verifique as informações informadas.',
        invalidFieldShort: 'Verifique este campo.',
        minLength: 'Preencha ao menos {{count}} caracteres.',
        minLengthUse: 'Use pelo menos {{count}} caracteres.',
        passwordsMismatch: 'As senhas precisam ser iguais.'
      },
      feedback: {
        close: 'Fechar',
        contactSuccess: 'Mensagem enviada com sucesso. Em breve entraremos em contato.',
        contactError: 'Não foi possível enviar agora. Tente novamente em instantes.',
        loginSuccess: 'Login efetuado com sucesso. Redirecionando para sua área inicial.',
        loginError: 'Não foi possível autenticar. Revise seus dados e tente novamente.',
        registerError: 'Não foi possível concluir o cadastro. Revise os dados e tente novamente.',
        resetRequested: 'Código enviado para validação do acesso.',
        resetRequestError: 'Não foi possível iniciar a recuperação agora.'
      },
      flow: {
        registered: 'Cadastro enviado com sucesso. Faça login para continuar sua jornada com a Del.',
        resetCompleted: 'Senha redefinida com sucesso. Entre novamente para acessar o portal.',
        resetRequested:
          'Solicitação de recuperação registrada. Assim que validada, você poderá acessar sua conta novamente.',
        denied:
          'Seu perfil atual não possui permissão para a rota solicitada. Você foi redirecionado para uma área permitida.'
      }
    },
    auth: {
      roleLabels: {
        admin: 'Gestão executiva',
        clientManager: 'Gestor do cliente',
        operator: 'Operação técnica'
      },
      reset: {
        fallbackMaskedEmail: 'e-mail informado'
      },
      registration: {
        success:
          'Cadastro recebido com sucesso. Nossa equipe fará a validação inicial para liberar os próximos passos.'
      },
      errors: {
        invalidCredentials: 'Credenciais inválidas.',
        registerFailed: 'Não foi possível concluir o cadastro.',
        resetInvalidData: 'Dados inválidos para recuperação.',
        resetValidationFailed: 'Não foi possível validar a redefinição.',
        invalidVerificationCode: 'Código de verificação inválido.',
        passwordResetSuccess: 'Senha redefinida com sucesso. Seu acesso já pode ser retomado.'
      }
    },
    seo: {
      home: {
        title: 'Engenharia Clínica e Tecnologia Médica',
        description:
          'Site institucional da Del Tecnologia com soluções em engenharia clínica, gestão de ativos eletromédicos, manutenção e consultoria técnica.',
        keywords: [
          'engenharia clínica',
          'tecnologia médica',
          'gestão de ativos eletromédicos',
          'manutenção hospitalar',
          'engenharia clínica em itajaí'
        ],
        breadcrumbs: ['Início']
      }
    }
  },
  'en-US': {
    locale: {
      label: 'English',
      short: 'EN'
    },
    company: {
      shortName: 'Del Tecnologia'
    },
    ui: {
      actions: {
        talkToDel: 'Talk to Del',
        talkToDelFull: 'Talk to Del Tecnologia',
        directWhatsapp: 'Direct WhatsApp',
        triggerSupport: 'Request support',
        sendMessage: 'Send message',
        continue: 'Continue to verification',
        back: 'Back',
        resetPassword: 'Reset password',
        signInSecurely: 'Sign in securely',
        createCorporateAccount: 'Create corporate account',
        viewPortfolio: 'View full portfolio',
        goNow: 'Open now',
        logout: 'Sign out'
      },
      labels: {
        navigation: 'Navigation',
        contact: 'Contact',
        phone: 'Phone',
        email: 'Email',
        accountLinked: 'Linked account',
        sessionValidUntil: 'Session valid until',
        primaryEmail: 'Primary email',
        executiveMenu: 'Executive menu',
        medicalTechnology: 'Medical Technology',
        clinicalEngineering: 'Clinical Engineering',
        language: 'Language'
      },
      accessibility: {
        goToHomepage: 'Go to Del Tecnologia homepage',
        mainNavigation: 'Main navigation',
        openMenu: 'Open navigation menu',
        closeMenu: 'Close menu',
        institutionalIndicators: 'Institutional indicators',
        whatsappContact: 'Contact via WhatsApp',
        showPassword: 'Show password',
        hidePassword: 'Hide password'
      },
      status: {
        copyright: '© {{year}} {{companyName}}. All rights reserved.'
      }
    },
    pages: {},
    forms: {},
    auth: {},
    seo: {}
  }
};
