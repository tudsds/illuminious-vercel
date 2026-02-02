import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Illuminious",
  description: "Terms of service for Illuminious website and services.",
};

export default function Terms() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-white">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p>Last updated: January 2025</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Illuminious website, you accept and agree to be bound 
              by these Terms of Service.
            </p>

            <h2>2. Services</h2>
            <p>
              Illuminious provides electronics manufacturing services including but not limited 
              to ODM, OEM, EMS, PCB assembly, and related consulting services.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of Illuminious and protected by copyright laws.
            </p>

            <h2>4. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:{" "}
              <a href="mailto:info@illuminious.com" className="text-blue-600">info@illuminious.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
