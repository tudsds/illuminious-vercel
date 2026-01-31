import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  CheckCircle,
  Shield,
  FileCheck,
  Thermometer,
  Vibrate,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Shield,
    title: "IATF 16949 Ready",
    description: "Quality management systems designed to meet automotive industry requirements.",
  },
  {
    icon: FileCheck,
    title: "PPAP Documentation",
    description: "Complete Production Part Approval Process documentation support.",
  },
  {
    icon: Thermometer,
    title: "Extended Temperature",
    description: "Products tested for -40°C to +125°C automotive temperature ranges.",
  },
  {
    icon: Vibrate,
    title: "Vibration Testing",
    description: "Comprehensive vibration and shock testing per automotive standards.",
  },
];

const productTypes = [
  "Infotainment Systems",
  "ADAS Sensors",
  "Body Control Modules",
  "Lighting Electronics",
  "EV Charging Controllers",
  "Battery Management Systems",
  "Instrument Clusters",
  "Telematics Units",
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function IndustryAutomotive() {
  return (
    <>
      <SEO
        title="Automotive Electronics Manufacturing | IATF 16949 | PPAP | Illuminious"
        description="Automotive-grade electronics manufacturing with IATF 16949 quality systems. PPAP documentation, extended temperature testing, and supply chain diversification."
        keywords="automotive electronics, IATF 16949, PPAP, automotive manufacturing, ADAS, EV electronics"
        url="/industries/automotive"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Car className="w-4 h-4" />
                Automotive
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Automotive Electronics Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                IATF 16949 quality systems for the demanding requirements of automotive 
                electronics. From infotainment to ADAS, we deliver automotive-grade quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/industry-automotive.png"
                alt="Automotive Electronics"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Automotive Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built capabilities for automotive industry requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Automotive Product Types
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience across the full range of automotive electronics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {productTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light">
                <h3 className="text-xl font-bold text-illuminious-navy mb-4">
                  Supply Chain Diversification
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our Indonesia facility provides automotive suppliers with 
                  diversified production options while maintaining quality standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Multi-region production capability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Optimized landed costs for US market</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>US warehouse for JIT delivery</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Automotive Project?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Our team understands automotive requirements. Let's talk.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
