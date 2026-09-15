import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => (
  <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

    <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
          Étudiante 2ème année — Gaston Berger
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
          Oumaima<br />
          <span className="text-gradient">Saoui</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
          Passionnée par le développement et les systèmes d'information. 
          Je conçois des solutions numériques innovantes et fonctionnelles.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity">
            Me contacter
          </a>
          <a href="#projets" className="px-6 py-3 border border-border text-foreground rounded-xl hover:bg-secondary transition-colors">
            Voir mes projets
          </a>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/oumaimasaoui377/" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/oumaima-saoui-4b0a9a387/" },
            { icon: Mail, href: "mailto:oumaima.saoui@gastonberger.fr" }, 
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex justify-center"
      >
        <div className="relative">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-primary animate-float">
            <div className="w-60 h-60 rounded-full bg-secondary flex items-center justify-center">
              <span className="font-display text-6xl font-bold text-gradient">OS</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#apropos" className="text-muted-foreground hover:text-primary transition-colors">
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default Hero;

