import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Server, Shield, Database, Globe, Smartphone, Network, Monitor, FileCode } from "lucide-react";

type Category = "Tous" | "SLAM" | "SISR" | "Transverse";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: Category[];
  icon: React.ElementType;
  color: "primary" | "accent";
  link?: string;
}

const projects: Project[] = [
  {
    title: "Application de gestion de tickets",
    desc: "Système complet de ticketing pour le support informatique avec dashboard, gestion des priorités, attribution et suivi en temps réel. Développé en PHP/MySQL avec interface responsive.",
    tags: ["PHP", "MySQL", "Bootstrap", "CRUD"],
    category: ["SLAM"],
    icon: Monitor,
    color: "primary",
    link: "https://osaoui.free.nf/atelier_des_jeux/login.php",
  },
  {
    title: "Site e-commerce",
    desc: "Boutique en ligne complète avec panier, système de paiement, gestion des stocks, espace client et back-office administrateur. Architecture MVC.",
    tags: ["PHP", "JavaScript", "MySQL", "MVC", "CSS"],
    category: ["SLAM"],
    icon: Globe,
    color: "accent",
  },
  {
    title: "Application mobile de gestion de tâches",
    desc: "Application mobile cross-platform de gestion de tâches avec authentification, notifications push, synchronisation cloud et mode hors-ligne.",
    tags: ["React Native", "Firebase", "API REST"],
    category: ["SLAM"],
    icon: Smartphone,
    color: "primary",
  },
  {
    title: "API REST — Gestion de bibliothèque",
    desc: "Développement d'une API RESTful pour gérer une bibliothèque : livres, emprunts, utilisateurs. Documentation Swagger, authentification JWT.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    category: ["SLAM"],
    icon: FileCode,
    color: "accent",
  },
  {
    title: "Portfolio personnel",
    desc: "Ce portfolio ! Site vitrine responsive en React/TypeScript avec animations, design system personnalisé et optimisation SEO.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["SLAM"],
    icon: Code,
    color: "primary",
  },
  {
    title: "Infrastructure réseau d'entreprise",
    desc: "Mise en place d'une infrastructure complète : serveur Windows, Active Directory, DHCP, DNS, GPO, partages réseau et gestion des droits utilisateurs.",
    tags: ["Windows Server", "AD", "DHCP", "DNS", "GPO"],
    category: ["SISR"],
    icon: Network,
    color: "accent",
  },
  {
    title: "Virtualisation & haute disponibilité",
    desc: "Déploiement d'un environnement virtualisé avec VMware/Proxmox, migration de VMs, snapshots, réplication et plan de reprise d'activité (PRA).",
    tags: ["VMware", "Proxmox", "PRA", "Backup"],
    category: ["SISR"],
    icon: Server,
    color: "primary",
  },
  {
    title: "Sécurisation d'un réseau",
    desc: "Configuration de pare-feu (pfSense), mise en place de VPN, segmentation VLAN, supervision avec Zabbix/Nagios et audit de sécurité.",
    tags: ["pfSense", "VPN", "VLAN", "Zabbix", "Nagios"],
    category: ["SISR"],
    icon: Shield,
    color: "accent",
  },
  {
    title: "Déploiement GLPI & OCS Inventory",
    desc: "Installation et configuration de GLPI couplé à OCS Inventory pour la gestion de parc informatique, inventaire automatique et gestion des incidents.",
    tags: ["GLPI", "OCS", "Linux", "Apache", "MySQL"],
    category: ["SISR"],
    icon: Database,
    color: "primary",
  },
  {
    title: "Conteneurisation Docker",
    desc: "Création d'environnements conteneurisés avec Docker et Docker Compose : serveur web, base de données, reverse proxy Nginx.",
    tags: ["Docker", "Docker Compose", "Nginx", "Linux"],
    category: ["SISR"],
    icon: Server,
    color: "accent",
  },
  {
    title: "Base de données — Gestion scolaire",
    desc: "Conception et modélisation d'une base de données relationnelle avec MCD/MLD (Merise), requêtes SQL avancées, vues, triggers et procédures stockées.",
    tags: ["SQL", "Merise", "PostgreSQL", "UML"],
    category: ["Transverse"],
    icon: Database,
    color: "primary",
  },
  {
    title: "Veille technologique — IA & Cybersécurité",
    desc: "Mise en place d'un système de veille technologique automatisé avec flux RSS, curation de contenu et synthèses sur l'IA et la cybersécurité.",
    tags: ["Feedly", "Google Alerts", "Netvibes", "Rédaction"],
    category: ["Transverse"],
    icon: Globe,
    color: "accent",
  },
];

const filters: Category[] = ["Tous", "SLAM", "SISR", "Transverse"];

const Projects = () => {
  const [active, setActive] = useState<Category>("Tous");

  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projets" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Réalisations</p>
          <h2 className="font-display text-4xl font-bold mb-8">
            Mes <span className="text-gradient">projets</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-6 hover:${p.color === "primary" ? "glow-primary" : "glow-accent"} transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  p.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>
                  {<p.icon size={20} />}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                 {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3"
                  >
                    <ExternalLink size={14} />
                    Voir le projet
                  </a>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
