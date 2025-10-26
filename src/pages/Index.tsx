import CountdownBanner from "@/components/CountdownBanner";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CountdownBanner />
      <Header />
      <AnnouncementBar />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* How It Works Section */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Daily</h3>
              <p className="text-sm text-muted-foreground">
                Apply serum to clean lashes every night before bed
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">See Results</h3>
              <p className="text-sm text-muted-foreground">
                Notice longer, fuller lashes within 2-4 weeks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Maintain Beauty</h3>
              <p className="text-sm text-muted-foreground">
                Continue use for lasting beautiful lashes
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16 md:mt-24 bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-primary">★</span>
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Amazing results! My lashes are so much longer and fuller. I get compliments all the time!"
                </p>
                <p className="text-sm font-semibold">- Sarah M.</p>
                <p className="text-xs text-muted-foreground">Verified Buyer</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">How long until I see results?</h3>
              <p className="text-sm text-muted-foreground">
                Most users see visible results within 2-4 weeks of consistent daily use.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Is it safe to use?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! Our formula is dermatologist-tested and safe for daily use.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">How do I apply it?</h3>
              <p className="text-sm text-muted-foreground">
                Apply to clean, dry lashes at the base, similar to eyeliner, once daily before bed.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary mt-16 md:mt-24 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FORCHICS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
