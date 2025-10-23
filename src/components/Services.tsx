import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Code, Database, Cpu, Globe, Sparkles, BrainCircuit } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services = [
    {
      icon: BrainCircuit,
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure adaptées aux réalités africaines, du traitement du langage naturel à la vision par ordinateur.",
      gradient: "from-gold/20 to-accent/20",
      iconColor: "text-gold",
      slug: "intelligence-artificielle",
    },
    {
      icon: Code,
      title: "Développement Web & Mobile",
      description: "Applications modernes et performantes conçues pour répondre aux besoins spécifiques du continent africain.",
      gradient: "from-tech-blue/20 to-accent/20",
      iconColor: "text-tech-blue",
      slug: "developpement-web-mobile",
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Exploitation des données pour générer des insights pertinents et guider vos décisions stratégiques.",
      gradient: "from-accent/20 to-gold/20",
      iconColor: "text-accent",
      slug: "big-data-analytics",
    },
    {
      icon: Globe,
      title: "Solutions Cloud",
      description: "Infrastructure cloud robuste et scalable pour accompagner votre croissance digitale.",
      gradient: "from-gold/20 to-tech-blue/20",
      iconColor: "text-gold",
      slug: "solutions-cloud",
    },
    {
      icon: Cpu,
      title: "IoT & Systèmes Embarqués",
      description: "Technologies connectées pour optimiser vos opérations et créer de nouveaux services innovants.",
      gradient: "from-tech-blue/20 to-gold/20",
      iconColor: "text-tech-blue",
      slug: "iot-systemes-embarques",
    },
    {
      icon: Sparkles,
      title: "Conseil & Formation",
      description: "Accompagnement stratégique et montée en compétences de vos équipes sur les technologies émergentes.",
      gradient: "from-accent/20 to-tech-blue/20",
      iconColor: "text-accent",
      slug: "conseil-formation",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-accent/10 px-6 py-3 rounded-full mb-6 border border-gold/20"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-foreground">Nos Expertises</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Ce que nous <span className="text-gold">Faisons</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions technologiques innovantes pensées pour l'Afrique et le monde
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-gold font-medium group-hover:gap-3 transition-all duration-300">
                      <span>En savoir plus</span>
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
