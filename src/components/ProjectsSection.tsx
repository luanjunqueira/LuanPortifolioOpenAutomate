import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Workflow, Github, Play } from "lucide-react";

const projectBadges = [
  "Em Produção", "IA Multimodal", "Full Stack", "Multi-Cloud", "CI/CD Automático",
  "LangChain", "Responsivo Mobile", "Orientado a Eventos", "Human-in-the-loop", "RAG",
];

const techConcepts = [
  "Webhooks", "Agentes de IA", "Integrações via HTTP", "Processamento de áudio e imagem",
  "Memória de conversação", "Automação de e-mails", "Integração com Google Agenda",
  "Roteamento lógico de fluxos", "Integração de automações", "APIs", "Bifurcação condicional",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projeto Principal &{" "}
            <span className="text-gradient">Prova Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstração prática de habilidades em desenvolvimento full stack e automação com IA
          </p>
        </div>

        {/* Main Project Card */}
        <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardHeader className="relative pb-4 pt-8">
            {/* Badges Flow */}
            <div className="flex gap-2 flex-wrap mb-6">
              {projectBadges.map((badge, i) => (
                <Badge key={i} className="bg-primary/20 text-primary border-primary/30 text-[10px] md:text-xs">
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Workflow className="w-7 h-7 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors">
              OpenAutomate — Plataforma de Orquestração e Automação com IA Multimodal
            </CardTitle>
          </CardHeader>

          <CardContent className="relative">
            <CardDescription className="text-muted-foreground text-base leading-relaxed mb-8">
              Sistema de automação empresarial fullstack com arquitetura orientada a eventos, implementando
              comunicação em tempo real via WebSockets e processamento assíncrono através de workflows n8n.
              O sistema é dividido em dois pilares técnicos:
            </CardDescription>

            {/* PILAR 1 */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                PILAR 1 — <span className="text-gradient">Pipeline de Cold Emailing Inteligente</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Workflow completo de orquestração de campanhas com controle granular em cada etapa:
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">1. CAPTURA E VALIDAÇÃO INICIAL:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Google Sheets Trigger: detecção em tempo real de novas linhas (polling a cada minuto, evento rowAdded)</li>
                    <li>• Busca Leads na Planilha: busca leads que ainda não estão com status 'Sent' para serem processados</li>
                    <li>• Filtra Leads Enviados: filtra leads que já estão como 'Sent' para não repetir o processo, enviando e-mail apenas para quem ainda não foi contatado</li>
                    <li>• Limitar Lote: controle de batch size para evitar sobrecarga de APIs e throttling</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">2. VALIDAÇÃO MULTI-CAMADA:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Rate Limiter Global: controle centralizado de requisições para respeitar limites de APIs externas</li>
                    <li>• Validação de Email via Hunter.io: verificação de formato, domínio e deliverability score</li>
                    <li>• Anti-Bounce Check: segunda camada de validação para reduzir bounces e proteger reputação do sender</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">3. SEGMENTAÇÃO E PERSONALIZAÇÃO:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Segmentação por Tamanho: heurística automática baseada em domínio e dados da empresa</li>
                    <li>• Segmento SMB: classificação como Small/Medium Business para personalização de abordagem</li>
                    <li>• Segmento Enterprise: roteamento alternativo para grandes empresas</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">4. A/B TESTING E OTIMIZAÇÃO:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• A/B Test Split: divisão controlada da base em dois grupos para teste de variantes</li>
                    <li>• Config Variante A: parâmetros de personalização do grupo A (subject line, corpo do email, CTA)</li>
                    <li>• Config Variante B: parâmetros alternativos do grupo B para comparação de performance</li>
                    <li>• Unifica Variantes: merge das configurações após aplicação individual</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">5. DISPARO E TRACKING:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Monta Email: composição final com personalização aplicada (merge de template + dados do lead)</li>
                    <li>• Envia Disparo via Gmail: envio através do Gmail API com autenticação OAuth2</li>
                    <li>• Cria Tracking: persistência de metadados em Google Sheets para rastreamento</li>
                    <li>• Atualiza Status: update de status para "Enviado" com timestamp</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">6. TRATAMENTO DE ERROS:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Planilha ERROS1: logging estruturado de falhas no disparo inicial (email inválido, API error, timeout)</li>
                    <li>• Email Disparo Concluído: notificação automática ao administrador sobre conclusão do ciclo</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">7. FOLLOW-UP AUTOMATIZADO (APÓS 3 DIAS):</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• ENVIO FOLLOW-UP: cron job agendado com scheduling preciso (execução em horário fixo após 3 dias)</li>
                    <li>• Busca TRACKING: recupera registros que ainda não possuem a coluna 'followUpEnviadoEm' preenchida para serem enviados o follow-up</li>
                    <li>• Filtrar Leads para Follow-up: seleção de leads elegíveis para receber o follow-up</li>
                    <li>• Rate Limiter Follow-Up: controle de throttling específico para follow-up</li>
                    <li>• Monta Email Follow-up: composição com threading nativo do Gmail (Message-ID e In-Reply-To headers)</li>
                    <li>• Envia Follow-up via Gmail: envia o email de follow-up personalizado para o cliente que recebeu o email inicial</li>
                    <li>• Atualiza Status no TRACKING: preenche automaticamente a coluna 'followUpEnviadoEm' no Google Sheets com a data e hora exata em que o follow-up foi enviado</li>
                    <li>• Planilha ERROS2: logging dedicado para erros de follow-up</li>
                    <li>• Email Follow-Up Concluído: contabiliza a quantidade total de follow-ups enviados no ciclo e envia email ao administrador com quantidade, data, hora e confirmação de sucesso</li>
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <h5 className="text-sm font-semibold text-foreground mb-2">VISIBILIDADE E CONTROLE:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Tracking completo via Google Sheets com histórico de cada interação</li>
                    <li>• Métricas de conversão por variante (A vs B)</li>
                    <li>• Taxa de abertura e resposta (quando integrado com tracking pixels)</li>
                    <li>• Rastreamento end-to-end de cada lead no funil</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILAR 2 */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                PILAR 2 — <span className="text-gradient">Agente de Atendimento WhatsApp com IA Multimodal</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Arquitetura baseada em webhook receiver com processamento inteligente em múltiplas etapas:
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">1. RECEPÇÃO E FILTRAGEM:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Webhook: endpoint HTTP para receber eventos do WAHA WhatsApp API</li>
                    <li>• Análise Inteligente: primeira camada de decisão baseada em regras</li>
                    <li>• Filtro de Atendimento: envia menu automático ao cliente para escolher entre atendimento por IA (opção 1) ou atendimento humano (opção 2)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">2. ROTEAMENTO INTELIGENTE (3 CAMINHOS):</h5>

                  <div className="ml-4 space-y-3">
                    <div>
                      <h6 className="text-xs font-semibold text-primary mb-1">CAMINHO 1 — TEXTO:</h6>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• AI Agent com GPT-4o MINI: processamento via LangChain com arquitetura ReAct</li>
                        <li>• MEMÓRIA: LangChain Memory buffer para contexto conversacional entre interações</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-xs font-semibold text-primary mb-1">CAMINHO 2 — ÁUDIO:</h6>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Download do arquivo de áudio via WAHA API</li>
                        <li>• Transcrição speech-to-text via Whisper AI</li>
                        <li>• Integração do texto transcrito ao contexto para o AI Agent processar</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-xs font-semibold text-primary mb-1">CAMINHO 3 — IMAGEM:</h6>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Download do arquivo via WAHA API</li>
                        <li>• Análise via Vision AI com OCR + descrição semântica</li>
                        <li>• Contexto visual extraído é passado ao AI Agent</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">3. RESILIÊNCIA E OBSERVABILIDADE:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Sistema de Retry: tentativa automática com backoff em caso de falha de API</li>
                    <li>• Logger: registro estruturado de todas as interações (input, output, latência, erros)</li>
                    <li>• Sistema de Métricas: contadores de mensagens processadas, taxa de sucesso, tempo médio de resposta</li>
                    <li>• Backup de Conversas: persistência assíncrona de todo histórico conversacional</li>
                    <li>• Envia WhatsApp: envio da resposta final processada via WAHA API</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Centro de Comando */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-2">
                <span className="text-gradient">Centro de Comando — Dashboard de Observabilidade</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Single Page Application (SPA) com estado global gerenciado via Context API (AuthContext para sessão
                JWT, MetricsContext para dados de performance). Comunicação bidirecional em tempo real via WebSockets
                (WSS) para atualização instantânea de métricas: execuções totais, canais ativos, taxa de sucesso e
                economia gerada. Visualização de funil de conversão com gráficos interativos (Recharts), sistema de
                logs com ID de protocolo único para rastreabilidade end-to-end, e exportação de dados em formato CSV
                para análise offline.
              </p>
            </div>

            {/* Tech Concepts */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techConcepts.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-secondary/50 text-foreground/80 border border-border"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* 3 Buttons */}
            <div className="flex flex-wrap gap-4 items-start">
              <div className="flex flex-col">
                <a
                  href="https://openautomate.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90"
                  >
                    Ver Projeto ao Vivo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <span className="text-xs text-muted-foreground mt-2 max-w-[260px]">
                  (Acesso demonstrativo mediante contato — credenciais fornecidas a recrutadores interessados)
                </span>
              </div>

              <a
                href="https://github.com/luanjunqueira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver Repositório
                </Button>
              </a>

              <Button
                asChild
                className="font-semibold hover:opacity-90"
                style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}
              >
                <a href="https://www.youtube.com/playlist?list=PLDiP5w6fZaoUgyfifVRLCTTrOVJJ9FW0H" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Demonstração no YouTube
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
