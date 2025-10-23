import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Zap, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4 mb-6"
          >
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
            <Zap className="w-8 h-8 text-tech-blue animate-pulse" style={{ animationDelay: "0.2s" }} />
            <Rocket className="w-8 h-8 text-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Sparkles size={16} />
              Intelligence Artificielle Panafricaine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground via-gold to-accent bg-clip-text text-transparent"
          >
            L'Intelligence Artificielle au service de l'Afrique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            BlackBenAI construit des modèles enracinés dans les réalités africaines pour transformer le continent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-gradient-to-r from-gold to-secondary text-deep-black hover:opacity-90 text-lg px-8"
            >
              Découvrir notre vision
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              variant="outline"
              className="border-2 text-lg px-8"
            >
              Voir nos projets
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
