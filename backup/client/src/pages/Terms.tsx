import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Illuminious"
        description="Illuminious terms and conditions. Read our terms of service for using our website and services."
        keywords="terms and conditions, terms of service, legal terms"
        url="/terms"
      />
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-8">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using the Illuminious Inc. ("Company," "we," "our," or "us") website 
              and services, you agree to be bound by these Terms and Conditions. If you disagree 
              with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-4">
              Illuminious provides electronics manufacturing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Original Equipment Manufacturing (OEM)</li>
              <li>Original Design Manufacturing (ODM)</li>
              <li>Electronics Manufacturing Services (EMS)</li>
              <li>PCB Assembly and Box Build</li>
              <li>Supply Chain Management and Logistics</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of Illuminious Inc. and is protected by intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our prior 
              written consent.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">4. Client Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              We respect and protect our clients' intellectual property. All designs, specifications, 
              and proprietary information shared with us remain the exclusive property of our clients. 
              We maintain strict confidentiality and implement robust security measures to protect 
              your intellectual property.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">5. Quotations and Orders</h2>
            <p className="text-muted-foreground mb-4">
              Quotations provided through our website or by our sales team are estimates and subject 
              to change based on final specifications, quantities, and market conditions. A binding 
              agreement is only formed upon execution of a formal purchase order or contract.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">6. Quality Standards</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to delivering products that meet or exceed agreed-upon specifications. 
              Our manufacturing facilities are certified to ISO 9001:2015 standards, and we maintain 
              rigorous quality control processes throughout production.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, Illuminious Inc. shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising out of or 
              related to your use of our services. Our total liability shall not exceed the amount 
              paid by you for the specific services giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">8. Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold harmless Illuminious Inc., its officers, directors, 
              employees, and agents from any claims, damages, losses, or expenses arising from your 
              use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">9. Confidentiality</h2>
            <p className="text-muted-foreground mb-4">
              Both parties agree to maintain the confidentiality of any proprietary or confidential 
              information exchanged during the course of business. This obligation survives the 
              termination of any business relationship.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">10. Force Majeure</h2>
            <p className="text-muted-foreground mb-4">
              Neither party shall be liable for any failure or delay in performance due to 
              circumstances beyond their reasonable control, including but not limited to natural 
              disasters, war, terrorism, labor disputes, government actions, or supply chain disruptions.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the 
              laws of the State of California, United States, without regard to its conflict of law 
              provisions. Any disputes shall be resolved in the courts of Santa Clara County, California.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">12. Modifications</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will 
              be effective immediately upon posting to our website. Your continued use of our 
              services constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">13. Severability</h2>
            <p className="text-muted-foreground mb-4">
              If any provision of these Terms and Conditions is found to be unenforceable or invalid, 
              the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Illuminious Inc.</strong><br />
              Palo Alto, California, USA<br />
              Email: info@illuminious.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
