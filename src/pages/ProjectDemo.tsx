import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, RotateCcw, Download, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import edushareImg from "@/assets/project-edushare.png";
import greenMetricImg from "@/assets/project-greenmetric.png";
import withsignImg from "@/assets/project-finetuner.png";
import afrollmImg from "@/assets/project-afrollm.png";
import dataafriqueImg from "@/assets/project-dataafrique.webp";
import translateafricaImg from "@/assets/project-translateafrica.png";

const ProjectDemo = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const projectsData: Record<string, any> = {
    edushare: {
      title: "Edushare",
      tagline: "Démocratiser l'éducation en Afrique",
      description: "Plateforme éducative intelligente avec des contenus adaptés aux contextes africains. Découvrez comment l'IA rend l'apprentissage accessible à tous.",
      color: "from-gold to-secondary",
      image: edushareImg,
      features: [
        { title: "Cours Interactifs", desc: "Plus de 10,000 cours dans 15 langues africaines" },
        { title: "IA Personnalisée", desc: "Apprentissage adaptatif basé sur votre progression" },
        { title: "Certificats Reconnus", desc: "Certifications validées par des universités partenaires" },
        { title: "Mode Hors-ligne", desc: "Accès aux cours même sans connexion internet" },
      ],
      demoContent: {
        type: "education",
        stats: [
          { label: "Étudiants actifs", value: "250,000+" },
          { label: "Cours disponibles", value: "10,000+" },
          { label: "Langues supportées", value: "15" },
          { label: "Taux de réussite", value: "92%" },
        ],
      },
    },
    securlog: {
      title: "SecurLog",
      tagline: "Protection intelligente des données",
      description: "Solution de cybersécurité basée sur l'IA pour protéger les infrastructures numériques africaines contre les menaces en temps réel.",
      color: "from-accent to-tech-blue",
      image: greenMetricImg,
      features: [
        { title: "Détection d'Anomalies", desc: "IA qui détecte 99.8% des menaces" },
        { title: "Réponse Automatique", desc: "Blocage instantané des attaques" },
        { title: "Tableau de Bord", desc: "Visualisation en temps réel des menaces" },
        { title: "Conformité", desc: "Conforme aux normes africaines et internationales" },
      ],
      demoContent: {
        type: "security",
        stats: [
          { label: "Menaces bloquées", value: "1.2M+" },
          { label: "Précision IA", value: "99.8%" },
          { label: "Temps de réponse", value: "<1ms" },
          { label: "Entreprises protégées", value: "5,000+" },
        ],
      },
    },
    withsign: {
      title: "WithSign",
      tagline: "Signature électronique sécurisée",
      description: "Système de signature électronique 100% conforme aux réglementations africaines, simplifiant les processus administratifs.",
      color: "from-tech-blue to-accent",
      image: withsignImg,
      features: [
        { title: "Signature Biométrique", desc: "Authentification par empreinte et reconnaissance faciale" },
        { title: "Blockchain", desc: "Traçabilité totale via la blockchain" },
        { title: "Multi-documents", desc: "Signez plusieurs documents simultanément" },
        { title: "Validité Juridique", desc: "Reconnu par 54 pays africains" },
      ],
      demoContent: {
        type: "signature",
        stats: [
          { label: "Documents signés", value: "5M+" },
          { label: "Temps économisé", value: "80%" },
          { label: "Taux d'adoption", value: "95%" },
          { label: "Pays couverts", value: "54" },
        ],
      },
    },
    afrollm: {
      title: "AfroLLM",
      tagline: "L'IA qui comprend l'Afrique",
      description: "Premier modèle de langage multilingue entraîné sur les langues et cultures africaines, préservant notre diversité linguistique.",
      color: "from-secondary to-gold",
      image: afrollmImg,
      features: [
        { title: "15 Langues Africaines", desc: "Swahili, Wolof, Hausa, Yoruba, et plus" },
        { title: "Contexte Culturel", desc: "Comprend les expressions et proverbes africains" },
        { title: "Traduction Instantanée", desc: "Entre toutes les langues supportées" },
        { title: "API Ouverte", desc: "Intégrez l'IA dans vos applications" },
      ],
      demoContent: {
        type: "ai",
        stats: [
          { label: "Langues supportées", value: "15+" },
          { label: "Précision", value: "96%" },
          { label: "Requêtes/jour", value: "2M+" },
          { label: "Développeurs", value: "10,000+" },
        ],
      },
    },
    dataafrique: {
      title: "DataAfrique",
      tagline: "Données ouvertes pour l'Afrique",
      description: "Infrastructure de données ouvertes favorisant la recherche et l'innovation avec des datasets africains de qualité.",
      color: "from-gold to-accent",
      image: dataafriqueImg,
      features: [
        { title: "Datasets Certifiés", desc: "Plus de 5,000 jeux de données vérifiés" },
        { title: "API Gratuite", desc: "Accès libre pour les chercheurs" },
        { title: "Visualisations", desc: "Outils de dataviz avancés inclus" },
        { title: "Collaboration", desc: "Espace de travail collaboratif" },
      ],
      demoContent: {
        type: "data",
        stats: [
          { label: "Datasets", value: "5,000+" },
          { label: "Chercheurs", value: "50,000+" },
          { label: "Téléchargements", value: "10M+" },
          { label: "Pays couverts", value: "54" },
        ],
      },
    },
    translateafrica: {
      title: "TranslateAfrica",
      tagline: "Briser les barrières linguistiques",
      description: "Service de traduction automatique préservant les nuances culturelles des langues africaines avec une précision inégalée.",
      color: "from-accent to-secondary",
      image: translateafricaImg,
      features: [
        { title: "30 Langues", desc: "Toutes les principales langues africaines" },
        { title: "Traduction Vocale", desc: "Parlez et traduisez en temps réel" },
        { title: "Contexte Culturel", desc: "Préserve les expressions idiomatiques" },
        { title: "Offline", desc: "Fonctionne sans connexion internet" },
      ],
      demoContent: {
        type: "translation",
        stats: [
          { label: "Langues", value: "30+" },
          { label: "Traductions/jour", value: "5M+" },
          { label: "Précision", value: "94%" },
          { label: "Utilisateurs", value: "1M+" },
        ],
      },
    },
  };

  const project = projectsData[projectId || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2" size={16} />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft size={20} />
              Retour
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Star size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--gold)) 0%, hsl(var(--tech-blue)) 100%)`,
            backgroundSize: "200% 200%",
          }}
        />
        
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold`}>
                Démo Interactive
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold via-primary to-tech-blue">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gold/90 mb-4 font-semibold">
              {project.tagline}
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {project.demoContent.stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-gold/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-primary mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Demo Interface */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Demo Controls */}
          <div className="bg-card/80 backdrop-blur-xl rounded-t-3xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Interface de Démonstration</h2>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={isPlaying ? "default" : "outline"}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? "Pause" : "Lancer"}
                </Button>
                <Button size="sm" variant="outline">
                  <RotateCcw size={16} />
                </Button>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>
            </div>

            {/* Demo Screen */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-background border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={isPlaying ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/30 to-primary/30 backdrop-blur-sm flex items-center justify-center border-4 border-gold/50"
                >
                  {isPlaying ? (
                    <Pause className="text-gold" size={48} />
                  ) : (
                    <Play className="text-gold ml-2" size={48} />
                  )}
                </motion.div>
              </div>

              {/* Animated Overlay */}
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute top-4 left-4 px-4 py-2 rounded-full bg-green-500/90 text-white text-sm font-semibold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ● En direct
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/90 backdrop-blur-sm border border-border"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-gold to-primary"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Traitement en cours...
                      </span>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-card/80 backdrop-blur-xl rounded-b-3xl border border-t-0 border-border p-6">
            <h3 className="text-xl font-bold mb-6">Fonctionnalités Principales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-background border border-border hover:border-gold/50 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-gold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Prêt à découvrir {project.title} ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers d'utilisateurs qui font déjà confiance à nos solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-gold to-primary text-deep-black hover:opacity-90">
              Commencer Gratuitement
            </Button>
            <Button size="lg" variant="outline">
              Planifier une Démo
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDemo;
