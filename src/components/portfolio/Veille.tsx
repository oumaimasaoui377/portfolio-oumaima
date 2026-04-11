import { motion } from "framer-motion";
import { Rss, Brain, ShieldCheck, Cloud, Cpu } from "lucide-react";

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
    </div>
  </section>
);

export default Veille;
