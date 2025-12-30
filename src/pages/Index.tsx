import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductInfo from "@/components/ProductInfo";
import StickyCartBar from "@/components/StickyCartBar";
import DailyOrdersNotification from "@/components/DailyOrdersNotification";
import ExitIntentPopup from "@/components/ExitIntentPopup";

// Lazy load below-the-fold components
const BeforeAfterCarousel = lazy(() => import("@/components/BeforeAfterCarousel"));
const Footer = lazy(() => import("@/components/Footer"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const ClinicalResultsSection = lazy(() => import("@/components/ClinicalResultsSection"));
const UGCCarousel = lazy(() => import("@/components/UGCCarousel"));
const BookExplanationSection = lazy(() => import("@/components/BookExplanationSection"));
const BookUniqueFeatures = lazy(() => import("@/components/BookUniqueFeatures"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const ProfessionalEndorsements = lazy(() => import("@/components/ProfessionalEndorsements"));
const CertificationBadges = lazy(() => import("@/components/CertificationBadges"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));

// Minimal loading skeleton
const SectionSkeleton = () => (
  <div className="w-full h-48 bg-muted/20 animate-pulse rounded-lg" />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <ExitIntentPopup />
      <AnnouncementBar />
      <DailyOrdersNotification />
      <StickyCartBar />
      <Header />
      
      <main className="container mx-auto px-4 pt-0 md:pt-8 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <ProductInfo />
        </div>

        {/* As Seen In Section - Critical, load immediately */}
        <section className="mb-8 md:mb-12 border-y border-border/20 py-12">
          <h2 className="text-sm md:text-base font-medium text-center mb-10 tracking-wider uppercase text-foreground">Como lo viste en</h2>
          <div className="flex items-center justify-center gap-2 md:gap-12 lg:gap-16 px-2 md:px-4">
            <img src="/logos/vogue.png" alt="Vogue" loading="lazy" width="176" height="40" className="w-16 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src="/logos/elle.png" alt="Elle" loading="lazy" width="176" height="40" className="w-16 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src="/logos/goop.png" alt="Goop" loading="lazy" width="176" height="40" className="w-16 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src="/logos/womenshealth.png" alt="Women's Health" loading="lazy" width="176" height="40" className="w-16 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
          </div>
        </section>

        {/* Lazy loaded sections */}
        <Suspense fallback={<SectionSkeleton />}>
          <UGCCarousel />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <BookExplanationSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <BeforeAfterCarousel />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ProfessionalEndorsements />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CertificationBadges />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <BookUniqueFeatures />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ComparisonSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ClinicalResultsSection />
        </Suspense>

        {/* Testimonials - inline for faster paint */}
        <section className="mt-16 md:mt-24 bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestras Clientas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "¡Resultados increíbles! En solo 2 semanas noté cambios reales en mi piel y mi energía. ¡Lo recomiendo totalmente!"
              </p>
              <p className="text-sm font-semibold">- María L.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 3 días</p>
            </div>
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "$37 me parece poco a comparación de lo que viene en el libro, es una BARBARIDAD lo que hay dentro y sobre todo que funciona, 10/10 sin duda."
              </p>
              <p className="text-sm font-semibold">- Sarah M.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 1 semana</p>
            </div>
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "Pensé que era otra estafa más, pero los protocolos funcionan de verdad. Mi acné hormonal prácticamente desapareció."
              </p>
              <p className="text-sm font-semibold">- Ana R.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 12 días</p>
            </div>
          </div>
        </section>

        {/* FAQ - Lazy load accordion */}
        <Suspense fallback={<SectionSkeleton />}>
          <LazyFAQ />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <GuaranteeSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ReviewsSection />
        </Suspense>

      </main>

      <Suspense fallback={<div className="h-32 bg-muted/10" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

// Lazy FAQ component
const LazyFAQ = lazy(() => import("@/components/FAQSection"));

export default Index;