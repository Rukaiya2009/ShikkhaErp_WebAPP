import { features } from "@/data/features";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Features – ShikkhaERP", description: "Explore all 20+ school management features." };

export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-secondary text-center">Complete Feature Set</h1>
        <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">From admission to report cards, ShikkhaERP covers every aspect of school administration.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}