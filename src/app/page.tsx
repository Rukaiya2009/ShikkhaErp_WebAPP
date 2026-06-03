/* src/app/page.tsx */
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FeatureCard from "@/components/FeatureCard";
import { featuredHomeFeatures } from "@/data/features";
import HowItWorks from "@/components/HowItWorks";
import PricingCard from "@/components/PricingCard";
import { plans } from "@/data/pricing";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      
      {/* Features Section */}
      <section className="py-16 container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Everything Your School Needs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            From admission to report cards, ShikkhaERP covers every aspect of school administration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHomeFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <section className="py-16 container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            No hidden fees. Scale as you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Loved by Schools
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              See what our customers say about ShikkhaERP.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}