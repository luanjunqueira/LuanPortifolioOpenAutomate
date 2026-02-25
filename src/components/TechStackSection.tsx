import { Code, Server, Database, Cloud, Brain, Wrench, Plug, FolderTree, Layers, Workflow } from "lucide-react";

const stackCategories = [
  {
    title: "Linguagens de Programação",
    icon: Code,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
    items: [
      "TypeScript (v5.0+ com strict mode e type checking rigoroso)",
      "JavaScript (ESNext com features modernas)",
      "SQL (PostgreSQL dialeto com suporte a JSONB e window functions)",
      "Python 3.x (scripts de automação)",
      "Shell Script Bash (setup Linux)",
      "PowerShell (setup Windows)",
    ],
  },
  {
    title: "Frontend (SPA)",
    icon: Layers,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    items: [
      "React 18.2 (Concurrent Mode, Suspense)",
      "React Router DOM v6 (client-side routing com nested routes)",
      "Vite v4.4.5 (dev server com HMR instantâneo, build otimizado via Rollup)",
      "TypeScript (type safety, intellisense)",
      "Tailwind CSS v3.3 (utility-first CSS com JIT compiler)",
      "Framer Motion v12 (animações declarativas, gesture recognition)",
      "Lucide React (ícones SVG otimizados)",
      "Recharts (data visualization, wrapper de D3.js)",
      "Socket.io-client v4.8 (WebSocket com fallback para long polling)",
      "Supabase JS v2.38 (client para auth e realtime subscriptions)",
      "Context API (AuthContext + MetricsContext)",
      "Custom Hooks (useAuth, useMetrics)",
      "Axios (cliente HTTP com interceptors)",
    ],
  },
  {
    title: "Backend (API RESTful + WebSockets)",
    icon: Server,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    items: [
      "NestJS v10 (arquitetura modular, decorators para metadata)",
      "Node.js v20+ (event loop não-bloqueante)",
      "TypeORM v0.3.28 (Active Record e Data Mapper patterns)",
      "PostgreSQL pg v8.18 (connection pooling nativo)",
      "Passport.js + Passport-JWT (estratégia JWT)",
      "@nestjs/jwt v11 (geração e validação de tokens)",
      "Bcrypt v6 (hashing de senhas com salt configurável)",
      "Class-Validator + Class-Transformer (validação de DTOs)",
      "Socket.io Server via @nestjs/platform-socket.io",
      "@nestjs/swagger (geração automática de OpenAPI spec)",
      "RxJS (observables para event streams)",
      "@nestjs/config (validação type-safe de variáveis de ambiente)",
    ],
  },
  {
    title: "Banco de Dados & SQL",
    icon: Database,
    color: "text-amber-400",
    bgColor: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
    items: [
      "PostgreSQL 15 (conformidade ACID, suporte a JSONB)",
      "DDL (CREATE TABLE com constraints, IF NOT EXISTS para idempotência)",
      "DML (INSERT, SELECT com JOINs, UPDATE)",
      "Agregações (COUNT, SUM, AVG, ROUND com GROUP BY)",
      "Window Functions (SUM OVER PARTITION BY)",
      "Formatadores (TO_CHAR para timestamps e números)",
      "Views Analíticas (view_performance_ranking)",
      "JSONB (indexável com GIN, operadores nativos)",
      "Migrations via init.sql (versionamento de schema)",
    ],
  },
  {
    title: "Infraestrutura & DevOps",
    icon: Cloud,
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    items: [
      "Docker (isolamento de processos, imagens imutáveis)",
      "Docker Compose (orquestração de 4 serviços com networking privado e volumes persistentes)",
      "Dockerfile multi-stage build (separação de build e runtime)",
      "Nginx (gateway unificado, load balancing futuro)",
      "Railway: deploy de backend com variáveis gerenciadas",
      "Vercel: hosting de SPA com edge caching global",
      "Supabase: PostgreSQL gerenciado com auth integrada",
      "GitHub CI/CD (trigger automático em push para main)",
      "Ngrok (secure tunneling para testes de webhook local)",
    ],
  },
  {
    title: "Arquitetura & Padrões",
    icon: Layers,
    color: "text-rose-400",
    bgColor: "bg-rose-500/20",
    borderColor: "border-rose-500/30",
    items: [
      "REST API (verbos HTTP semânticos: GET, POST, PUT, DELETE)",
      "WebSockets (WSS) full-duplex sobre TLS",
      "JWT Stateless Auth (access + refresh tokens)",
      "CORS (Cross-Origin Resource Sharing configurado)",
      "HTTPS/TLS (criptografia em trânsito)",
      "HMR (Hot Module Replacement via Vite)",
      "Arquitetura Modular (separation of concerns no NestJS)",
      "SPA (Single Page Application)",
      "Injeção de Dependência (IoC pattern)",
      "Repository Pattern via TypeORM",
      "DTOs com class-validator para type safety em runtime",
      "Multi-stage Docker builds",
      ".env segregado por ambiente",
    ],
  },
  {
    title: "IA & LangChain",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    items: [
      "LangChain via n8n AI Agent nodes (abstração de chains, prompts e tools)",
      "Arquitetura ReAct (ciclo iterativo de pensamento e ação)",
      "LangChain Memory para contexto conversacional",
      "GPT-4o Mini (otimizado para custo e latência)",
      "Tools e Function Calling para ações baseadas em raciocínio",
      "Roteamento Inteligente: Rules para TEXTO, ÁUDIO, IMAGEM",
      "Texto: processamento direto via LLM com prompts otimizados",
      "Áudio: download → transcrição Whisper AI → processamento",
      "Imagem: download → Vision AI (OCR + descrição) → contexto",
      "Sistema de Retry com fallback",
      "Backup completo de conversas para melhoria de prompts",
      "Human-in-the-loop para escalação humana",
    ],
  },
  {
    title: "n8n — Workflows",
    icon: Workflow,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    items: [
      "n8n self-hosted via Docker (controle total de workflows e dados)",
      "Google Sheets Trigger (polling a cada minuto, evento rowAdded)",
      "AI Agent com memória persistente, GPT-4, Whisper AI",
      "HTTP Request para APIs REST externas, Webhook para eventos HTTP",
      "Switch/IF nodes para branching condicional",
      "Set nodes para transformação e manipulação de dados",
      "Google Sheets nodes (leitura e escrita batch)",
      "WAHA nodes (interface com WhatsApp Business)",
      "Gmail/SMTP nodes (envio com threading)",
      "Sticky Notes para anotações inline nos workflows",
      "Error handling com retry automático configurável",
      "Exportação de workflows em JSON para versionamento",
      "Execução manual (via interface) e automática (via triggers)",
    ],
  },
  {
    title: "Integrações Externas",
    icon: Plug,
    color: "text-teal-400",
    bgColor: "bg-teal-500/20",
    borderColor: "border-teal-500/30",
    items: [
      "Google Sheets API v4 (tracking de campanhas e logging de erros)",
      "Google Cloud Console (API Keys, quotas e credenciais OAuth)",
      "n8n (orquestração de workflows complexos)",
      "OpenAI GPT-4 (chat completion para NLP)",
      "Whisper AI (speech-to-text)",
      "WAHA — WhatsApp HTTP API (gateway WhatsApp Business)",
      "SMTP/Gmail Gateway (campanhas com autenticação segura e threading)",
      "Axios (cliente HTTP com interceptors para frontend)",
    ],
  },
  {
    title: "Ferramentas de Desenvolvimento",
    icon: Wrench,
    color: "text-slate-400",
    bgColor: "bg-slate-500/20",
    borderColor: "border-slate-500/30",
    items: [
      "VS Code (extensões para TypeScript, ESLint, Prettier)",
      "Git (controle de versão distribuído)",
      "GitHub (hosting de repositório e CI/CD)",
      "Postman/Insomnia (clientes REST para teste de APIs)",
      "Chrome DevTools (suite de debugging de frontend)",
      "React DevTools (inspeção de árvore de componentes)",
      "TypeScript Compiler (tsc) — transpilador e type checker",
      "ESLint (linter para qualidade de código)",
      "Prettier (formatador automático)",
      "PowerShell (shell para Windows)",
      "Git Bash (shell POSIX-compliant para Windows)",
    ],
  },
  {
    title: "Estrutura do Projeto (Monorepo)",
    icon: FolderTree,
    color: "text-lime-400",
    bgColor: "bg-lime-500/20",
    borderColor: "border-lime-500/30",
    items: [
      "frontend/ — React + Vite SPA",
      "backend/ — NestJS REST API + WebSockets",
      "n8n/ — Workflows exportados em JSON",
      "nginx/ — Configurações de proxy reverso",
      "sql/ — Migrations (init.sql) e views",
      "scripts/ — auto-setup.ps1 (Windows) e setup.sh (Linux)",
      "docker-compose.yml — Orquestração dos 4 serviços",
    ],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Stack Completa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack Técnica{" "}
            <span className="text-gradient">Completa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todas as tecnologias, frameworks e ferramentas utilizadas no OpenAutomate
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border ${cat.borderColor} bg-card/50 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-foreground">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.color.replace('text-', 'bg-')} mt-1.5 shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
