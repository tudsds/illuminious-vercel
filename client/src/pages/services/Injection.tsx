import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  CheckCircle,
  Layers,
  Cog,
  Droplets,
  Shield,
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
    title: "Mold Design & DFM",
    description: "Expert mold design with DFM analysis to optimize for manufacturability and cost.",
  },
  {
    icon: Wrench,
    title: "Rapid Tooling",
    description: "Quick-turn prototype molds for design validation before production tooling.",
  },
  {
    icon: Layers,
    title: "Multi-Cavity Molds",
    description: "High-volume production molds with multiple cavities for maximum efficiency.",
  },
  {
    icon: Droplets,
    title: "Insert & Overmolding",
    description: "Complex molding techniques including insert molding and multi-material overmolding.",
  },
];

const specs = [
  { label: "Mold Lead Time", value: "2-4 Weeks" },
  { label: "Tolerance", value: "±0.05mm" },
  { label: "Max Part Size", value: "800mm" },
  { label: "Materials", value: "50+ Types" },
];

const materials = [
  "ABS", "PC", "PC/ABS", "PA (Nylon)", "POM", "PP", "PE", "TPU", "TPE", "PMMA", "PBT", "LCP"
];

const finishes = [
  "High Gloss Polish (SPI A1-A3)",
  "Semi-Gloss (SPI B1-B3)",
  "Matte Finish (SPI C1-C3)",
  "Textured (VDI/MT Standards)",
  "Soft Touch Coating",
  "UV Coating",
  "Painting & Printing",
  "Laser Etching",
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

export default function ServiceInjection() {
  return (
    <>
      <SEO
        title="Plastic Injection Molding & Tooling | Mold Design | Illuminious"
        description="End-to-end injection molding services from mold design to mass production. Rapid tooling, multi-cavity molds, insert molding, and 50+ material options."
        keywords="injection molding, plastic molding, mold design, tooling, rapid tooling, overmolding"
        url="/services/injection-molding"
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
                <span className="text-2xl">🇭🇰</span>
                <span className="text-2xl">🇮🇩</span>
                <span className="text-sm font-medium text-illuminious-blue">Phase 2 & 3</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Plastic Injection & Tooling
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From mold design to mass production. Prototype tooling in Asia Pacific, 
                production tooling in Indonesia for optimal cost and quality balance.
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
                src="/images/service-molding.png"
                alt="Injection Molding"
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
                  <div className="text-sm text-illuminious-light/70">{spec.label}</div>
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
              Tooling Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive mold design and injection molding services for any complexity level.
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

      {/* Materials & Finishes */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-illuminious-navy mb-6">
                Supported Materials
              </h2>
              <div className="flex flex-wrap gap-2">
                {materials.map((material) => (
                  <span
                    key={material}
                    className="px-4 py-2 rounded-full bg-white border border-illuminious-light text-sm font-medium"
                  >
                    {material}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Plus many more engineering plastics and specialty materials. Contact us for specific requirements.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold text-illuminious-navy mb-6">
                Surface Finishes
              </h2>
              <ul className="space-y-3">
                {finishes.map((finish) => (
                  <li key={finish} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span>{finish}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Two-Stage Approach */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Two-Stage Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Optimize for speed during development, then optimize for cost during production.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🇭🇰</span>
                  <div>
                    <h3 className="text-xl font-bold text-illuminious-navy">Stage 1: Asia Pacific</h3>
                    <p className="text-sm text-illuminious-blue">Rapid Tooling & Prototyping</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Prototype molds in 2 weeks
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Quick design iterations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Small batch production (100-1000 pcs)
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Design validation before production tooling
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🇮🇩</span>
                  <div>
                    <h3 className="text-xl font-bold text-illuminious-navy">Stage 2: Indonesia</h3>
                    <p className="text-sm text-illuminious-navy">Production Tooling & Mass Production</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                    Multi-cavity production molds
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                    High-volume production (10K+ pcs/month)
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                    Lower tooling and part costs
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                    Optimized landed costs
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
              Ready to Start Your Tooling Project?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Send us your 3D files for a free DFM review and tooling quote.
            </p>
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
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
