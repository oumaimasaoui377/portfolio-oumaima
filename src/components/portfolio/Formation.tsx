import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, FileText } from "lucide-react";

const timeline = [
  {
    period: "2026 — 2027",
    title: "2ème année — Gaston Berger",
    location: "Gaston Berger",
    desc: "Poursuite d'études en informatique, admise directement en 2ème année grâce à la mention obtenue au BTS SIO.",
    modules: ["Développement d'applications", "Infrastructure réseau", "Cybersécurité", "Gestion de projet"],
    current: true,
  },
  {
    period: "2024 — 2026",
    title: "BTS SIO — EPSI",
    location: "EPSI",
    desc: "Services Informatiques aux Organisations. Diplôme obtenu avec la mention Très Bien.",
    modules: ["Développement d'applications", "Infrastructure réseau", "Cybersécurité", "Gestion de projet", "Support SI"],
    current: false,
  },
  {
    period: "6 semaines",
    title: "Stage — Baudimont Arras",
    location: "Arras",
    desc: "Stage de 6 semaines réalisé chez Baudimont Arras dans le cadre du BTS SIO.",
    modules: [],
    attestation: "/attestation-stage-baudimont.pdf",
    current: false,
  },
  {
    period: "2024",
    title: "Baccalauréat",
    location: "Lycée Al Bayda",
    desc: "Obtention du baccalauréat.",
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
            {item.attestation && (
              <a
                href={item.attestation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <FileText size={14} />
                Voir l'attestation de stage
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Formation;
