import { motion } from "framer-motion";
import { Megaphone, Sparkles, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Announcements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      id: 1,
      type: "Nouveau",
      title: "Une IA générative rien que pour l'Afrique",
      description: "Une nouvelle ère de l'IA africaine avec une IA générative qui comprend les réalités africaines",
      date: "Très bientôt",
      icon: Sparkles,
      gradient: "from-gold-light/20 to-primary/20",
      slug: "ia-generative-afrique",
    },
    {
      id: 2,
      type: "Mise à jour",
      title: "Construire la plus grande base de données éducative en Afrique ?",
      description: "C'est l'objectif que s'est fixé EduShare un projet qui vise à construire la plus grande base de données éducative en Afrique piloté par BlackBenAI",
      date: "10 Oct 2025",
      icon: Megaphone,
      gradient: "from-primary/20 to-gold-light/20",
      slug: "base-de-donnees-educative",
    },
    {
      id: 3,
      type: "Événement",
      title: "Et si la vision par ordinateur devenait le pilier de l'IA africaine ?",
      description: "L'agriculture, la pêche, l'élevage, ... tous des secteurs piliers du développement africain qui pourraient bénéficier de la vision par ordinateur. BlackBenAI est là pour construire la solution ultime dans l'écosystème africaine.",
      date: "20 Oct 2025",
      icon: Clock,
      gradient: "from-gold-light/20 to-primary/20",
      slug: "vision-par-ordinateur-pilier-ia",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-r from-deep-black via-deep-black/95 to-deep-black">
      {/* Animated background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold-light/10 to-primary/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-gold-light/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Megaphone className="w-8 h-8 text-gold-light mr-3" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-white">
            Dernières Annonces
          </h2>
        </div>

        {/* Adjusted height for more flexibility */}
        <div className="relative h-52 md:h-44">
          {announcements.map((announcement, index) => {
            const offset = index - currentIndex;
            const isVisible = Math.abs(offset) <= 1;
            
            return (
              <motion.div
                key={announcement.id}
                initial={false}
                animate={{
                  y: offset * 100 + "%",
                  opacity: isVisible ? 1 : 0,
                  scale: offset === 0 ? 1 : 0.85,
                  zIndex: offset === 0 ? 10 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute inset-0"
              >
                <div className={`bg-gradient-to-r ${announcement.gradient} backdrop-blur-sm border border-gold-light/20 rounded-xl p-6 h-full`}>
                  <div className="flex items-start gap-4 h-full">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-light to-primary rounded-lg flex items-center justify-center"
                    >
                      <announcement.icon className="w-6 h-6 text-deep-black" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-bold bg-gold-light/20 text-gold-light rounded-full border border-gold-light/30">
                          {announcement.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {announcement.date}
                        </span>
                      </div>
                      
                      {/* Truncate long titles */}
                      <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-2 truncate" title={announcement.title}>
                        {announcement.title}
                      </h3>
                      
                      {/* Clamp description to 2 lines to prevent overflow */}
                      <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                        {announcement.description}
                      </p>

                      <Link to={`/announcement/${announcement.slug}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-gold-light flex items-center gap-2 text-sm font-semibold group mt-2"
                        >
                          En savoir plus
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {announcements.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              animate={{
                scale: currentIndex === index ? 1.2 : 1,
                backgroundColor: currentIndex === index ? "hsl(43, 74%, 76%)" : "hsl(43, 74%, 76%, 0.3)",
              }}
              className="w-2 h-2 rounded-full transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
