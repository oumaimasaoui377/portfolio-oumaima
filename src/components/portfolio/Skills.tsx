import { motion } from "framer-motion";

const categories = [
  {
    title: "Langages & Développement",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 85 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    skills: [
      { name: "Windows Server", level: 80 },
      { name: "Linux (Debian/Ubuntu)", level: 75 },
      { name: "Active Directory", level: 70 },
      { name: "TCP/IP & DNS", level: 80 },
      { name: "Virtualisation (VMware)", level: 75 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    title: "Outils & Méthodes",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Méthode Agile / Scrum", level: 75 },
      { name: "UML / Merise", level: 70 },
      { name: "Trello / Jira", level: 75 },
    ],
  },
  {
    title: "Cybersécurité",
    skills: [
      { name: "Pare-feu / Firewall", level: 70 },
      { name: "VPN", level: 65 },
      { name: "RGPD", level: 75 },
      { name: "Sécurité des SI", level: 70 },
    ],
  },
];

const Skills = () => (
  <section id="competences" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-sm uppercase tracking-wider mb-2">Stack technique</p>
        <h2 className="font-display text-4xl font-bold mb-12">
          Mes <span className="text-gradient">compétences</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-secondary-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
