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
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-secondary text-center">Everything Your School Needs</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHomeFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
      <HowItWorks />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-secondary text-center">Simple, Transparent Pricing</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-secondary text-center">Loved by Schools</h2>
          <div className="mt-10"><TestimonialCarousel /></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
