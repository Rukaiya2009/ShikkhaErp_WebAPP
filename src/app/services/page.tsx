import Link from "next/link";
import { CheckIcon, AcademicCapIcon, BuildingOfficeIcon, UsersIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Services – ShikkhaERP",
  description: "Professional services to help your school succeed with ShikkhaERP.",
};

export default function ServicesPage() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary">Our Services</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          Beyond software – we provide comprehensive support to ensure your school's success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <BuildingOfficeIcon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-secondary mb-3">Implementation & Onboarding</h3>
          <p className="text-gray-600">We help you set up ShikkhaERP for your school, including data migration, staff training, and configuration tailored to your workflow.</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Dedicated onboarding specialist</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Data import from existing systems</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Staff training sessions (online/on-site)</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <UsersIcon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-secondary mb-3">Support & Maintenance</h3>
          <p className="text-gray-600">Ongoing technical support, bug fixes, and security updates to keep your school running smoothly year after year.</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> 24/7 email & phone support</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Monthly security updates</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Priority bug resolution</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <AcademicCapIcon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-secondary mb-3">Custom Development</h3>
          <p className="text-gray-600">Need a specific feature for your school? We offer custom development services to extend ShikkhaERP according to your unique requirements.</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Module development</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> API integrations</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Report & dashboard customization</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/contact" className="inline-block bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Get a Service Quote</Link>
      </div>
    </section>
  );
}