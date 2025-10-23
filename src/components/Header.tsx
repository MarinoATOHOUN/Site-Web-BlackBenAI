import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/blackbenai-logo-full.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Mission", id: "mission" },
    { label: "Projets", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="BlackBenAI" className="h-12 rounded-xl" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground dark:text-[#F5F5F0] hover:text-secondary dark:hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-gold to-secondary text-deep-black hover:opacity-90"
            >
              Rejoindre le mouvement
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground dark:text-[#F5F5F0] hover:text-secondary dark:hover:text-gold transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-gold to-secondary text-deep-black"
            >
              Rejoindre le mouvement
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
