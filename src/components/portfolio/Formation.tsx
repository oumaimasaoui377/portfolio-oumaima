import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen } from "lucide-react";

const timeline = [
  {
    period: "2024 — 2026",
    title: "BTS SIO — EPSI",
    location: "EPSI",
    desc: "Services Informatiques aux Organisations. Formation complète en développement, réseaux et cybersécurité.",
    modules: ["Développement d'applications", "Infrastructure réseau", "Cybersécurité", "Gestion de projet", "Support SI"],
    current: true,
  },
  {
    period: "2024",
    title: "Baccalauréat",
    location: "Lycée",
    desc: "Obtention du baccalauréat avec mention.",
    modules: [],
    current: false,
  },
];

const Formation = () => (
  <section id="formation" className="py-24 bg-secondary/20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm uppercase tracking-wider mb-2">Parcours</p>
        <h2 className="font-display text-4xl font-bold mb-12">
          Ma <span className="text-gradient">formation</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card p-6 md:p-8 relative ${item.current ? "glow-primary border-primary/30" : ""}`}
          >
            {item.current && (
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                En cours
              </span>
            )}
            <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                {item.location}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
            {item.modules.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.modules.map((mod) => (
                  <span key={mod} className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    <BookOpen size={12} />
                    {mod}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Formation;
