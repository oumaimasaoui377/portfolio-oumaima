import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Workflow, Sparkles } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "BTS SIO — Option SLAM", value: "EPSI" },
  { icon: ShieldCheck, label: "Stage en cybersécurité", value: "Expérience terrain" },
  { icon: Workflow, label: "Passionnée par l'automatisation", value: "DevOps" },
];

const About = () => (
  <section id="apropos" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm uppercase tracking-wider mb-2">À propos</p>
        <h2 className="font-display text-4xl font-bold mb-6">
          Mes <span className="text-gradient">motivations</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            Je suis en <span className="text-foreground font-medium">BTS SIO, option SLAM</span> (Solutions
            Logicielles et Applications Métiers), où je me spécialise dans le développement d'applications.
            Mais mon parcours ne s'arrête pas là : j'ai effectué un{" "}
            <span className="text-foreground font-medium">stage en cybersécurité</span>, une expérience qui
            m'a ouvert les yeux sur l'importance de penser la sécurité dès la conception d'un projet, et
            pas seulement en correction après coup.
          </p>
          <p>
            Cette double expérience — développement et sécurité — m'a donné envie de devenir{" "}
            <span className="text-foreground font-medium">double compétences</span> : coder proprement,
            mais aussi comprendre comment sécuriser, déployer et automatiser ce que je construis. C'est
            naturellement que je me suis découvert une vraie passion pour le{" "}
            <span className="text-foreground font-medium">DevOps</span> : l'intégration continue, le
            déploiement automatisé, la conteneurisation (Docker), et tout ce qui permet de faire le pont
            entre développement et infrastructure.
          </p>
          <p>
            Mon objectif est de continuer à monter en compétences sur ces deux fronts — développement
            sécurisé et culture DevOps — pour devenir une professionnelle capable de livrer des
            applications à la fois fiables, sécurisées et bien déployées.
          </p>
        </motion.div>

        <div className="space-y-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div
