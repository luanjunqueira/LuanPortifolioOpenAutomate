import { Brain, Code, Database, Plug } from "lucide-react";

const skillPillars = [
  {
    title: "IA & Automação",
    icon: Brain,
    skills: ["IA Generativa", "AI Agents", "N8N", "RAG", "NLP", "Python", "Memory Systems"],
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "Full Stack",
    icon: Code,
    skills: ["React + TypeScript", "NestJS + Node.js", "Next.js (conceitos)", "Redux", "TailwindCSS", "WebSockets"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "SQL Avançado", "APIs REST", "OAuth 2.0", "Docker"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Integrações",
    icon: Plug,
    skills: ["Gmail API", "Google Calendar API", "WhatsApp API", "Webhooks", "HTTP Requests"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Competências
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ecossistema{" "}
            <span className="text-gradient">Tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Adaptabilidade como diferencial: transito entre código e dados conforme a necessidade
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillPillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border ${pillar.borderColor} bg-card/50 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-500`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  {pillar.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {pillar.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.iconColor.replace('text-', 'bg-')}`} />
                      <span className="font-medium text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-card/50 border border-border">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Foco na solução, não na ferramenta.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
