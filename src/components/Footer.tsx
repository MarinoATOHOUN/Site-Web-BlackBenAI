import { Heart, Mail, Github, Linkedin, Twitter, MapPin, Phone, Globe, Sparkles, Zap, Cpu, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/blackbenai-logo-full.png";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Merci pour votre inscription à notre newsletter !");
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "Github", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Cotonou, Bénin", color: "text-gold" },
    { icon: Phone, text: "+229 XX XX XX XX", color: "text-tech-blue" },
    { icon: Globe, text: "www.blackbenai.com", color: "text-accent" },
  ];

  const quickLinks = [
    { href: "#home", label: "Accueil", icon: Sparkles },
    { href: "#about", label: "À propos", icon: Brain },
    { href: "#projects", label: "Projets", icon: Cpu },
    { href: "#contact", label: "Contact", icon: Zap },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-50, 0, -50],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-tech-blue/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [50, 0, 50],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating icons */}
      <motion.div
        className="absolute top-10 right-20 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <Cpu className="w-16 h-16 text-gold" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 25, repeat: Infinity }}
      >
        <Brain className="w-20 h-20 text-tech-blue" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center mb-6"
            >
              <motion.img 
                src={logo} 
                alt="BlackBenAI" 
                className="h-16 drop-shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
            </motion.div>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              L'Intelligence Artificielle au service de l'Afrique
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-primary-foreground/70">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-bold mb-6 text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              Liens rapides
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="group flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold mb-6 text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-tech-blue" />
              Suivez-nous
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center ${social.color} transition-all`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <ul className="space-y-3 text-sm">
              {["Confidentialité", "Conditions", "Documentation"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href="#"
                    className="text-primary-foreground/70 hover:text-gold transition-colors inline-block relative group"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-bold mb-4 text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" />
              Newsletter
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Restez informé de nos dernières innovations en IA
            </p>
            <motion.form 
              onSubmit={handleNewsletterSubmit} 
              className="space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 pr-12 transition-all"
                />
                <motion.div
                  className="absolute right-1 top-1"
                  whileHover={{ rotate: 15 }}
                >
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-gradient-to-r from-gold to-gold/80 text-deep-black hover:from-gold/90 hover:to-gold/70 shadow-lg shadow-gold/20"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
              <p className="text-xs text-primary-foreground/50">
                Recevez nos actualités chaque semaine 🚀
              </p>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-primary-foreground/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-sm text-primary-foreground/70"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} BlackBenAI. Tous droits réservés.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary-foreground/70">Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="text-gold" size={16} fill="currentColor" />
              </motion.div>
              <span className="text-primary-foreground/70">au Bénin</span>
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🇧🇯
              </motion.span>
            </motion.div>

            <motion.p 
              className="text-xs text-primary-foreground/50 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-3 h-3 text-gold" />
              Propulsé par l'innovation africaine
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
