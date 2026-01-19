import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  Globe,
  Package,
  Lightbulb,
  Truck,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Lightbulb,
    title: "DFM",
    description: "Design for Manufacturing optimization to reduce costs and improve quality",
    href: "/services/dfm",
  },
  {
    icon: Factory,
    title: "OEM",
    description: "Original Equipment Manufacturing with your brand, our expertise",
    href: "/services/oem",
  },
  {
    icon: Cpu,
    title: "ODM",
    description: "Original Design Manufacturing from concept to finished product",
    href: "/services/odm",
  },
  {
    icon: Package,
    title: "EMS",
    description: "Electronics Manufacturing Services for complex assemblies",
    href: "/services/ems",
  },
  {
    icon: Globe,
    title: "Prototyping",
    description: "Rapid prototyping to validate your designs quickly",
    href: "/services/prototyping",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Global logistics and overseas warehouse solutions",
    href: "/services/logistics",
  },
];

const stats = [
  { value: "500+", label: "Products Delivered" },
  { value: "50+", label: "Global Partners" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const features = [
  "End-to-end supply chain management",
  "Tier-1 manufacturing facilities",
  "US-based customer support",
  "Competitive pricing with no hidden fees",
  "Rapid turnaround times",
  "Quality assurance at every step",
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
        title="Global Electronics Supply Chain Solutions"
        description="Illuminious is your trusted partner for EMS, OEM, ODM, and DFM services. We bridge the gap between innovation and manufacturing with facilities in USA, Southeast Asia, and China."
        keywords="electronics manufacturing, OEM, ODM, EMS, DFM, supply chain, prototyping, AI hardware, electronics assembly"
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

        {/* Animated particles/grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(97, 145, 211, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-navy/80 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-illuminious-sky/30">
                <Globe className="w-4 h-4" />
                Global Electronics Supply Chain Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
            >
              From Concept to{" "}
              <span className="text-illuminious-sky drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Global Delivery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              We bridge the gap between your innovative ideas and world-class
              manufacturing. With facilities across the USA, Southeast Asia, and
              China, we deliver excellence at every step of your product journey.
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
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/services">Explore Services</Link>
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

      {/* Stats Section */}
      <section className="py-16 bg-illuminious-light/30">
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

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial design optimization to final delivery, we provide
              end-to-end manufacturing services tailored to your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <div className="group p-6 rounded-2xl bg-white border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4 group-hover:bg-illuminious-blue group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-illuminious-blue group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-illuminious-navy mb-2 group-hover:text-illuminious-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-illuminious-blue">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 md:py-32 bg-illuminious-navy overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Manufacturing Excellence Across Continents
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Our strategic locations in Palo Alto (HQ), Hong Kong (R&D), Indonesia (Production), and China (Production) give you access to world-class manufacturing capabilities with optimized logistics and competitive pricing.
              </p>
              <ul className="space-y-4 mb-8">
                {features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-illuminious-sky flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/about">
                  Learn About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="/images/about-global-network.png"
                  alt="Global Supply Chain Network"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-illuminious-light flex items-center justify-center">
                      <Truck className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Average Delivery</div>
                      <div className="text-xl font-bold text-illuminious-navy">14 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI Hardware Focus */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/service-ai-glasses.png"
                  alt="AI Smart Glasses"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="/images/service-ai-companion.png"
                  alt="AI Companion Robot"
                  className="rounded-xl shadow-lg mt-8"
                />
                <img
                  src="/images/service-ai-accessories.png"
                  alt="AI Accessories"
                  className="rounded-xl shadow-lg col-span-2"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                AI Hardware Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Pioneering the Future of AI Hardware
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From AI-powered smart glasses to companion robots and wearable
                devices, we specialize in bringing cutting-edge AI hardware
                products to life. Our expertise spans the entire product
                lifecycle.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  AI Smart Glasses & Wearables
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  Companion Robots & IoT Devices
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  Voice Recorders & AI Accessories
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  Consumer Electronics & Smart Home
                </li>
              </ul>
              <Button
                asChild
                className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Are You a Hardware Startup?
            </h2>
            <p className="text-xl text-illuminious-light/90 mb-8">
              Join our exclusive Startups Program and get access to preferential
              pricing, dedicated support, and a fast-track path from prototype to
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

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-illuminious-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Why Partner With Illuminious?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine Silicon Valley innovation with global manufacturing
              excellence to deliver results that exceed expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-illuminious-light flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your manufacturing needs. We
              provide free consultations and detailed quotes within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
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
                className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-8"
              >
                <a href="mailto:info@illuminious.com">Email Us Directly</a>
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
