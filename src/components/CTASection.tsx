/* src/components/CTASection.tsx */
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-20 mb-0">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Ready to Transform Your School?
        </h2>
        <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of schools across Bangladesh using ShikkhaERP.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
        >
          Request a Free Demo
        </Link>
      </div>
    </section>
  );
}