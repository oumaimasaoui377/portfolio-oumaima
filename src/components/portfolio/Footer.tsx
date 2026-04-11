import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 <span className="text-foreground font-medium">Oumaima Saoui</span> — BTS SIO EPSI
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/oumaimasaoui377/" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/oumaima-saoui-4b0a9a387/" },
          { icon: Mail, href: "mailto:oumaima.saoui@ecoles-epsi.net" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

