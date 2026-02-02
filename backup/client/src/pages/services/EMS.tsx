import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  CheckCircle,
  Zap,
  Microscope,
  Layers,
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
    icon: Zap,
    title: "SMT Assembly",
    description: "High-speed surface mount technology assembly with advanced pick-and-place equipment supporting 0201 components.",
  },
  {
    icon: Layers,
    title: "Through-Hole Assembly",
    description: "Precision through-hole component insertion and wave soldering capabilities for mixed technology boards.",
  },
  {
    icon: Microscope,
    title: "Testing & Inspection",
    description: "Comprehensive testing including AOI, X-ray, ICT, flying probe, and functional testing.",
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO 9001 and IPC certified processes with full traceability and rigorous quality control.",
  },
];

const specs = [
  { label: "Component Size", value: "0201+" },
  { label: "BGA Pitch", value: "0.3mm" },
  { label: "Daily Capacity", value: "50K+" },
  { label: "Certification", value: "IPC/ISO" },
];

const services = [
  "Surface mount assembly",
  "Through-hole assembly",
  "Mixed technology boards",
  "BGA and fine pitch",
  "Conformal coating",
  "AOI & X-ray inspection",
  "Functional testing",
  "Box build integration",
];

const process = [
  {
    step: "01",
    title: "Design Review",
    location: "🇺🇸 USA",
    description: "Review PCB design files, BOM, and assembly requirements for manufacturability with DFM feedback.",
  },
  {
    step: "02",
    title: "Component Sourcing",
    location: "🇭🇰 Shenzhen",
    description: "Procure all components from authorized distributors with full traceability and quality verification.",
  },
  {
    step: "03",
    title: "PCB Assembly",
    location: "🇭🇰 Shenzhen",
    description: "Precise PCB assembly using automated SMT and through-hole processes with real-time monitoring.",
  },
  {
    step: "04",
    title: "Testing & Integration",
    location: "🇮🇩 Indonesia",
    description: "Rigorous testing, inspection, and box build integration for finished product delivery.",
  },
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

export default function ServiceEMS() {
  return (
    <>
      <SEO
        title="EMS | Electronics Manufacturing Services | Illuminious"
        description="From PCB assembly to final product integration, our EMS capabilities deliver high-quality electronics manufacturing with precision and reliability."
        keywords="EMS, electronics manufacturing services, PCB assembly, SMT assembly, electronics assembly, box build"
        url="/services/ems"
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
                Electronics Manufacturing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From PCB assembly to final product integration, our EMS capabilities deliver 
                high-quality electronics manufacturing with precision and reliability.
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
                src="/images/service-ems.jpg"
                alt="Electronics Manufacturing Services"
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
              EMS Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art electronics manufacturing with comprehensive testing 
              and quality assurance.
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

      {/* Technical Specs */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed specifications for engineers and procurement teams.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                <h3 className="text-lg font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light">
                  SMT Capabilities
                </h3>
                <ul className="space-y-3">
                  {["0201 Component Placement", "01005 Component Placement", "BGA/CSP/QFN Assembly", "Fine Pitch (0.3mm) Assembly", "PoP (Package on Package)"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                <h3 className="text-lg font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light">
                  Testing Options
                </h3>
                <ul className="space-y-3">
                  {["3D AOI Inspection", "X-Ray Inspection", "ICT (In-Circuit Test)", "Flying Probe Test", "Functional Testing"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                <h3 className="text-lg font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light">
                  Additional Services
                </h3>
                <ul className="space-y-3">
                  {["Conformal Coating", "Potting & Encapsulation", "Cable Assembly", "Box Build Integration", "Firmware Programming"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The EMS Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From design files to finished electronics across our global facilities.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white border border-illuminious-light">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-illuminious-blue flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-illuminious-navy">{item.title}</h3>
                      <span className="text-sm px-2 py-1 rounded-full bg-illuminious-light text-illuminious-navy">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Production?
            </h2>
            <p className="text-lg text-white mb-8">
              Send us your Gerber files and BOM for a quick EMS quote.
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
