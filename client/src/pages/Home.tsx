import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  Globe,
  Lightbulb,
  Rocket,
  Scale,
  Shield,
  CheckCircle,
  ChevronRight,
  Zap,
  Building2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "500+", label: "Products Delivered" },
  { value: "50+", label: "Global Partners" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const advantages = [
  {
    icon: Shield,
    title: "Risk-Free",
    description: "Contracts signed in the US, protected by US law. Your IP is safe.",
  },
  {
    icon: Scale,
    title: "Cost-Optimized",
    description: "Strategic manufacturing locations for optimized landed costs and supply chain efficiency.",
  },
  {
    icon: Zap,
    title: "Hassle-Free",
    description: "Native English communication with zero time-zone lag.",
  },
];

const locations = [
  {
    flag: "🇺🇸",
    country: "USA",
    city: "Palo Alto, CA",
    role: "Headquarters",
    description: "Legal security, IP protection, and local support. You deal with a US company, governed by US law.",
  },
  {
    flag: "🇭🇰",
    country: "Hong Kong",
    city: "Asia Pacific Hub",
    role: "Engineering Center",
    description: "World-class engineering depth and rapid prototyping capabilities. NPI in days, not weeks.",
  },
  {
    flag: "🇮🇩",
    country: "Indonesia",
    city: "Batam FTZ",
    role: "Production Center",
    description: "Competitive labor costs for high-volume orders. Strategic location for optimized supply chain.",
  },
];

const trustedLogos = [
  { name: "TechCorp", initial: "T" },
  { name: "InnovateLabs", initial: "I" },
  { name: "SmartDevices", initial: "S" },
  { name: "FutureTech", initial: "F" },
  { name: "GlobalIoT", initial: "G" },
  { name: "NextGen", initial: "N" },
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

export default function Home() {
  return (
    <>
      <SEO
        title="US Electronics Manufacturing Company | Global Production Network | Illuminious"
        description="American electronics manufacturing company with global production capabilities. US engineering excellence, rapid prototyping, and scalable mass production. Get a quote today."
        keywords="US electronics manufacturing, American EMS company, global supply chain, NPI services, electronics manufacturing, PCB assembly"
        url="/"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-global-supply-chain.png"
            alt="Global Supply Chain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-illuminious-navy/95 via-illuminious-navy/85 to-illuminious-navy/70" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Animated grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(97, 145, 211, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-navy/80 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-illuminious-sky/30">
                <Globe className="w-4 h-4" />
                The New Standard for Resilient Manufacturing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
            >
              From the First 100 to the{" "}
              <span className="text-illuminious-sky drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Next 1 Million</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 md:mb-4 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              US Engineering. Global Speed. Scalable Production.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Accelerate NPI with world-class engineering. Scale production globally. 
              Managed securely from our Palo Alto headquarters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8"
              >
                <Link href="/contact">
                  Get a Quote
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
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-illuminious-light/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-illuminious-light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Dual Track Selection - The Split */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Stop Choosing Between Cost and Safety
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver the perfect balance. Whether you're an innovator building your first prototype 
              or an enterprise scaling to millions, we have the right solution.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Innovators */}
            <AnimatedSection delay={0.1}>
              <Link href="/services/npi-engineering">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-illuminious-light/50 to-white border-2 border-illuminious-light hover:border-illuminious-blue hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-illuminious-blue/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-illuminious-blue" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-4">
                    For Innovators
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-illuminious-navy mb-3">
                    Need Engineering & NPI?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Leverage our Asia Pacific engineering center for rapid iteration. 
                    From concept to "Golden Sample" in days, not weeks.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      72-Hour Rapid Prototyping
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      DFM Review & Optimization
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      Small-Batch Pilot Runs
                    </li>
                  </ul>
                  <span className="inline-flex items-center text-illuminious-blue font-medium group-hover:gap-2 transition-all">
                    Explore NPI Services
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* For Scaling */}
            <AnimatedSection delay={0.2}>
              <Link href="/services/box-build">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-illuminious-navy/5 to-white border-2 border-illuminious-light hover:border-illuminious-navy hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-illuminious-navy/10 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-illuminious-navy" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-illuminious-navy/10 text-illuminious-navy text-sm font-medium mb-4">
                    For Scaling
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-illuminious-navy mb-3">
                    Need Cost Reduction & Volume?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Utilize our global facilities for cost-optimized mass production 
                    with competitive labor costs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      Optimized Landed Costs
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      High-Volume Assembly
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      Flexible BOM Sourcing
                    </li>
                  </ul>
                  <span className="inline-flex items-center text-illuminious-navy font-medium group-hover:gap-2 transition-all">
                    Explore Mass Production
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Three Advantages */}
      <section className="py-16 bg-illuminious-light/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Manufacturing Network - Map */}
      <section className="py-20 md:py-32 bg-illuminious-navy overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Manufacturing Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Boots on the Ground, Globally
            </h2>
            <p className="text-lg text-illuminious-light/80">
              As a US company, we've built a strategic global network to serve you better. 
              Multiple manufacturing locations mean flexibility, resilience, and optimized costs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <AnimatedSection key={loc.country} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-illuminious-sky/50 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{loc.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{loc.country}</h3>
                      <p className="text-illuminious-sky text-sm">{loc.city}</p>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-illuminious-sky/20 text-illuminious-sky text-sm font-medium mb-3">
                    {loc.role}
                  </div>
                  <p className="text-illuminious-light/70 text-sm leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button
              asChild
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/about">
                Learn About Our Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-illuminious-blue">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Phase Lifecycle */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The Complete Lifecycle: Design, Optimize, Scale
            </h2>
            <p className="text-lg text-muted-foreground">
              Our "Three-Phase Rocket" approach ensures seamless transition from concept to mass production.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-illuminious-blue via-illuminious-sky to-illuminious-navy -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Phase 1 */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-illuminious-blue h-full">
                  <div className="w-12 h-12 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-sm font-medium text-illuminious-blue">USA</span>
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-3">Strategy & DFM</h3>
                  <p className="text-muted-foreground mb-4">
                    Start right. Our US engineering team reviews your design files before they ever leave the country. 
                    We identify risks, optimize for manufacturability, and lock down supply chain strategies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      DFM Review
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      Legal Contracts
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                      IP Protection
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Phase 2 */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-illuminious-sky h-full">
                  <div className="w-12 h-12 rounded-full bg-illuminious-sky text-illuminious-navy flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇭🇰</span>
                    <span className="text-sm font-medium text-illuminious-sky">Asia Pacific</span>
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-3">The NPI Accelerator</h3>
                  <p className="text-muted-foreground mb-4">
                    Iterate fast. Leveraging our Asia Pacific engineering hub, 
                    we turn concepts into "Golden Samples" in days, not weeks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-sky" />
                      72-Hour Rapid Prototyping
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-sky" />
                      Complex Engineering Validation
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-sky" />
                      Small-Batch Pilot Runs
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Phase 3 */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-illuminious-navy h-full">
                  <div className="w-12 h-12 rounded-full bg-illuminious-navy text-white flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇮🇩</span>
                    <span className="text-sm font-medium text-illuminious-navy">Indonesia</span>
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-3">The Scale Engine</h3>
                  <p className="text-muted-foreground mb-4">
                    Grow big. Once the process is perfected, we transfer it via our "Copy Exact" methodology 
                    to our Southeast Asian facilities for mass production.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      Optimized Landed Costs
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      High-Volume Assembly
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-illuminious-navy" />
                      Flexible Global Sourcing
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
            >
              <Link href="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-2">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground">From innovative startups to Fortune 500 companies</p>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedLogos.map((logo, index) => (
              <AnimatedSection key={logo.name} delay={index * 0.05}>
                <div className="w-24 h-24 rounded-xl bg-illuminious-light/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-illuminious-navy/30">{logo.initial}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Startups CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-illuminious-navy via-illuminious-blue to-illuminious-sky relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Rocket className="w-16 h-16 text-illuminious-sky mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Are You a Hardware Startup?
            </h2>
            <p className="text-xl text-illuminious-light/90 mb-8">
              Join our exclusive Startups Program and get access to preferential
              pricing, dedicated engineering support, and a fast-track path from prototype to
              mass production.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-illuminious-navy hover:bg-illuminious-light rounded-full px-10"
            >
              <Link href="/startups">
                Explore Startups Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need rapid prototyping or high-volume production, 
              our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-navy text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/factory-tour">Schedule a DFM Review</Link>
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
