import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Globe } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons bientôt. Merci de rejoindre le mouvement !",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-accent" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-tech-blue" },
    { icon: Mail, label: "Email", href: "mailto:contact@blackbenai.com", color: "hover:text-gold" },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
      
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
            className="flex justify-center gap-3 mb-6"
          >
            <Mail className="w-6 h-6 text-gold" />
            <MapPin className="w-6 h-6 text-tech-blue" />
            <Globe className="w-6 h-6 text-accent" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Rejoindre le <span className="text-gold">Mouvement</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ensemble, construisons l'avenir technologique de l'Afrique
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 bg-card rounded-2xl shadow-2xl border border-border">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Send className="w-8 h-8 text-deep-black" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Envoyez-nous un message
                </h3>
                <p className="text-muted-foreground">
                  Nous sommes impatients d'échanger avec vous
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    required
                    className="w-full h-12 bg-background/50 border-border/50 focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-blue rounded-full" />
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                    required
                    className="w-full h-12 bg-background/50 border-border/50 focus:border-tech-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Parlez-nous de vous et comment vous souhaitez contribuer..."
                    required
                    rows={5}
                    className="w-full bg-background/50 border-border/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-gold via-accent to-tech-blue text-deep-black hover:opacity-90 font-bold text-base shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  size="lg"
                >
                  Envoyer le message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-tech-blue/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-deep-black" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    Connectons-nous
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Que vous soyez développeur, chercheur, entrepreneur ou passionné de technologie, rejoignez notre communauté.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gold/5 to-accent/5 rounded-xl border border-gold/20 hover:border-gold/40 transition-colors">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <span className="text-foreground font-medium">contact@blackbenai.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-tech-blue/5 to-accent/5 rounded-xl border border-tech-blue/20 hover:border-tech-blue/40 transition-colors">
                    <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-tech-blue" size={20} />
                    </div>
                    <span className="text-foreground font-medium">Cotonou, Bénin</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 bg-gradient-to-br from-accent/10 to-tech-blue/10 rounded-2xl border border-accent/30 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-tech-blue rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Suivez-nous
                  </h3>
                </div>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 bg-card rounded-xl flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl border border-border hover:border-gold/30`}
                        aria-label={social.label}
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
