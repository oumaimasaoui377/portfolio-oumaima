import { motion } from "framer-motion";
import { Rss, Brain, ShieldCheck, Cloud, Cpu , Target , ListChecks, Newspaper, ExternalLink} from "lucide-react";

const topics = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    desc: "Suivi des avancées en IA générative, machine learning et leurs applications dans les métiers du numérique.",
    sources: ["OpenAI Blog", "Google AI", "Hugging Face"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    desc: "Veille sur les menaces, vulnérabilités, bonnes pratiques de sécurité et conformité RGPD.",
    sources: ["ANSSI", "CERT-FR", "Krebs on Security"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    desc: "Évolution des services cloud (AWS, Azure, GCP), architectures serverless et DevOps.",
    sources: ["AWS Blog", "Azure Updates", "InfoQ"],
  },
  {
    icon: Cpu,
    title: "Nouvelles Technologies",
    desc: "IoT, blockchain, réalité augmentée et leurs impacts sur les organisations.",
    sources: ["TechCrunch", "Le Monde Informatique", "01net"],
  },
];
const methode = [
  "Utilisation de flux RSS et de Google Alerts avec des mots-clés ciblés (OWASP, Web Vulnerabilities, SQL Injection).",
  "Suivi régulier de sites de référence (ANSSI, ZDNet, Le Monde Informatique).",
  "Archivage et classement des articles pertinents dans un tableau de bord Notion/Drive.",
];

const articles = [
  {
    titre: "Analyse des nouvelles tendances d'attaques par injection SQL en 2025/2026",
    source: "ZDNet / SecuObserver",
    justification:
      "Cet article montre comment les hackers contournent les filtres classiques. Il m'a permis d'ajuster la logique de sécurisation dans mes propres projets (utilisation de requêtes préparées systématiques avec PDO).",
  },
  {
    titre: "L'impact de l'OWASP Top 10 sur la conception des architectures logicielles modernes",
    source: "LeMagIT",
    justification:
      "Cet article donne une vue d'ensemble sur l'intégration de la sécurité dès la phase de conception (Security by Design), ce qui est crucial pour le bon respect des normes RGPD et la protection des données utilisateurs.",
  },
];

const ThemeVeille = () => (
  <div className="mt-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-primary text-sm uppercase tracking-wider mb-2">Thème de veille</p>
      <h3 className="font-display text-3xl font-bold mb-4">
        La <span className="text-gradient">Sécurité des Applications Web</span> face aux Attaques par Injection
      </h3>
      <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
        La veille porte sur les vulnérabilités courantes dans les applications web (notamment répertoriées dans
        l'OWASP Top 10) et les bonnes pratiques de sécurisation des entrées utilisateur pour contrer les attaques
        comme les injections SQL ou XSS.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Target size={20} />
          </div>
          <h4 className="font-display font-semibold text-foreground">Objectif</h4>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Anticiper les failles de sécurité, comprendre les nouvelles techniques d'attaque et améliorer la
          robustesse des codes développés en entreprise.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <ListChecks size={20} />
          </div>
          <h4 className="font-display font-semibold text-foreground">Méthode</h4>
        </div>
        <ul className="space-y-2">
          {methode.map((m, i) => (
            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
              <span className="text-primary shrink-0">•</span>
              {m}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-xl font-semibold mb-6 flex items-center gap-2"
    >
      <Newspaper size={20} className="text-primary" />
      Sélection de deux articles
    </motion.h4>

    <div className="grid md:grid-cols-2 gap-6">
      {articles.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6 hover:glow-primary transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <h5 className="font-display font-semibold text-foreground leading-snug">{a.titre}</h5>
            <ExternalLink size={16} className="text-muted-foreground shrink-0 mt-1" />
          </div>
          <span className="inline-block text-xs text-accent bg-accent/10 px-2 py-1 rounded-md mb-3">
            {a.source}
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-medium">Justification : </span>
            {a.justification}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);


const Veille = () => (
  <section id="veille" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm uppercase tracking-wider mb-2">Veille technologique</p>
        <h2 className="font-display text-4xl font-bold mb-4">
          Rester à la <span className="text-gradient">pointe</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          La veille technologique est essentielle en BTS SIO. J'utilise des outils comme Feedly, Google Alerts 
          et Netvibes pour suivre l'actualité du numérique.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {topics.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover:glow-accent transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <t.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{t.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {t.sources.map((s) => (
                    <span key={s} className="flex items-center gap-1 text-xs text-primary bg-primary/5 px-2 py-1 rounded-md">
                      <Rss size={10} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

       <ThemeVeille />
    </div>
  </section>
);

export default Veille;
