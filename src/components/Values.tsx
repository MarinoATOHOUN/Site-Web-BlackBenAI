import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Zap, Shield, Rocket, Users } from "lucide-react";

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Repousser les limites de la technologie pour créer des solutions révolutionnaires.",
      color: "text-gold",
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Chaque projet doit avoir un impact positif mesurable sur nos communautés.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Intégrité",
      description: "Agir avec transparence, éthique et responsabilité dans tout ce que nous faisons.",
      color: "text-tech-blue",
    },
    {
      icon: Rocket,
      title: "Audace",
      description: "Oser rêver grand et transformer ces rêves en réalité technologique.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Construire ensemble, en valorisant la diversité et l'intelligence collective.",
      color: "text-gold-light",
    },
  ];

  return (
    <section id="values" ref={ref} className="py-24 bg-background dark:bg-gradient-to-br dark:from-background dark:via-deep-black/50 dark:to-background relative overflow-hidden">
      {/* Background decoration - More dynamic */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-tech-blue rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            animate={isInView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : {}}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(20 14.3% 4.1%), hsl(43 74% 66%), hsl(358.3 98.3% 67.1%), hsl(20 14.3% 4.1%))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nos Valeurs
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-gold via-accent to-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-xl text-foreground/70 dark:text-white/90 max-w-3xl mx-auto">
            Les principes qui guident notre action et définissent notre identité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateZ: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 via-accent/20 to-tech-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className="relative p-8 bg-card/80 dark:bg-gradient-to-br dark:from-primary-foreground/10 dark:to-primary-foreground/5 backdrop-blur-md rounded-3xl border-2 border-border dark:border-primary-foreground/20 hover:border-gold/60 transition-all duration-500 h-full text-center overflow-hidden">
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, hsl(43 74% 76%), transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-gold via-accent to-tech-blue rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 215, 0, 0.3)",
                        "0 0 40px rgba(255, 215, 0, 0.6)",
                        "0 0 20px rgba(255, 215, 0, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <value.icon className="text-white w-10 h-10 relative z-10" strokeWidth={2.5} />
                </motion.div>

                <motion.h3
                  className={`text-2xl font-heading font-bold mb-4 ${value.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.title}
                </motion.h3>

                <p className="text-foreground/80 dark:text-white/90 text-base leading-relaxed relative z-10">
                  {value.description}
                </p>

                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
