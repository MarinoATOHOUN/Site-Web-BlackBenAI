import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Database, Cpu, Globe, Sparkles, BrainCircuit, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData: Record<string, {
    icon: typeof BrainCircuit;
    title: string;
    description: string;
    fullDescription: string;
    gradient: string;
    iconColor: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    useCases: string[];
  }> = {
    "intelligence-artificielle": {
      icon: BrainCircuit,
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure adaptées aux réalités africaines",
      fullDescription: "Nous développons des solutions d'intelligence artificielle innovantes qui tiennent compte des spécificités culturelles, linguistiques et contextuelles du continent africain. Notre expertise couvre l'ensemble du spectre de l'IA, du traitement du langage naturel à la vision par ordinateur, en passant par l'apprentissage automatique et le deep learning.",
      gradient: "from-gold/20 to-accent/20",
      iconColor: "text-gold",
      features: [
        "Traitement du langage naturel pour les langues africaines",
        "Vision par ordinateur adaptée aux contextes locaux",
        "Systèmes de recommandation personnalisés",
        "Modèles d'apprentissage automatique sur mesure",
        "Analyse prédictive et forecasting",
        "Chatbots et assistants virtuels intelligents"
      ],
      benefits: [
        "Solutions adaptées au contexte africain",
        "Réduction des coûts opérationnels",
        "Amélioration de la prise de décision",
        "Automatisation des processus métier",
        "Augmentation de la productivité",
        "Innovation compétitive"
      ],
      technologies: [
        "TensorFlow & PyTorch",
        "Hugging Face Transformers",
        "OpenAI & Anthropic APIs",
        "Scikit-learn",
        "Computer Vision (OpenCV, YOLO)",
        "NLP Libraries (spaCy, NLTK)"
      ],
      useCases: [
        "Détection de fraude bancaire",
        "Diagnostic médical assisté par IA",
        "Agriculture de précision",
        "Analyse de sentiment client",
        "Traduction automatique multilingue",
        "Reconnaissance faciale et biométrie"
      ]
    },
    "developpement-web-mobile": {
      icon: Code,
      title: "Développement Web & Mobile",
      description: "Applications modernes et performantes pour le continent africain",
      fullDescription: "Nous créons des applications web et mobile de haute qualité, optimisées pour les infrastructures africaines. Notre approche privilégie la performance, l'accessibilité et l'expérience utilisateur, tout en tenant compte des contraintes de connectivité et de diversité des appareils.",
      gradient: "from-tech-blue/20 to-accent/20",
      iconColor: "text-tech-blue",
      features: [
        "Applications web progressives (PWA)",
        "Applications mobiles natives (iOS & Android)",
        "Applications hybrides cross-platform",
        "Interfaces utilisateur modernes et intuitives",
        "Optimisation pour connexions faibles",
        "Mode hors-ligne et synchronisation"
      ],
      benefits: [
        "Expérience utilisateur optimale",
        "Performance sur tous les appareils",
        "Réduction du temps de développement",
        "Maintenance simplifiée",
        "Évolutivité garantie",
        "Coûts maîtrisés"
      ],
      technologies: [
        "React & React Native",
        "Vue.js & Flutter",
        "Node.js & Python",
        "TypeScript",
        "Progressive Web Apps",
        "REST & GraphQL APIs"
      ],
      useCases: [
        "Plateformes e-commerce",
        "Applications de mobile banking",
        "Solutions éducatives",
        "Systèmes de gestion",
        "Applications de santé",
        "Réseaux sociaux locaux"
      ]
    },
    "big-data-analytics": {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Exploitation intelligente des données pour des décisions éclairées",
      fullDescription: "Nous transformons vos données en insights actionnables grâce à des solutions de Big Data et d'analytics avancées. Notre expertise vous permet d'exploiter pleinement le potentiel de vos données pour optimiser vos opérations et anticiper les tendances du marché.",
      gradient: "from-accent/20 to-gold/20",
      iconColor: "text-accent",
      features: [
        "Architecture de données scalable",
        "Data warehousing et data lakes",
        "Analyse en temps réel",
        "Visualisation de données interactive",
        "Business Intelligence avancée",
        "Data mining et pattern recognition"
      ],
      benefits: [
        "Décisions basées sur les données",
        "Identification de nouvelles opportunités",
        "Optimisation des processus",
        "Réduction des risques",
        "Avantage compétitif",
        "ROI mesurable"
      ],
      technologies: [
        "Apache Hadoop & Spark",
        "PostgreSQL & MongoDB",
        "Elasticsearch",
        "Power BI & Tableau",
        "Python (Pandas, NumPy)",
        "Apache Kafka"
      ],
      useCases: [
        "Analyse du comportement client",
        "Prévision de la demande",
        "Optimisation de la supply chain",
        "Détection d'anomalies",
        "Segmentation de marché",
        "Tableaux de bord décisionnels"
      ]
    },
    "solutions-cloud": {
      icon: Globe,
      title: "Solutions Cloud",
      description: "Infrastructure cloud robuste et scalable",
      fullDescription: "Nous concevons et déployons des infrastructures cloud sécurisées, performantes et évolutives. Notre expertise multi-cloud vous permet de bénéficier des meilleures technologies tout en optimisant vos coûts et en garantissant la continuité de vos services.",
      gradient: "from-gold/20 to-tech-blue/20",
      iconColor: "text-gold",
      features: [
        "Migration vers le cloud",
        "Architecture multi-cloud",
        "Infrastructure as Code (IaC)",
        "Containerisation et orchestration",
        "DevOps et CI/CD",
        "Monitoring et observabilité"
      ],
      benefits: [
        "Réduction des coûts d'infrastructure",
        "Scalabilité automatique",
        "Haute disponibilité",
        "Sécurité renforcée",
        "Déploiement rapide",
        "Flexibilité maximale"
      ],
      technologies: [
        "AWS, Azure, Google Cloud",
        "Kubernetes & Docker",
        "Terraform & Ansible",
        "Jenkins & GitLab CI",
        "Prometheus & Grafana",
        "CloudFormation"
      ],
      useCases: [
        "Hébergement d'applications web",
        "Microservices architecture",
        "Disaster recovery",
        "Environnements de développement",
        "Backup et archivage",
        "Content delivery network"
      ]
    },
    "iot-systemes-embarques": {
      icon: Cpu,
      title: "IoT & Systèmes Embarqués",
      description: "Technologies connectées pour l'innovation",
      fullDescription: "Nous développons des solutions IoT et systèmes embarqués innovants qui transforment la façon dont vous interagissez avec le monde physique. De la conception hardware à l'intégration logicielle, nous créons des dispositifs intelligents adaptés à vos besoins spécifiques.",
      gradient: "from-tech-blue/20 to-gold/20",
      iconColor: "text-tech-blue",
      features: [
        "Développement de capteurs intelligents",
        "Systèmes de monitoring à distance",
        "Automatisation industrielle",
        "Gestion énergétique intelligente",
        "Agriculture connectée",
        "Smart cities solutions"
      ],
      benefits: [
        "Optimisation des opérations",
        "Réduction des coûts énergétiques",
        "Maintenance prédictive",
        "Amélioration de la productivité",
        "Collecte de données en temps réel",
        "Nouveaux modèles d'affaires"
      ],
      technologies: [
        "Arduino & Raspberry Pi",
        "MQTT & LoRaWAN",
        "Edge Computing",
        "Embedded Linux",
        "BLE & Zigbee",
        "Time Series Databases"
      ],
      useCases: [
        "Monitoring agricole intelligent",
        "Gestion de flotte",
        "Smart metering",
        "Surveillance environnementale",
        "Logistique connectée",
        "Santé connectée"
      ]
    },
    "conseil-formation": {
      icon: Sparkles,
      title: "Conseil & Formation",
      description: "Accompagnement stratégique et montée en compétences",
      fullDescription: "Nous accompagnons les organisations dans leur transformation digitale en combinant conseil stratégique et formation pratique. Notre approche personnalisée vous permet de développer les compétences nécessaires pour rester compétitifs dans un environnement technologique en constante évolution.",
      gradient: "from-accent/20 to-tech-blue/20",
      iconColor: "text-accent",
      features: [
        "Audit et stratégie digitale",
        "Roadmap technologique",
        "Formation sur mesure",
        "Coaching d'équipes",
        "Workshops et masterclasses",
        "Transfert de compétences"
      ],
      benefits: [
        "Alignement stratégique",
        "Montée en compétences rapide",
        "Réduction de la dépendance externe",
        "Amélioration de l'innovation",
        "Culture tech renforcée",
        "ROI optimisé"
      ],
      technologies: [
        "Intelligence Artificielle",
        "Cloud Computing",
        "DevOps & Agile",
        "Data Science",
        "Cybersécurité",
        "Développement moderne"
      ],
      useCases: [
        "Transformation digitale",
        "Upskilling des équipes IT",
        "Adoption de nouvelles technologies",
        "Optimisation des processus",
        "Innovation workshops",
        "Mentorat technique"
      ]
    }
  };

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    navigate("/");
    return null;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-background to-background" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Button>

            <div className="flex items-center gap-6 mb-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}>
                <Icon className={`w-10 h-10 ${service.iconColor}`} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-gold to-accent mb-8" />

            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12">
              Fonctionnalités <span className="text-gold">Principales</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-background rounded-lg border border-border hover:border-gold/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12">
              Avantages <span className="text-gold">Clés</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} border border-border/50`}
                >
                  <Sparkles className={`w-6 h-6 ${service.iconColor} mb-3`} />
                  <p className="text-foreground font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12">
              Technologies <span className="text-gold">Utilisées</span>
            </h2>

            <div className="flex flex-wrap gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 bg-background rounded-full border border-border hover:border-gold/50 transition-colors"
                >
                  <span className="text-foreground font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12">
              Cas d'<span className="text-gold">Usage</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${service.gradient}`} />
                  <p className="text-foreground text-lg">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-accent/10 to-tech-blue/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/#contact")}
              className="bg-gold hover:bg-gold/90 text-primary-foreground"
            >
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
