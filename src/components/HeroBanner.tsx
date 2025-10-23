import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.png";
import heroBanner3 from "@/assets/hero-banner-3.png";

const HeroBanner = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const banners = [
    {
      image: heroBanner1,
      title: "Innovation Africaine",
      subtitle: "Transformons l'Afrique par l'IA"
    },
    {
      image: heroBanner2,
      title: "Éducation du Futur",
      subtitle: "L'IA au service de l'apprentissage"
    },
    {
      image: heroBanner3,
      title: "Transformation Digitale",
      subtitle: "Connectons le continent"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-background to-muted/20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-black/95 via-deep-black/70 to-deep-black/40" />
                </div>
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-2xl"
                    >
                      <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white drop-shadow-2xl">
                        {banner.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-gold-light drop-shadow-lg">
                        {banner.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
