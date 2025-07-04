'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const MermaidDiagram = dynamic(() => import('@/components/MermaidDiagram'), {
  ssr: false
})

const diagramas = {
  jornada: `flowchart TB
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

    Improve -.-> AI`,

  arquitetura: `graph TB
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
    AssemblyAI --> Functions`,

  mapaMental: `mindmap
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
      Subdomínios Próprios`
}

export default function Home() {
  const [diagramaAtivo, setDiagramaAtivo] = useState<'jornada' | 'arquitetura' | 'mapaMental'>('jornada')

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Moby - Plataforma Imobiliária com IA
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Visualização interativa dos fluxos e arquitetura da plataforma
        </p>

        <div className="flex gap-4 mb-8">
          <button
            type="button"
            onClick={() => setDiagramaAtivo('jornada')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              diagramaAtivo === 'jornada' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Jornada do Lead
          </button>
          <button
            type="button"
            onClick={() => setDiagramaAtivo('arquitetura')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              diagramaAtivo === 'arquitetura' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Arquitetura Técnica
          </button>
          <button
            type="button"
            onClick={() => setDiagramaAtivo('mapaMental')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              diagramaAtivo === 'mapaMental' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Mapa Mental do Produto
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {diagramaAtivo === 'jornada' && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Jornada do Lead</h2>
              <p className="text-gray-600 mb-6">
                Fluxo completo desde o primeiro contato até a conversão em venda
              </p>
              <MermaidDiagram 
                chart={diagramas.jornada} 
                id="jornada-diagram" 
              />
            </>
          )}

          {diagramaAtivo === 'arquitetura' && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Arquitetura Técnica</h2>
              <p className="text-gray-600 mb-6">
                Stack tecnológico e integrações da plataforma
              </p>
              <MermaidDiagram 
                chart={diagramas.arquitetura} 
                id="arquitetura-diagram" 
              />
            </>
          )}

          {diagramaAtivo === 'mapaMental' && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Mapa Mental do Produto</h2>
              <p className="text-gray-600 mb-6">
                Visão completa das funcionalidades da plataforma Moby
              </p>
              <MermaidDiagram 
                chart={diagramas.mapaMental} 
                id="mapa-mental-diagram" 
              />
            </>
          )}
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>© 2025 Moby - Revolucionando o atendimento imobiliário com Inteligência Artificial</p>
        </div>
      </div>
    </main>
  )
}
