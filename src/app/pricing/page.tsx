import { plans } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Pricing – ShikkhaERP", description: "Affordable per-student pricing for Bangladesh schools." };

export default function PricingPage() {
  return (
    <>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-secondary text-center">Pricing Plans</h1>
        <p className="mt-4 text-gray-500 text-center">No hidden fees. Scale as you grow.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}