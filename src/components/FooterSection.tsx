
import { Mail, Copy, MessageCircle } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "luan.junqueiraa@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-background" />

      <div className="relative max-w-4xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos{" "}
            <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pronto para transformar desafios técnicos em soluções robustas.
            Entre em contato e vamos discutir seu projeto.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5512982055846"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          {/* Email Display */}
          <div className="flex items-center gap-3 bg-card/50 border border-border rounded-xl px-6 py-4">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium select-all">{email}</span>
            <button
              onClick={copyEmail}
              className="ml-2 p-2 hover:bg-primary/10 rounded-lg transition-colors"
              title="Copiar e-mail"
            >
              <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </button>
            {copied && (
              <span className="text-sm text-primary animate-fade-in">Copiado!</span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Luan Junqueira. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponível para novas oportunidades
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
