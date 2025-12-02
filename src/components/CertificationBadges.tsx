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
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-sm md:text-base font-medium text-center mb-10 tracking-wider uppercase text-foreground">
        Inspirado en prácticas aprobadas por.
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
        {badges.map((badge) => (
          <div 
            key={badge.id}
            className="flex items-center justify-center"
          >
            <img 
              src={badge.src} 
              alt={badge.alt}
              className={`w-auto object-contain transition-all duration-300 ${
                badge.id === 3 ? 'h-20 md:h-24' : 'h-28 md:h-32'
              }`}
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationBadges;
