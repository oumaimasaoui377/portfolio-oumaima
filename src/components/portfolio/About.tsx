import { motion } from "framer-motion";
import { GraduationCap, Code, Server, Shield } from "lucide-react";

const highlights = [
  { icon: Code, label: "Développement Web", desc: "Applications front & back-end" },
  { icon: Server, label: "Infrastructure", desc: "Réseaux, serveurs, virtualisation" },
  { icon: Shield, label: "Cybersécurité", desc: "Sécurisation des SI" },
  { icon: GraduationCap, label: "BTS SIO", desc: "Option SLAM / SISR" },
];

const About = () => (
  <section id="apropos" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm uppercase tracking-wider mb-2">À propos</p>
        <h2 className="font-display text-4xl font-bold mb-8">
          Qui suis-je<span className="text-gradient"> ?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Je suis <span className="text-foreground font-medium">Oumaima Saoui</span>, étudiante en 
            <span className="text-primary"> BTS SIO</span> (Services Informatiques aux Organisations) 
            à l'<span className="text-primary">EPSI</span>.
          </p>
          <p>
            Ma formation me permet d'acquérir des compétences variées en développement d'applications, 
            gestion d'infrastructure réseau, cybersécurité et gestion de projets informatiques. 
            Je suis motivée par les défis techniques et l'innovation.
          </p>
          <p>
            En parallèle de mes études, je réalise des projets personnels et professionnels 
            qui me permettent de mettre en pratique mes connaissances et de développer 
            mon expertise technique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <div key={i} className="glass-card p-5 hover:glow-primary transition-all duration-300">
              <Icon size={24} className="text-primary mb-3" />
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{label}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
