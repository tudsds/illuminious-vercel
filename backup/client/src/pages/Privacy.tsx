import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Illuminious"
        description="Illuminious privacy policy. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
        url="/privacy"
      />
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Illuminious Inc. ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal data. This privacy policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and job title when you submit forms or contact us.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze usage patterns and improve our website</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., hosting, analytics).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">7. Cookies Policy</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies to enhance your experience on our website. You can control cookies through 
              your browser settings. Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly 
              collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-illuminious-navy mt-8 mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy, please contact us at:
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
