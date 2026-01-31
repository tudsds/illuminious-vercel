import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  CheckCircle,
  Layers,
  Microscope,
  Zap,
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
    icon: Cpu,
    title: "Advanced SMT Assembly",
    description: "High-speed, high-precision surface mount technology with support for 0201 components and fine-pitch devices.",
  },
  {
    icon: Layers,
    title: "Multi-Layer PCB",
    description: "Complex multi-layer board assembly up to 32 layers with blind and buried vias.",
  },
  {
    icon: Microscope,
    title: "AOI & X-Ray Inspection",
    description: "Automated optical inspection and X-ray for BGA and hidden solder joint verification.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "IPC Class 2 and Class 3 standards with comprehensive testing and traceability.",
  },
];

const specs = [
  { label: "Component Size", value: "0201+" },
  { label: "BGA Pitch", value: "0.3mm" },
  { label: "PCB Layers", value: "Up to 32" },
  { label: "Daily Capacity", value: "50K+ Placements" },
];

const techSpecs = [
  { category: "SMT Capabilities", items: ["0201 Component Placement", "01005 Component Placement", "BGA/CSP/QFN Assembly", "Fine Pitch (0.3mm) Assembly", "PoP (Package on Package)"] },
  { category: "PCB Types", items: ["Rigid PCB (1-32 Layers)", "Flex PCB", "Rigid-Flex PCB", "HDI PCB", "Metal Core PCB"] },
  { category: "Inspection & Testing", items: ["3D AOI Inspection", "X-Ray Inspection", "ICT (In-Circuit Test)", "Flying Probe Test", "Functional Testing"] },
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

export default function ServicePCBA() {
  return (
    <>
      <SEO
        title="PCB Assembly Services | SMT Assembly | PCBA | Illuminious"
        description="High-precision PCB assembly services with advanced SMT capabilities. 0201 components, BGA, fine pitch, multi-layer boards with AOI and X-ray inspection."
        keywords="PCB assembly, PCBA, SMT assembly, surface mount technology, BGA assembly, electronics manufacturing"
        url="/services/pcb-assembly"
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
                <span className="text-sm font-medium text-illuminious-blue">Phase 2 - Asia Pacific</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                PCB Assembly (PCBA)
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                High-precision SMT assembly with advanced capabilities. From prototype 
                to production, we deliver quality boards with industry-leading turnaround times.
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
                src="/images/service-pcb.png"
                alt="PCB Assembly"
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
              Assembly Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art SMT lines with the precision and capacity to handle 
              your most demanding projects.
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

      {/* Technical Specifications */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed capabilities for engineers and procurement teams.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {techSpecs.map((spec, index) => (
              <AnimatedSection key={spec.category} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                  <h3 className="text-lg font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light">
                    {spec.category}
                  </h3>
                  <ul className="space-y-3">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The PCBA Workflow
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Design Review", desc: "Gerber file review and DFM analysis" },
              { step: "02", title: "Component Sourcing", desc: "BOM verification and procurement" },
              { step: "03", title: "Assembly", desc: "SMT/THT assembly and soldering" },
              { step: "04", title: "Inspection & Test", desc: "AOI, X-ray, and functional testing" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white border border-illuminious-light">
                  <div className="text-4xl font-bold text-illuminious-light mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Ready to Start Your PCBA Project?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Send us your Gerber files and BOM for a quick quote.
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
