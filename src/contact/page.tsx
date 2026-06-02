import DemoForm from "@/components/DemoForm";

export const metadata = { title: "Request a Demo – ShikkhaERP" };

export default function ContactPage() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-secondary text-center">Get a Personalised Demo</h1>
      <p className="mt-4 text-gray-500 text-center">See how ShikkhaERP can help your school.</p>
      <div className="mt-10 bg-white p-8 rounded-xl shadow-sm border"><DemoForm /></div>
      <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
        <p>📧 info@shikkhaerp.com</p>
        <p>📞 +880 1714-090224</p>
        <p>📍 35/1, Siddheswari, Ramna, Dhaka</p>
      </div>
    </section>
  );
}