# Mermaid - Mapa Mental Moby IA

Visualização interativa da plataforma Moby - Sistema completo de gestão imobiliária com inteligência artificial.

## 🚀 Demonstração

Acesse a aplicação em: [Seu URL da Vercel aqui]

## 📋 Funcionalidades

- **3 Visualizações Interativas:**
  - 🛤️ **Jornada do Lead**: Fluxo completo desde o primeiro contato até a conversão
  - 🏗️ **Arquitetura Técnica**: Stack tecnológico (Next.js, Supabase, OpenAI)
  - 🧠 **Mapa Mental**: Visão completa das funcionalidades do produto

- **Recursos de Apresentação:**
  - 🔍 Zoom in/out com controles intuitivos
  - 🖥️ Modo apresentação em tela cheia
  - ⌨️ Navegação por teclado (setas para mudar diagramas)
  - 📱 Design responsivo para todos dispositivos
  - 🌙 Tema dark otimizado

## 🛠️ Tecnologias

- HTML5 + CSS3
- React 18
- Mermaid.js 10
- Deploy automático via Vercel

## 💻 Desenvolvimento Local

```bash
# Clonar o repositório
git clone https://github.com/carneiroped/mermaid-mapamental.git

# Entrar no diretório
cd mermaid-mapamental

# Instalar dependências (opcional, apenas para servidor local)
npm install

# Rodar localmente
npm run dev
```

Ou simplesmente abra o arquivo `index.html` no navegador.

## 🚀 Deploy

### Deploy Automático (GitHub Actions)

O projeto está configurado para deploy automático na Vercel a cada push na branch `main`.

### Deploy Manual na Vercel

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça o deploy:
```bash
vercel
```

### Configuração dos Secrets do GitHub

Para o deploy automático funcionar, configure os seguintes secrets no seu repositório:

1. `VERCEL_TOKEN`: Token de autenticação da Vercel
2. `VERCEL_ORG_ID`: ID da organização na Vercel
3. `VERCEL_PROJECT_ID`: ID do projeto na Vercel

Para obter esses valores:
```bash
vercel login
vercel link
cat .vercel/project.json
```

## 🎯 Uso em Apresentações

1. Clique no botão de tela cheia (último ícone nos controles)
2. Use as setas do teclado para navegar entre os diagramas
3. ESC para sair do modo apresentação
4. Os controles ficam ocultos e aparecem ao mover o mouse

## 📱 Sobre o Moby

O Moby é uma plataforma revolucionária que utiliza IA para:
- Atendimento 24/7 automatizado
- Qualificação inteligente de leads
- Gestão completa do ciclo de vendas
- Integração omnichannel (WhatsApp, Instagram, Facebook, WebChat)
- Analytics e insights em tempo real

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes