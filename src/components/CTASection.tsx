import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-heading font-bold">Ready to Transform Your School?</h2>
        <p className="mt-4 text-blue-100 text-lg">Join hundreds of schools across Bangladesh using ShikkhaERP.</p>
        <Link href="/contact" className="mt-8 inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Request a Free Demo</Link>
      </div>
    </section>
  );
}
