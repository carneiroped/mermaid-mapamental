diagrama Mermaid completo mostrando a jornada do lead no sistema Moby, desde o primeiro contato até a venda:

  flowchart TB
      %% Estilos
      classDef ai fill:#e1f5e1,stroke:#4caf50,stroke-width:3px
      classDef lead fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
      classDef system fill:#fff3e0,stroke:#ff9800,stroke-width:2px
      classDef conversion fill:#f3e5f5,stroke:#9c27b0,stroke-width:3px
      classDef action fill:#ffebee,stroke:#f44336,stroke-width:2px

      %% Início da Jornada
      Start([Lead entra em contato]) --> Channels{Canal de Entrada}

      %% Canais de Entrada
      Channels --> |WhatsApp| WA[WhatsApp Business]
      Channels --> |Website| Web[WebChat do Site]
      Channels --> |Instagram| IG[Instagram Direct]
      Channels --> |Facebook| FB[Facebook Messenger]
      Channels --> |Portais| Portal[Portais Imobiliários]

      %% Convergência para IA
      WA --> AI[🤖 Assistente Virtual IA]:::ai
      Web --> AI
      IG --> AI
      FB --> AI
      Portal --> AI

      %% Processamento IA
      AI --> Analysis{Análise Inteligente}:::ai

      Analysis --> |Extração| Extract[Extrai Informações<br/>- Nome<br/>- Telefone<br/>- E-mail<br/>- Preferências]:::ai
      Analysis --> |Classificação| Intent[Identifica Intenção<br/>- Compra<br/>- Venda<br/>- Aluguel<br/>- Informação]:::ai
      Analysis --> |Sentimento| Sentiment[Análise de Sentimento<br/>- Urgência<br/>- Interesse<br/>- Satisfação]:::ai

      %% Qualificação
      Extract --> Qualify{Qualificação do Lead}:::ai
      Intent --> Qualify
      Sentiment --> Qualify

      Qualify --> |Score Alto<br/>8-10| Hot[🔥 Lead Quente]:::lead
      Qualify --> |Score Médio<br/>5-7| Warm[🌡️ Lead Morno]:::lead
      Qualify --> |Score Baixo<br/>0-4| Cold[❄️ Lead Frio]:::lead

      %% Ações por Tipo de Lead
      Hot --> Immediate[Atendimento Imediato<br/>Corretor Notificado]:::action
      Warm --> Nurture[Nutrição Automática<br/>+ Follow-up Programado]:::system
      Cold --> Auto[Automação Contínua<br/>Base de Nutrição]:::system

      %% Atendimento Humano
      Immediate --> Human{Corretor Assume<br/>Atendimento}
      Human --> |Via Plataforma| Platform[Dashboard Moby<br/>- Histórico Completo<br/>- Sugestões IA<br/>- Dados do Lead]:::system

      %% Processo de Venda
      Platform --> Sales{Processo de Venda}

      Sales --> |Apresentação| Show[Apresentação de Imóveis<br/>- Match por IA<br/>- Tour Virtual<br/>- Agendamento]:::action
      Sales --> |Negociação| Nego[Negociação<br/>- Propostas<br/>- Documentação<br/>- Análise de Crédito]:::action
      Sales --> |Acompanhamento| Follow[Follow-up Inteligente<br/>- Lembretes Automáticos<br/>- Tarefas Programadas]:::system

      %% Conversão
      Show --> Decision{Decisão do Cliente}
      Nego --> Decision
      Follow --> Decision

      Decision --> |Positiva| Close[✅ Fechamento da Venda]:::conversion
      Decision --> |Negativa| Return[↩️ Retorna para Nutrição]:::system
      Decision --> |Pendente| Wait[⏳ Aguarda Decisão<br/>Follow-up Automático]:::system

      %% Pós-Venda
      Close --> PostSale[Pós-Venda<br/>- Documentação<br/>- Satisfação<br/>- Indicações]:::conversion

      %% Nutrição Contínua
      Nurture --> Content{Conteúdo Personalizado}:::system
      Auto --> Content
      Return --> Content
      Wait --> Content

      Content --> |E-mail| Email[Campanhas Segmentadas]
      Content --> |WhatsApp| WMsg[Mensagens Automatizadas]
      Content --> |Retargeting| Retarget[Anúncios Personalizados]

      %% Reengajamento
      Email --> Reengage{Reengajamento}:::system
      WMsg --> Reengage
      Retarget --> Reengage

      Reengage --> |Novo Interesse| AI
      Reengage --> |Sem Resposta| Archive[📁 Arquivado<br/>Base Futura]

      %% Métricas e Analytics
      PostSale --> Metrics[📊 Analytics e Métricas<br/>- Taxa de Conversão<br/>- Tempo de Ciclo<br/>- ROI por Canal<br/>- NPS]:::system
      Archive --> Metrics

      %% Retroalimentação
      Metrics --> Improve[🔄 Melhoria Contínua<br/>- Ajuste de IA<br/>- Otimização de Processos<br/>- Treinamento]:::ai

      Improve -.-> AI

  E aqui está um segundo diagrama focado na arquitetura técnica e integrações:

  graph TB
      %% Estilos
      classDef frontend fill:#e8eaf6,stroke:#3f51b5,stroke-width:3px
      classDef backend fill:#e0f2f1,stroke:#009688,stroke-width:3px
      classDef ai fill:#f3e5f5,stroke:#9c27b0,stroke-width:3px
      classDef integration fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
      classDef data fill:#efebe9,stroke:#795548,stroke-width:2px

      %% Frontend
      subgraph "Frontend - Next.js"
          Web[WebChat Widget]:::frontend
          Dashboard[Dashboard Admin]:::frontend
          Mobile[Mobile App]:::frontend
          Landing[Landing Pages]:::frontend
      end

      %% Canais de Comunicação
      subgraph "Canais Omnichannel"
          WhatsApp[WhatsApp Business]:::integration
          Instagram[Instagram API]:::integration
          Facebook[Facebook Messenger]:::integration
          Email[Email Gateway]:::integration
      end

      %% Core Backend
      subgraph "Backend - Supabase"
          Auth[Autenticação<br/>Multi-tenant]:::backend
          RLS[Row Level Security]:::backend
          Realtime[Real-time<br/>Subscriptions]:::backend
          Storage[Storage<br/>Documentos]:::backend
          Functions[Edge Functions]:::backend
      end

      %% Banco de Dados
      subgraph "PostgreSQL Database"
          Leads[(Leads)]:::data
          Properties[(Imóveis)]:::data
          Chats[(Conversas)]:::data
          Documents[(Documentos)]:::data
          Tasks[(Tarefas)]:::data
          Analytics[(Analytics)]:::data
      end

      %% Sistema de IA
      subgraph "Inteligência Artificial"
          OpenAI[OpenAI GPT-4]:::ai
          Embeddings[Vector Embeddings<br/>1536 dimensões]:::ai
          RAG[RAG System<br/>Recuperação]:::ai
          Sentiment[Análise de<br/>Sentimento]:::ai
          Scoring[Lead Scoring<br/>Algorithm]:::ai
      end

      %% Integrações Externas
      subgraph "Integrações"
          N8N[n8n Automação]:::integration
          Evolution[Evolution API]:::integration
          ElevenLabs[ElevenLabs<br/>Text-to-Speech]:::integration
          AssemblyAI[AssemblyAI<br/>Speech-to-Text]:::integration
      end

      %% Fluxo de Dados
      WhatsApp --> Evolution
      Instagram --> Functions
      Facebook --> Functions
      Email --> Functions

      Evolution --> Functions
      Functions --> OpenAI
      Functions --> Embeddings

      OpenAI --> RAG
      Embeddings --> RAG
      RAG --> Documents

      Functions --> Sentiment
      Functions --> Scoring

      Sentiment --> Leads
      Scoring --> Leads

      Functions --> Chats
      Chats --> Realtime

      Realtime --> Dashboard
      Auth --> Dashboard
      RLS --> Leads
      RLS --> Properties
      RLS --> Chats

      Dashboard --> Tasks
      Tasks --> N8N
      N8N --> WhatsApp
      N8N --> Email

      Properties --> Analytics
      Leads --> Analytics
      Chats --> Analytics

      Web --> Functions
      Mobile --> Functions
      Landing --> Leads

      Storage --> Documents
      ElevenLabs --> Functions
      AssemblyAI --> Functions

  E um terceiro diagrama mostrando o mapa mental do produto:

  mindmap
    root((Moby<br/>Plataforma<br/>Imobiliária IA))
      Atendimento Inteligente
        Assistente Virtual 24/7
        Multi-canal
          WhatsApp
          Instagram
          Facebook
          WebChat
        Respostas Instantâneas
        Qualificação Automática

      Gestão de Leads
        Scoring Inteligente
          Análise de Comportamento
          Intenção de Compra
          Poder Aquisitivo
        Pipeline Visual
        Nutrição Automatizada
        Segmentação Avançada

      CRM Completo
        Histórico Unificado
        Tarefas e Lembretes
        Documentação Digital
        Relatórios Gerenciais

      Inteligência Artificial
        GPT-4 Integration
        Análise de Sentimento
        Recomendação de Imóveis
        Insights Preditivos
        RAG para Conhecimento

      Catálogo de Imóveis
        Busca Inteligente
        Tours Virtuais
        Geolocalização
        Match Automático
        Publicação Multi-portal

      Automação
        Workflows Personalizados
        E-mails Sequenciais
        WhatsApp Campaigns
        Follow-up Automático
        Integração n8n

      Analytics
        Dashboard Real-time
        Métricas de Conversão
        ROI por Canal
        Performance Corretores
        Previsão de Vendas

      Multi-tenant
        Isolamento de Dados
        Personalização por Marca
        Gestão de Equipes
        Permissões Granulares
        Subdomínios Próprios

  Estes diagramas mostram:

  1. Primeiro diagrama: A jornada completa do lead, desde o primeiro contato até a venda, destacando os pontos de IA e automação
  2. Segundo diagrama: A arquitetura técnica e integrações do sistema
  3. Terceiro diagrama: Mapa mental com todas as funcionalidades principais do produto

  Os diagramas são perfeitos para apresentações comerciais, mostrando como o Moby revoluciona o atendimento imobiliário com IA, aumentando conversões e reduzindo o tempo
  de resposta.
