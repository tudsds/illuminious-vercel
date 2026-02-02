import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thank You | Illuminious",
  description: "Thank you for contacting Illuminious. We'll be in touch soon.",
};

export default function ThankYou() {
  return (
    <>
      <Header />
      
      <section className="min-h-screen flex items-center justify-center bg-sky-50 pt-20">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;ve received your inquiry and will get back to you within 24 hours.
              Our team is excited to learn more about your project!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-900 rounded-full">
                <Link href="/">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
