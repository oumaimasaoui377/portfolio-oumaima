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
            Ce qui m'a poussée vers l'informatique, c'est cette envie de comprendre comment les choses
            fonctionnent vraiment derrière un écran, et surtout de pouvoir créer moi-même des solutions
            qui répondent à de vrais besoins. Le <span className="text-foreground font-medium">BTS SIO</span>{" "}
            m'a permis de découvrir aussi bien le développement que l'administration système, et j'ai
            trouvé dans les deux une vraie satisfaction : celle de résoudre des problèmes concrets.
          </p>
          <p>
            Je suis particulièrement motivée par la <span className="text-foreground font-medium">cybersécurité</span>{" "}
            et la qualité du code : je n'aime pas me contenter de faire fonctionner une application, je
            veux comprendre pourquoi elle fonctionne, et surtout comment la rendre plus robuste et plus
            sûre. C'est aussi ce qui m'a menée à choisir mon thème de veille sur la sécurité des
            applications web.
          </p>
          <p>
            Aujourd'hui, ma motivation est de continuer à progresser techniquement tout en gardant une
            vision globale des projets : comprendre les besoins, proposer des solutions adaptées, et les
            réaliser avec rigueur. Mon objectif est de devenir une développeuse polyvalente, capable de
            s'adapter aux évolutions rapides du numérique.
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
