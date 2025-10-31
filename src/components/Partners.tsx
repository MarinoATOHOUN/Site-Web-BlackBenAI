import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import partnersBackground from "@/assets/partners-background.jpg";
import hypeeLogo from "@/assets/logo-hypee.png";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partners = [
    { name: "Hypee", category: "Réseaux Sociaux", logo: hypeeLogo, description: "Création de réseaux sociaux pour le développement de l'Afrique avec intégration des langues locales." },
  ];

  return (
    <section id="partners" className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={partnersBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(43 74% 66%) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-gold/20 to-tech-blue/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
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
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "hsl(43 74% 66%)" }}
          >
            <Handshake className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Notre Partenaire</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold via-primary to-tech-blue">
            Ensemble Vers l'Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une collaboration stratégique qui façonne l'avenir de la technologie en Afrique
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center">
          {partners.map((partner, index) => {
            return (
              <motion.div
                key={index}
                className="group relative md:col-span-2 lg:col-span-3 lg:w-1/2 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Card Background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 via-primary/5 to-tech-blue/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Main Card */}
                <motion.div
                  className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    borderColor: "hsl(43 74% 66%)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-tech-blue/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={partner.logo} alt={`${partner.name} logo`} className="w-10 h-10 object-contain" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <span className="text-sm text-gold/70 font-medium mb-2 block">
                      {partner.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                      {partner.name}
                    </h3>
                     <p className="text-muted-foreground leading-relaxed mb-4">{partner.description}</p>
                    
                    {/* Decorative Line */}
                    <motion.div
                      className="h-1 bg-gradient-to-r from-gold via-primary to-tech-blue rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Hover Pattern */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, hsl(43 74% 66%) 0, hsl(43 74% 66%) 1px, transparent 0, transparent 50%)`,
                      backgroundSize: '10px 10px',
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-primary text-deep-black font-semibold text-lg shadow-2xl shadow-gold/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px hsl(43 74% 76% / 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Devenir Partenaire
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;