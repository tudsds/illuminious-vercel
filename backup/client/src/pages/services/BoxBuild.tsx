import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  CheckCircle,
  Cog,
  Cable,
  Box,
  TestTube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Cog,
    title: "Sub-Assembly Integration",
    description: "Combine multiple PCBAs, mechanical components, and modules into integrated sub-assemblies.",
  },
  {
    icon: Cable,
    title: "Cable & Wire Harness",
    description: "Custom cable assembly and wire harness manufacturing with full testing.",
  },
  {
    icon: Box,
    title: "Enclosure Assembly",
    description: "Complete enclosure integration including thermal management, EMI shielding, and labeling.",
  },
  {
    icon: TestTube,
    title: "Functional Testing",
    description: "Comprehensive end-of-line testing to ensure every unit meets specifications.",
  },
];

const specs = [
  { label: "Labor Cost Savings", value: "40-60%" },
  { label: "Tariff Optimization", value: "Minimal" },
  { label: "Production Capacity", value: "10K+/Month" },
  { label: "Quality Standard", value: "ISO 9001" },
];

const services = [
  "Electro-mechanical assembly",
  "Final product packaging",
  "Custom labeling and branding",
  "Firmware programming",
  "Burn-in testing",
  "Serialization and traceability",
  "Retail-ready packaging",
  "Direct ship to distribution",
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

export default function ServiceBoxBuild() {
  return (
    <>
      <SEO
        title="Box Build & System Integration | Final Assembly | Illuminious"
        description="Complete box build and system integration services in Indonesia. Optimized tariff structure with minimal duties, 40-60% labor cost savings. From sub-assembly to retail-ready products."
        keywords="box build, system integration, final assembly, electronics manufacturing, Indonesia manufacturing"
        url="/services/box-build"
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
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🇮🇩</span>
                <span className="text-sm font-medium text-illuminious-blue">Phase 3 - Indonesia</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Box Build & System Integration
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete product assembly in our Indonesia facility. Leverage optimized tariff structure with minimal duties 
                and significant labor cost savings without compromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Get a Quote
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
                src="/images/service-assembly.jpg"
                alt="Box Build Assembly"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <AnimatedSection key={spec.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{spec.value}</div>
                  <div className="text-sm text-white">{spec.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Assembly Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              From sub-assemblies to retail-ready products, we handle the complete 
              integration process.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Service List */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Complete Box Build Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our Indonesia facility offers comprehensive assembly services with 
                the cost advantages of Southeast Asian manufacturing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light">
                <h3 className="text-xl font-bold text-illuminious-navy mb-4">
                  The Indonesia Advantage
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Tariff Optimization</strong>
                      <p className="text-sm text-muted-foreground">Strategic manufacturing location minimizes tariff exposure and optimizes landed costs for US market entry.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">40-60% Labor Savings</strong>
                      <p className="text-sm text-muted-foreground">Competitive labor costs for high-volume assembly operations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Copy Exact Process</strong>
                      <p className="text-sm text-muted-foreground">Validated processes transferred from Shenzhen ensure consistent quality.</p>
                    </div>
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
              Ready to Scale Your Production?
            </h2>
            <p className="text-lg text-white mb-8">
              Let us show you how our Indonesia facility can reduce your costs while maintaining quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Book a Factory Tour</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
