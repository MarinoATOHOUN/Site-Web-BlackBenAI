
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Megaphone, Clock } from "lucide-react";

// Placeholder data - this should be moved to a shared data file or API
const announcementDetails = {
  "ia-generative-afrique": {
    icon: Sparkles,
    title: "Une IA générative rien que pour l'Afrique",
    date: "Très bientôt",
    fullDescription: "BlackBenAI est sur le point de lancer une intelligence artificielle générative révolutionnaire, conçue spécifiquement pour le contexte africain. Ce modèle comprendra les nuances culturelles, les langues locales et les réalités économiques du continent pour fournir des solutions pertinentes et accessibles à tous. L'objectif est de stimuler l'innovation locale, de soutenir les entreprises et de créer de nouvelles opportunités pour la jeunesse africaine.",
    features: [
      "Compréhension des langues locales (Yoruba, Fon, Wolof, etc.)",
      "Connaissance des contextes culturels et sociaux africains",
      "API accessible pour les développeurs",
      "Interface utilisateur intuitive pour les non-techniciens",
      "Optimisé pour une faible consommation de bande passante"
    ],
    impact: [
      "Accélération de la création de contenu local",
      "Amélioration de l'éducation avec des outils adaptés",
      "Support aux entreprises pour l'innovation produit",
      "Création d'emplois dans le secteur de la tech",
      "Renforcement de la souveraineté numérique africaine"
    ],
    gradient: "from-gold-light/20 to-primary/20",
  },
  "base-de-donnees-educative": {
    icon: Megaphone,
    title: "Construire la plus grande base de données éducative en Afrique",
    date: "10 Oct 2025",
    fullDescription: "Le projet EduShare, piloté par BlackBenAI, ambitionne de créer la plus vaste base de données éducative ouverte et collaborative en Afrique. Cette plateforme centralisera des ressources pédagogiques de haute qualité, des manuels scolaires aux cours universitaires, en passant par des formations professionnelles. L'objectif est de rendre le savoir accessible à tous, partout sur le continent, et de soutenir les systèmes éducatifs nationaux.",
    features: [
      "Contenus multilingues et adaptés aux programmes nationaux",
      "Accès gratuit pour les étudiants et les enseignants",
      "Plateforme collaborative pour l'enrichissement des contenus",
      "Disponibilité hors-ligne pour les zones à faible connectivité",
      "Partenariats avec des universités et des institutions africaines"
    ],
    impact: [
      "Réduction des inégalités d'accès à l'éducation",
      "Amélioration de la qualité de l'enseignement",
      "Soutien à la recherche et à l'innovation académique",
      "Formation d'une main-d'œuvre qualifiée",
      "Préservation et diffusion du savoir africain"
    ],
    gradient: "from-primary/20 to-gold-light/20",
  },
  "vision-par-ordinateur-pilier-ia": {
    icon: Clock,
    title: "Et si la vision par ordinateur devenait le pilier de l'IA africaine ?",
    date: "20 Oct 2025",
    fullDescription: "BlackBenAI investit massivement dans la vision par ordinateur pour répondre aux défis majeurs de l'Afrique. De l'agriculture de précision à la télémédecine, en passant par la gestion urbaine et la surveillance environnementale, nos solutions de Computer Vision visent à optimiser les secteurs clés de l'économie africaine. Nous développons des modèles capables d'analyser des images satellites, des vidéos de drones et des diagnostics médicaux avec une grande précision.",
    features: [
      "Analyse d'images agricoles pour l'optimisation des rendements",
      "Diagnostic médical assisté par IA (imagerie médicale)",
      "Systèmes de surveillance intelligente pour la sécurité urbaine",
      "Détection précoce des maladies des cultures",
      "Modèles adaptés aux spécificités des environnements africains"
    ],
    impact: [
      "Augmentation de la sécurité alimentaire",
      "Amélioration de l'accès aux soins de santé",
      "Villes plus sûres et mieux gérées",
      "Protection de la biodiversité",
      "Création de nouvelles filières économiques"
    ],
    gradient: "from-gold-light/20 to-primary/20",
  }
};

const AnnouncementDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const announcement = announcementDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!announcement) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-4">Annonce non trouvée</h2>
        <p className="text-muted-foreground mb-8">Désolé, l'annonce que vous cherchez n'existe pas.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  const { icon: Icon, title, date, fullDescription, features, impact, gradient } = announcement;

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-black via-deep-black/90 to-deep-black text-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-gold-light hover:text-gold transition-colors"
          >
            <ArrowLeft size={18} />
            Retour aux annonces
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`p-8 md:p-12 rounded-3xl border border-gold-light/20 bg-gradient-to-br ${gradient} shadow-2xl shadow-gold-light/10`}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 bg-gradient-to-br from-gold-light to-primary rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <Icon className="w-12 h-12 text-deep-black" />
            </motion.div>
            <div className="flex-1">
              <span className="text-sm text-gold-light font-semibold mb-2 block">{date}</span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">{title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {fullDescription}
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gold-light mb-4">Fonctionnalités Clés</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Sparkles className="w-5 h-5 text-gold-light mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gold-light mb-4">Impact Attendu</h3>
              <ul className="space-y-3">
                {impact.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Megaphone className="w-5 h-5 text-gold-light mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;

