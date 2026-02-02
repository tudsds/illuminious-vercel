import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  Layers,
  Cog,
  FileCheck,
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
    title: "3D Printing",
    description: "Multiple technologies including SLA, SLS, and FDM for various materials and finishes.",
  },
  {
    icon: Cog,
    title: "CNC Machining",
    description: "Precision CNC machining for metal and plastic parts with tight tolerances.",
  },
  {
    icon: Layers,
    title: "Vacuum Casting",
    description: "Silicone mold casting for small batch production-like prototypes.",
  },
  {
    icon: FileCheck,
    title: "Functional Prototypes",
    description: "Fully functional prototypes with electronics integration for real-world testing.",
  },
];

const specs = [
  { label: "Fastest Turnaround", value: "24-48h" },
  { label: "Standard Turnaround", value: "72 Hours" },
  { label: "Materials", value: "50+ Types" },
  { label: "Tolerance", value: "±0.05mm" },
];

const technologies = [
  { name: "SLA", description: "High-detail resin printing", materials: "Resins, ABS-like" },
  { name: "SLS", description: "Durable nylon parts", materials: "Nylon, TPU" },
  { name: "FDM", description: "Cost-effective prototyping", materials: "PLA, ABS, PETG" },
  { name: "CNC", description: "Metal & plastic machining", materials: "Aluminum, Steel, PC" },
];

const process = [
  {
    step: "01",
    title: "Design Submission",
    location: "🇺🇸 USA",
    description: "Submit your 3D CAD files and specify material, finish, and timeline requirements.",
  },
  {
    step: "02",
    title: "DFM Review",
    location: "🇺🇸 USA",
    description: "Quick review for manufacturability with recommendations for optimization if needed.",
  },
  {
    step: "03",
    title: "Rapid Production",
    location: "🇭🇰 Shenzhen",
    description: "Leveraging Shenzhen's supply chain, we produce prototypes in 24-72 hours.",
  },
  {
    step: "04",
    title: "Finishing & Delivery",
    location: "🇭🇰 Shenzhen",
    description: "Post-processing, finishing, and fast worldwide shipping with tracking.",
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

export default function ServiceRapidPrototyping() {
  return (
    <>
      <SEO
        title="Rapid Prototyping | 72-Hour Prototypes | Illuminious"
        description="Quickly validate your product designs with our rapid prototyping services. 3D printing, CNC machining, and vacuum casting in 24-72 hours."
        keywords="rapid prototyping, 3D printing, CNC machining, prototype manufacturing, product validation, quick turn prototypes"
        url="/services/rapid-prototyping"
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
                <span className="text-2xl">🇺🇸</span>
                <span className="text-2xl">🇭🇰</span>
                <span className="text-sm font-medium text-illuminious-blue">Phase 1 & 2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Rapid Prototyping
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From design files to functional prototype in 72 hours. Leverage Shenzhen's 
                unmatched supply chain speed to validate your designs quickly.
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
                src="/images/service-rapid-prototyping.jpg"
                alt="Rapid Prototyping"
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
              Prototyping Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple technologies to match your specific prototyping needs 
              for form, fit, and functional validation.
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

      {/* Technology Comparison */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Technology Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the right technology based on your prototype requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                  <div className="text-xs text-illuminious-blue font-medium">
                    Materials: {tech.materials}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rapid Prototyping */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Why Rapid Prototyping?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Validate Before Tooling</strong>
                    <p className="text-muted-foreground">Test your design before committing to expensive production tooling.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Faster Iterations</strong>
                    <p className="text-muted-foreground">Quick turnaround enables more design iterations in less time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">User Testing</strong>
                    <p className="text-muted-foreground">Get real user feedback on physical products before mass production.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Seamless Transition</strong>
                    <p className="text-muted-foreground">Validated designs move smoothly into production with DFM insights.</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-illuminious-navy rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Supported Materials
                </h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-illuminious-sky">Plastics:</strong>
                    <p className="text-sm text-white/80">ABS, PC, Nylon, PLA, PETG, TPU, TPE, PP, PE</p>
                  </div>
                  <div>
                    <strong className="text-illuminious-sky">Metals:</strong>
                    <p className="text-sm text-white/80">Aluminum, Steel, Stainless Steel, Brass, Titanium</p>
                  </div>
                  <div>
                    <strong className="text-illuminious-sky">Specialty:</strong>
                    <p className="text-sm text-white/80">Resins, Rubber, Silicone, Carbon Fiber</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The Prototyping Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From CAD file to physical prototype in days, not weeks.
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
              Ready to Prototype?
            </h2>
            <p className="text-lg text-white mb-8">
              Send us your 3D files and get a prototype in 72 hours.
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
