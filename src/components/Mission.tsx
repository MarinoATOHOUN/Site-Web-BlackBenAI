import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Globe, Cpu, Network, Users, Lightbulb, Target } from "lucide-react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const missions = [
    {
      icon: Cpu,
      title: "Produire, pas seulement consommer",
      description: "Créer des modèles d'IA africains qui répondent aux besoins spécifiques du continent et valorisent nos langues, cultures et contextes.",
      gradient: "from-gold to-secondary",
      bgIcon: Lightbulb,
    },
    {
      icon: Network,
      title: "Faire du Bénin un hub IA africain",
      description: "Positionner le Bénin comme un centre d'excellence en intelligence artificielle, attirant talents, investissements et innovations.",
      gradient: "from-accent to-tech-blue",
      bgIcon: Target,
    },
    {
      icon: Users,
      title: "Créer un mouvement panafricain",
      description: "Inspirer et connecter les innovateurs à travers l'Afrique pour construire ensemble l'avenir technologique du continent.",
      gradient: "from-tech-blue to-accent",
      bgIcon: Globe,
    },
  ];

  return (
    <section id="mission" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Notre <span className="text-accent">Mission</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-tech-blue mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trois piliers fondamentaux guident notre action pour transformer l'Afrique par l'IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 bg-card rounded-2xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300 h-full hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <mission.bgIcon className="w-32 h-32 text-foreground" strokeWidth={1} />
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${mission.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                    {mission.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mission.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
