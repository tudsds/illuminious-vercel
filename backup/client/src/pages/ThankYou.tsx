import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  // GTM event tracking
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_submission_success",
        page: "thank_you",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-illuminious-light to-white">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-2xl text-center">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Ripple effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-illuminious-sky/30 rounded-full"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-illuminious-sky/20 rounded-full"
              />
              <div className="relative w-32 h-32 bg-gradient-to-br from-illuminious-blue to-illuminious-sky rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3,
                  }}
                >
                  <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-illuminious-blue mb-2">
              Your message has been received.
            </p>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We appreciate you reaching out to us. Our team will review your inquiry 
              and get back to you within 24-48 business hours.
            </p>
          </motion.div>

          {/* What's Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-lg font-semibold text-illuminious-navy mb-4">
              What happens next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-illuminious-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-illuminious-blue font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-illuminious-navy">Review</h3>
                  <p className="text-sm text-gray-600">Our team reviews your inquiry</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-illuminious-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-illuminious-blue font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-illuminious-navy">Connect</h3>
                  <p className="text-sm text-gray-600">A specialist will reach out</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-illuminious-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-illuminious-blue font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-illuminious-navy">Solution</h3>
                  <p className="text-sm text-gray-600">We'll discuss your needs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-illuminious-blue hover:bg-illuminious-navy"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Additional Contact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-sm text-gray-500"
          >
            Need immediate assistance?{" "}
            <a
              href="mailto:info@illuminious.com"
              className="text-illuminious-blue hover:underline inline-flex items-center gap-1"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                  (window as any).dataLayer.push({
                    event: "email_click",
                    email: "info@illuminious.com",
                    page: "thank_you",
                  });
                }
              }}
            >
              <Mail className="w-3 h-3" />
              info@illuminious.com
            </a>
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
