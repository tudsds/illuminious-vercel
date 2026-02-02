import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  FileCheck,
  Cog,
  Target,
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
    title: "72-Hour Rapid Prototyping",
    description: "From design files to functional prototype in just 3 days. Leverage Shenzhen's unmatched supply chain speed.",
  },
  {
    icon: FileCheck,
    title: "DFM Review & Optimization",
    description: "Our US engineering team reviews your design before production, identifying risks and optimizing for manufacturability.",
  },
  {
    icon: Cog,
    title: "Engineering Validation",
    description: "Comprehensive EVT/DVT/PVT processes to ensure your product meets all specifications and quality standards.",
  },
  {
    icon: Target,
    title: "Small-Batch Pilot Runs",
    description: "Test your production process with pilot runs of 50-500 units before committing to mass production.",
  },
];

const process = [
  {
    step: "01",
    title: "Design Review",
    location: "🇺🇸 USA",
    description: "Our US engineering team reviews your design files, identifies potential issues, and provides DFM recommendations.",
  },
  {
    step: "02",
    title: "Rapid Prototyping",
    location: "🇭🇰 Shenzhen",
    description: "Leveraging Shenzhen's supply chain, we produce functional prototypes in 72 hours for quick iteration.",
  },
  {
    step: "03",
    title: "Engineering Validation",
    location: "🇭🇰 Shenzhen",
    description: "Comprehensive testing including EVT, DVT, and PVT to validate design and manufacturing processes.",
  },
  {
    step: "04",
    title: "Golden Sample",
    location: "🇭🇰 Shenzhen",
    description: "Produce the final approved sample that serves as the reference for mass production.",
  },
];

const specs = [
  { label: "Prototype Turnaround", value: "72 Hours" },
  { label: "DFM Review", value: "24-48 Hours" },
  { label: "Pilot Run Capacity", value: "50-500 Units" },
  { label: "Engineering Support", value: "US + Shenzhen" },
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

export default function ServiceNPI() {
  return (
    <>
      <SEO
        title="NPI & Engineering Services | Rapid Prototyping | DFM | Illuminious"
        description="Accelerate your product development with our NPI services. 72-hour rapid prototyping, DFM optimization, and engineering validation from concept to Golden Sample."
        keywords="NPI services, rapid prototyping, DFM, design for manufacturing, engineering validation, EVT DVT PVT"
        url="/services/npi-engineering"
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
                NPI & Engineering
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From concept to "Golden Sample" in days, not weeks. Our hybrid US-Shenzhen 
                engineering model delivers unmatched speed without sacrificing quality or IP protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Start Your Project
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
                src="/images/service-prototyping.jpg"
                alt="NPI & Engineering"
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
              Engineering Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Our NPI services combine US engineering expertise with Shenzhen's 
              unmatched supply chain speed.
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

      {/* Process */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The NPI Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined workflow that takes you from design files to production-ready samples.
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

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Why Choose Our NPI Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">IP Protection First</strong>
                    <p className="text-muted-foreground">All contracts signed in the US, protected by US law. Your designs never leave our secure systems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Shenzhen Speed</strong>
                    <p className="text-muted-foreground">Access to the world's fastest supply chain for components and manufacturing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Seamless Scale-Up</strong>
                    <p className="text-muted-foreground">Once validated, your product can seamlessly transition to our Southeast Asian facilities for mass production.</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/service-dfm-design.jpg"
                alt="Engineering Excellence"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Product Development?
            </h2>
            <p className="text-lg text-white mb-8">
              Get a free DFM review and see how fast we can turn your concept into reality.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Request a DFM Review
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
