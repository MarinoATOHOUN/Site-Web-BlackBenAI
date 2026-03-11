import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Database, Cloud, Brain, Cpu, Lock, Zap, Network } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technologies = [
    {
      name: "Intelligence Artificielle",
      icon: Brain,
      description: "Machine Learning & Deep Learning",
      color: "from-purple-500 to-pink-500",
      tags: ["TensorFlow", "PyTorch", "GPT"],
    },
    {
      name: "Cloud Computing",
      icon: Cloud,
      description: "Infrastructure scalable et sécurisée",
      color: "from-blue-500 to-cyan-500",
      tags: ["AWS", "Azure", "GCP"],
    },
    {
      name: "Blockchain",
      icon: Lock,
      description: "Solutions décentralisées",
      color: "from-yellow-500 to-orange-500",
      tags: ["Ethereum", "Smart Contracts"],
    },
    {
      name: "Big Data",
      icon: Database,
      description: "Analyse de données massives",
      color: "from-green-500 to-emerald-500",
      tags: ["Hadoop", "Spark", "Kafka"],
    },
    {
      name: "IoT & Edge Computing",
      icon: Cpu,
      description: "Objets connectés intelligents",
      color: "from-red-500 to-rose-500",
      tags: ["Arduino", "Raspberry Pi"],
    },
    {
      name: "DevOps",
      icon: Zap,
      description: "Automatisation et CI/CD",
      color: "from-indigo-500 to-violet-500",
      tags: ["Docker", "Kubernetes", "Jenkins"],
    },
    {
      name: "Développement Web",
      icon: Code2,
      description: "Applications modernes et réactives",
      color: "from-teal-500 to-cyan-500",
      tags: ["React", "Node.js", "TypeScript"],
    },
    {
      name: "Réseaux & Sécurité",
      icon: Network,
      description: "Infrastructure sécurisée",
      color: "from-amber-500 to-yellow-500",
      tags: ["Cybersecurity", "VPN", "Firewall"],
    },
  ];

  return (
    <section id="technologies" className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={techBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(43 74% 66% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(43 74% 66% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-tech-blue/20 to-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-gold/20 to-accent/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-tech-blue/30 bg-tech-blue/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "hsl(214 95% 55%)" }}
          >
            <Code2 className="w-5 h-5 text-tech-blue" />
            <span className="text-tech-blue font-semibold">Technologies</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-gold to-primary">
            Notre Stack Technologique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des technologies de pointe pour des solutions innovantes et performantes
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color.replace('from-', 'hsl(var(--')})`,
                  }}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative h-full p-6 rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden"
                  whileHover={{
                    y: -15,
                    borderColor: "hsl(43 74% 66%)",
                    boxShadow: "0 25px 50px -12px hsl(43 74% 76% / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 74% 66%) 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className={`relative mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />

                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50"
                      style={{
                        background: `linear-gradient(135deg, ${tech.color})`,
                        filter: 'blur(10px)',
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tech.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gold/10 text-gold border border-gold/20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.1 + tagIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(43 74% 76% / 0.2)",
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-bl-full`} />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-20"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-tr ${tech.color} rounded-tr-full`} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="inline-block px-8 py-4 rounded-full border border-gold/30 bg-gradient-to-r from-gold/5 via-primary/5 to-tech-blue/5 backdrop-blur-sm"
            animate={{
              boxShadow: [
                "0 0 20px hsl(43 74% 76% / 0.1)",
                "0 0 40px hsl(43 74% 76% / 0.2)",
                "0 0 20px hsl(43 74% 76% / 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold via-primary to-tech-blue">
              Et bien plus encore...
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
