import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Code, Target, Sparkles, Trophy } from "lucide-react";

const History = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "Aout 2025",
      title: "Naissance de BlackBenAI",
      description: "Création de l'initiative par Marino Atohoun au Bénin, avec la vision de faire de l'Afrique un producteur d'IA.",
      icon: Sparkles,
      gradient: "from-gold to-secondary",
    },
    {
      year: "Septembre 2025 - Octobre 2025",
      title: "Lancement des premiers projets",
      description: "Développement et déploiement de 6 projets d'IA innovants : Edushare, SecurLog, WithSign, AfroLLM, DataAfrique, et TranslateAfrica.",
      icon: Rocket,
      gradient: "from-accent to-tech-blue",
    },
    {
      year: "2030",
      title: "Vision : Bénin hub d'IA africain",
      description: "Objectif de positionner le Bénin et l'Afrique comme des leaders mondiaux de l'innovation en intelligence artificielle.",
      icon: Trophy,
      gradient: "from-tech-blue to-gold",
    },
  ];

  return (
    <section id="history" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Notre <span className="text-accent">Histoire</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le parcours d'une vision ambitieuse pour l'Afrique
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-accent to-tech-blue hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-accent/50 transition-all duration-300`}>
                      <div className={`inline-flex items-center gap-2 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-2xl font-heading font-bold text-gold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-gold to-accent rounded-full border-4 border-background shadow-lg flex-shrink-0" />

                  {/* Empty space for layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
