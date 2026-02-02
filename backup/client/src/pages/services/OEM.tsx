import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  CheckCircle,
  Shield,
  Globe,
  Cog,
  Award,
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
    title: "Precision Manufacturing",
    description: "State-of-the-art equipment and processes ensure your products are manufactured to exact specifications with consistent quality.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage of production, with ISO 9001 and IPC certified processes.",
  },
  {
    icon: Globe,
    title: "Scalable Production",
    description: "Flexible capacity to handle orders from small batches to high-volume production runs across our global facilities.",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description: "All contracts signed in the US, protected by US law. Your designs never leave our secure systems.",
  },
];

const specs = [
  { label: "Production Capacity", value: "10K+/Month" },
  { label: "Quality Standard", value: "ISO 9001" },
  { label: "Facilities", value: "USA + Asia" },
  { label: "MOQ", value: "Flexible" },
];

const services = [
  "Custom product manufacturing",
  "Brand packaging solutions",
  "Supply chain coordination",
  "Regulatory compliance support",
  "Component sourcing",
  "Quality control & testing",
  "Flexible production volumes",
  "Dedicated project management",
];

const process = [
  {
    step: "01",
    title: "Specification Review",
    location: "🇺🇸 USA",
    description: "We review your product specifications, drawings, and requirements in detail to ensure complete understanding.",
  },
  {
    step: "02",
    title: "DFM & Quotation",
    location: "🇺🇸 USA",
    description: "Our engineering team provides DFM feedback and detailed pricing with production timeline.",
  },
  {
    step: "03",
    title: "Sample Production",
    location: "🇭🇰 Shenzhen",
    description: "Produce initial samples for your approval before mass production begins.",
  },
  {
    step: "04",
    title: "Mass Production",
    location: "🇮🇩 Indonesia",
    description: "Full-scale production with continuous quality monitoring and reporting at our Indonesia facility.",
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

export default function ServiceOEM() {
  return (
    <>
      <SEO
        title="OEM Manufacturing | Original Equipment Manufacturing | Illuminious"
        description="Your design, our production. Leverage our world-class manufacturing facilities to produce your products exactly to your specifications, under your brand name."
        keywords="OEM manufacturing, original equipment manufacturing, contract manufacturing, private label manufacturing"
        url="/services/oem"
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
                <span className="text-2xl">🇮🇩</span>
                <span className="text-sm font-medium text-illuminious-blue">All Phases</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                OEM Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your design, our production. Leverage our world-class manufacturing facilities 
                to produce your products exactly to your specifications, under your brand name.
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
                src="/images/about-factory-equipment.jpg"
                alt="OEM Manufacturing"
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
              OEM Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Focus on your core business while we handle manufacturing with 
              precision, quality, and scalability.
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
                Complete OEM Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From specification review to mass production, we provide end-to-end 
                manufacturing services tailored to your brand requirements.
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
                  Why Choose Our OEM Services?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Maintain Control</strong>
                      <p className="text-sm text-muted-foreground">Keep full control over your product design and brand identity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Access Tier-1 Facilities</strong>
                      <p className="text-sm text-muted-foreground">Manufacture at world-class facilities without capital investment.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Flexible Volumes</strong>
                      <p className="text-sm text-muted-foreground">Scale production up or down based on market demand.</p>
                    </div>
                  </li>
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
              The OEM Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined workflow from specification to delivery.
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
              Ready to Manufacture Your Product?
            </h2>
            <p className="text-lg text-white mb-8">
              Let us help you bring your design to life with world-class manufacturing capabilities.
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
