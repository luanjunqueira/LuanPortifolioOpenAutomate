import { Terminal, Container, Code2, Globe, GitBranch, Wrench } from "lucide-react";

const devTools = [
  { icon: Code2, label: "VS Code", desc: "Editor principal com suporte nativo a TypeScript Language Server (LSP) para IntelliSense e refactoring" },
  { icon: Terminal, label: "Node.js v20+", desc: "Runtime com suporte a recursos modernos (top-level await, native fetch API)" },
  { icon: Terminal, label: "npm", desc: "Gerenciador de pacotes com lock file para versionamento determinístico de dependências" },
  { icon: Container, label: "Docker Desktop + Compose", desc: "Orquestração de 4 containers isolados em rede privada: Backend (NestJS) :3001, Frontend (Vite) :5173, PostgreSQL :5433, n8n :5678. Volumes persistentes para dados de banco e workflows" },
  { icon: Globe, label: "Nginx", desc: "Proxy reverso local atuando como gateway unificado para todos os serviços" },
  { icon: Globe, label: "Ngrok", desc: "Túnel HTTP/HTTPS seguro para exposição de localhost, essencial para receber webhooks de APIs externas durante desenvolvimento" },
  { icon: GitBranch, label: "Git + GitHub", desc: "Controle de versão distribuído com remote hosting" },
  { icon: Terminal, label: "PowerShell + Git Bash", desc: "Shells para automação cross-platform (Windows e Linux)" },
  { icon: Wrench, label: "Postman / Insomnia", desc: "Clientes HTTP para teste de endpoints REST, com suporte a collections e variáveis de ambiente" },
  { icon: Wrench, label: "Chrome DevTools", desc: "Suite de ferramentas para debugging de frontend (Network waterfall, Performance profiling, Console)" },
  { icon: Terminal, label: "Python 3.x", desc: "Interpretador para scripts de automação (ex: read_n8n_db.py para leitura direta do banco do n8n)" },
  { icon: Terminal, label: "Scripts de Setup Automatizado", desc: "auto-setup.ps1 (Windows PowerShell) e setup.sh (Linux Bash) — Executam validação de dependências, configuração de .env, inicialização de containers via Docker Compose e aplicação de migrations SQL" },
];

const DevEnvironmentSection = () => {
  return (
    <section id="dev-environment" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Infraestrutura
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ambiente de{" "}
            <span className="text-gradient">Desenvolvimento Local</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack de desenvolvimento configurada para reprodutibilidade completa entre ambientes. Setup automatizado com scripts cross-platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {devTools.map((tool, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <tool.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{tool.label}</h4>
                <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevEnvironmentSection;
