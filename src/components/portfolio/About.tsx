import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "BTS SIO — Mention Très Bien", value: "EPSI" },
  { icon: MapPin, label: "2ème année en cours", value: "Gaston Berger" },
  { icon: Briefcase, label: "Stage 6 semaines", value: "Baudimont Arras" },
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
          Qui suis-<span className="text-gradient">je</span> ?
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
            Je m'appelle <span className="text-foreground font-medium">Oumaima Saoui</span>, étudiante
            passionnée par le développement et les systèmes d'information. Après l'obtention de mon
            <span className="text-foreground font-medium"> BTS SIO avec la mention Très Bien à l'EPSI</span>,
            je poursuis actuellement ma <span className="text-foreground font-medium">2ème année à Gaston Berger</span>.
          </p>
          <p>
            Curieuse et rigoureuse, j'aime comprendre le fonctionnement des systèmes, concevoir des
            applications utiles et rester à jour sur les bonnes pratiques du développement et de la
            cybersécurité. Mon stage chez <span className="text-foreground font-medium">Baudimont Arras</span> m'a
            permis de mettre en pratique mes compétences en conditions réelles.
          </p>
          <p>
            Je cherche aujourd'hui à approfondir mes compétences techniques tout en développant des
            projets concrets, à la fois solides sur le plan technique et soignés dans leur présentation.
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
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <s.icon size={20} />
              </div>
              <div>
                <p className="text-foreground font-semibold">{s.value}</p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-foreground font-semibold">Curieuse & rigoureuse</p>
              <p className="text-muted-foreground text-sm">Toujours en veille sur les nouvelles technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
