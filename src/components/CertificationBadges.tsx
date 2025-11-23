import logoUsda from "@/assets/logo-usda-organic.png";
import logoCrueltyFree from "@/assets/logo-cruelty-free.png";
import logoNonGmo from "@/assets/logo-non-gmo.png";
import logoApa from "@/assets/logo-apa.png";

const CertificationBadges = () => {
  const badges = [
    { id: 1, src: logoUsda, alt: "USDA Organic" },
    { id: 2, src: logoCrueltyFree, alt: "Cruelty Free" },
    { id: 3, src: logoNonGmo, alt: "Non-GMO Project" },
    { id: 4, src: logoApa, alt: "American Psychological Association" },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-foreground">
        Inspirado en prácticas aprobadas por.
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {badges.map((badge) => (
          <div 
            key={badge.id}
            className="flex items-center justify-center p-4"
          >
            <img 
              src={badge.src} 
              alt={badge.alt}
              className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationBadges;
