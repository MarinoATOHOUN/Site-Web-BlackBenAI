import { motion } from "framer-motion";
import { Cpu, Lightbulb, Network, Brain, Globe, Sparkles } from "lucide-react";

const FloatingBackground = () => {
  const shapes = [
    { Icon: Cpu, top: "10%", left: "10%", delay: 0, duration: 25 },
    { Icon: Lightbulb, top: "20%", left: "80%", delay: 2, duration: 20 },
    { Icon: Network, top: "60%", left: "15%", delay: 4, duration: 22 },
    { Icon: Brain, top: "70%", left: "85%", delay: 1, duration: 28 },
    { Icon: Globe, top: "40%", left: "70%", delay: 3, duration: 24 },
    { Icon: Sparkles, top: "80%", left: "40%", delay: 5, duration: 26 },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => {
        const Icon = shape.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ top: shape.top, left: shape.left }}
            animate={{
              y: [0, -30, -60, -30, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.05, 0.15, 0.1, 0.15, 0.05],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-20 h-20 md:w-32 md:h-32 text-gold" strokeWidth={1} />
          </motion.div>
        );
      })}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-gold/10 to-tech-blue/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-tech-blue/10 to-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingBackground;
