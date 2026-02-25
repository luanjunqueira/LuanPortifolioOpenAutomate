import { Cloud, Database, Globe, AlertTriangle } from "lucide-react";

const deployTargets = [
  {
    icon: Cloud,
    title: "Backend → Railway (PaaS)",
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    details: [
      "Dockerfile.prod com multi-stage build: Stage 1 (builder) para transpilação TypeScript → JS, Stage 2 (runtime) com apenas artifacts de produção",
      "railway.json configurado para comportamento de deploy e variáveis de build",
      "Variáveis migradas: DATABASE_URL, JWT_SECRET, PORT, NODE_ENV, SUPABASE_URL, SUPABASE_ANON_KEY, FRONTEND_URL, WEBHOOK_SECRET",
      "Refatoração crítica: eliminação de hostname hardcoded 'db', substituído por DATABASE_URL dinâmica",
      "CORS: whitelist de origem configurada via FRONTEND_URL para permitir requisições do Vercel",
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados → Supabase (DBaaS)",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    details: [
      "Migração de PostgreSQL container Docker local para instância gerenciada com backups automáticos",
      "Schema deployment via init.sql com DDL completa (CREATE TABLE, views analíticas)",
      "Conexão SSL/TLS obrigatória: todas as conexões criptografadas em trânsito",
      "Connection string formato postgres:// injetado via variável de ambiente",
    ],
  },
  {
    icon: Globe,
    title: "Frontend → Vercel (Edge CDN)",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    details: [
      "Root Directory: frontend/ | Build Preset: Vite (code splitting, tree shaking, minificação)",
      "Variáveis: VITE_API_URL, VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SHEETS_ID, VITE_SHEETS_API_KEY",
      "CI/CD Pipeline: push main → trigger automático de build e deploy",
      "Deploy de preview automático para Pull Requests",
      "Rollback manual disponível via dashboard",
    ],
  },
];

const problemsResolved = [
  {
    title: "package-lock.json fora do contexto Docker",
    situation: "Arquivo de lock não acessível durante build da imagem Docker",
    solution: "Ajuste de .dockerignore e estratégia de COPY em multi-stage build para otimizar layers de cache do Docker",
  },
  {
    title: "Hostname 'db' hardcoded no backend",
    situation: "Backend acoplado ao nome de host do Docker Compose local ('db'), não funcionava em produção",
    solution: "Refatoração para injeção de DATABASE_URL completa via variáveis de ambiente, permitindo conexão com qualquer instância PostgreSQL",
  },
  {
    title: "CORS bloqueando requisições do Vercel",
    situation: "Política de mesma origem impedindo comunicação frontend (Vercel) → backend (Railway)",
    solution: "Configuração de middleware CORS no NestJS com whitelist de origens permitidas via variável FRONTEND_URL",
  },
  {
    title: "Variáveis de ambiente não lidas em produção",
    situation: "Build do Vite não injetando variáveis corretamente (VITE_API_URL estava undefined)",
    solution: "Correção do prefixo VITE_ para variáveis públicas e configuração adequada do processo de build no Vercel",
  },
];

const DeploySection = () => {
  return (
    <section id="deploy" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            DevOps
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Deploy: Do Local para{" "}
            <span className="text-gradient">Multi-Cloud</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estratégia de deploy distribuído em múltiplos provedores cloud, cada um otimizado para sua função específica. Transição de ambiente dockerizado local para infraestrutura gerenciada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deployTargets.map((target, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border ${target.borderColor} bg-card/50 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-500`}
            >
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl ${target.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <target.icon className={`w-7 h-7 ${target.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{target.title}</h3>
                <ul className="space-y-3">
                  {target.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${target.color.replace('text-', 'bg-')} mt-1.5 shrink-0`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Problems Resolved */}
        <div className="bg-card/50 border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Problemas Resolvidos em Produção</h3>
              <p className="text-sm text-muted-foreground">Ocorreram durante a migração do ambiente local (Docker Compose) para produção multi-cloud. Cada solução eliminou acoplamentos com configurações locais.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {problemsResolved.map((problem, i) => (
              <div key={i} className="px-4 py-4 rounded-xl bg-secondary/30 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{problem.title}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1"><strong>Situação:</strong> {problem.situation}</p>
                <p className="text-xs text-muted-foreground"><strong>Solução:</strong> {problem.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploySection;
