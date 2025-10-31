import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Shield, FileSignature, Brain, Database, Languages, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import edushareImg from "@/assets/project-edushare.png";
import greenMetricImg from "@/assets/project-greenmetric.png";
import withsignImg from "@/assets/project-finetuner.png";
import afrollmImg from "@/assets/project-afrollm.png";
import dataafriqueImg from "@/assets/project-dataafrique.webp";
import translateafricaImg from "@/assets/project-translateafrica.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const projects = [
    {
      icon: GraduationCap,
      title: "Edushare",
      slug: "edushare",
      description: "Plateforme éducative intelligente qui démocratise l'accès au savoir avec des contenus adaptés aux contextes africains.",
      color: "from-gold to-secondary",
      image: edushareImg,
      link: "https://edushare.blackbenai.com",
    },
    {
      icon: Shield,
      title: "GreenMetric",
      slug: "greenmetric",
      description: "Solution de gestion des activités agricoles pour favoriser la productivité et la durabilité des agriculteurs africains.",
      color: "from-accent to-tech-blue",
      image: greenMetricImg,
      link: "https://agri-tech-eight.vercel.app",
    },
    {
      icon: FileSignature,
      title: "FineTuner",
      slug: "finetuner",
      description: "FineTuner a pour objectif de faire du fine-tuning un véritable jeux d'enfant pour tout utilisateur ayant un profile technologique ou non.",
      color: "from-tech-blue to-accent",
      image: withsignImg,
      link: "https://fineturn-plateform-7j6y.vercel.app",
    },
    {
      icon: Brain,
      title: "AfroLLM",
      slug: "afrollm",
      description: "Modèle de langage africain multilingue entraîné sur les langues et cultures du continent.",
      color: "from-secondary to-gold",
      image: afrollmImg,
      link: "https://afrollm.blackbenai.com",
    },
    {
      icon: Database,
      title: "DataAfrique",
      slug: "dataafrique",
      description: "Infrastructure de données ouvertes pour favoriser la recherche et l'innovation en Afrique.",
      color: "from-gold to-accent",
      image: dataafriqueImg,
      link: "https://dataafrique.blackbenai.com",
    },
    {
      icon: Languages,
      title: "TranslateAfrica",
      slug: "translateafrica",
      description: "Service de traduction automatique pour les langues africaines, préservant nos diversités culturelles.",
      color: "from-accent to-secondary",
      image: translateafricaImg,
      link: "https://translateafrica.blackbenai.com",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Nos <span className="text-gold">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions concrètes pour transformer l'Afrique par l'intelligence artificielle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-2xl shadow-lg border border-border hover:border-gold/50 transition-all duration-300 h-full hover:-translate-y-2 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-deep-black/20" />
                    <div className={`absolute bottom-3 left-3 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Accéder
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-gold to-secondary text-deep-black hover:opacity-90"
                        onClick={() => navigate(`/demo/${project.slug}`)}
                      >
                        <Play size={16} className="mr-2" />
                        Démo
                      </Button>
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

export default Projects;
