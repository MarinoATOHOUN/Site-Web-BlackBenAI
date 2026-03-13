import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ceoImage from "@/assets/ceo-marino.jpg";
import horacioImage from "@/assets/Horacio_NANI.png";
import { Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-accent/10 px-6 py-3 rounded-full mb-6 border border-gold/20"
            >
              <Users className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-foreground">Qui sommes-nous</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              À propos de <span className="text-gold">BlackBenAI</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformer l'Afrique en pôle d'innovation technologique mondiale
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Section Notre équipe */}
            <section className="mb-12">
              <h3 className="text-3xl font-heading font-bold text-center mb-8 text-foreground">Notre équipe</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                {/* Profil Marino */}
                <div className="flex-1 max-w-xs mx-auto flex flex-col items-center bg-card rounded-2xl shadow-2xl p-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold shadow-lg bg-white flex items-center justify-center mb-4">
                    <img 
                      src={ceoImage} 
                      alt="Marino ATOHOUN - Cofondateur & PDG de BlackBenAI"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-1">Marino ATOHOUN</h4>
                  <p className="text-gold text-base font-medium">Cofondateur & PDG</p>
                </div>
                {/* Profil Horacio */}
                <div className="flex-1 max-w-xs mx-auto flex flex-col items-center bg-card rounded-2xl shadow-2xl p-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg bg-white flex items-center justify-center mb-4">
                    <img 
                      src={horacioImage} 
                      alt="Horacio NANI - Cofondateur & Conseillers économiques"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-1">Horacio NANI</h4>
                  <p className="text-accent text-center text-base font-medium">Cofondateur & Conseillers économiques</p>
                </div>
              </div>
            </section>
            {/* Blocs descriptifs alignés horizontalement */}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  BlackBenAI est une initiative née pour que l'Afrique ne soit pas seulement consommatrice, mais <span className="text-gold font-semibold">productrice d'intelligence artificielle</span>.
                </p>
              </div>
              <div className="flex-1 p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre mission est de créer des solutions IA enracinées dans les réalités africaines, par des Africains, pour l'Afrique et le monde.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Les autres blocs restent en colonne */}
          <div>
            <div className="relative group mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-tech-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4 p-6 bg-gradient-to-br from-accent/10 to-tech-blue/10 rounded-2xl border border-accent/30 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <p className="text-foreground leading-relaxed">
                  Nous croyons que l'IA doit refléter la diversité culturelle, linguistique et sociale du continent africain.
                </p>
              </div>
            </div>
            <div className="relative group mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-accent rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target className="text-deep-black" size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Notre Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Faire du Bénin et de l'Afrique un hub mondial de l'innovation en intelligence artificielle d'ici 2030.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
