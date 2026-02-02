import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Cog,
  Shield,
  Zap,
  Gauge,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Factory,
    title: "Industrial Control Systems",
    description: "PLCs, HMIs, motor controllers, and automation equipment built to withstand harsh industrial environments.",
  },
  {
    icon: Gauge,
    title: "Sensors & Instrumentation",
    description: "Precision sensors, measurement devices, and monitoring equipment for industrial applications.",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description: "High-power converters, inverters, and power management systems for industrial machinery.",
  },
  {
    icon: Wrench,
    title: "Ruggedized Equipment",
    description: "Products designed to operate in extreme temperatures, vibration, dust, and moisture conditions.",
  },
];

const industries = [
  "Manufacturing Automation",
  "Energy & Utilities",
  "Oil & Gas",
  "Mining & Heavy Equipment",
  "Transportation & Logistics",
  "Building Automation",
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "IPC-A-610", description: "Electronics Assembly" },
  { name: "UL Listed", description: "Safety Certification" },
  { name: "CE Marking", description: "European Compliance" },
];

const specs = [
  { label: "Operating Temp", value: "-40°C to +85°C" },
  { label: "Vibration Rating", value: "MIL-STD-810" },
  { label: "IP Rating", value: "Up to IP67" },
  { label: "Product Lifecycle", value: "10+ Years" },
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

export default function IndustryIndustrial() {
  return (
    <>
      <SEO
        title="Industrial Electronics Manufacturing | Ruggedized Equipment | Illuminious"
        description="Industrial-grade electronics manufacturing for automation, control systems, and harsh environment applications. ISO 9001 certified with extended lifecycle support."
        keywords="industrial electronics, automation, control systems, ruggedized electronics, industrial IoT, manufacturing"
        url="/industries/industrial"
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
                <Factory className="w-6 h-6 text-illuminious-blue" />
                <span className="text-sm font-medium text-illuminious-blue">Industrial Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Industrial Electronics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Built for the harshest environments. Our industrial electronics manufacturing 
                delivers the reliability, durability, and long lifecycle support that 
                industrial applications demand.
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
                src="/images/industry-industrial.jpg"
                alt="Industrial Electronics"
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
              Industrial Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized manufacturing for demanding industrial applications.
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

      {/* Industries Served */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our industrial electronics solutions power critical infrastructure and 
                manufacturing operations across diverse sectors.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/factory-tour-hero.jpg"
                alt="Industrial Applications"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-muted-foreground">
              Our facilities and processes meet the highest industry standards.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light text-center">
                  <Shield className="w-8 h-8 text-illuminious-blue mx-auto mb-3" />
                  <h3 className="font-bold text-illuminious-navy mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Long Lifecycle Support */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <img
                src="/images/service-quality-testing.jpg"
                alt="Lifecycle Support"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Extended Lifecycle Support
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Industrial products often require 10+ year lifecycles. We provide:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Component Lifecycle Management</strong>
                    <p className="text-muted-foreground">Proactive monitoring of component availability and end-of-life notifications.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Last-Time Buy Support</strong>
                    <p className="text-muted-foreground">Strategic inventory planning for obsolete components.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-illuminious-navy">Redesign Services</strong>
                    <p className="text-muted-foreground">Engineering support for component substitutions and design updates.</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Industrial-Grade Products?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss your industrial electronics requirements and how we can help.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Contact Our Team
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
