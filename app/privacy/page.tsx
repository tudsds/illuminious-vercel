import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Illuminious",
  description: "Privacy policy for Illuminious website and services.",
};

export default function Privacy() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-white">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p>Last updated: January 2025</p>
            
            <h2>Introduction</h2>
            <p>
              Illuminious LLC ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Project details and requirements</li>
              <li>Website usage data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide manufacturing services</li>
              <li>Improve our website and services</li>
              <li>Send relevant communications (with your consent)</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:info@illuminious.com" className="text-blue-600">info@illuminious.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
