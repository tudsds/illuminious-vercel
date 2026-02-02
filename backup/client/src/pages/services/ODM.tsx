import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Palette,
  Cpu,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Product Development",
    description: "Full product development from initial concept through engineering, prototyping, and production.",
  },
  {
    icon: Palette,
    title: "Industrial Design",
    description: "Create compelling product aesthetics that resonate with your target market and stand out on shelves.",
  },
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description: "Experienced engineers handle mechanical, electrical, and firmware development under one roof.",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description: "Robust intellectual property protection with US contracts and secure development processes.",
  },
];

const specs = [
  { label: "Development Time", value: "3-12 Months" },
  { label: "Engineering Team", value: "US + Asia" },
  { label: "Prototypes", value: "72 Hours" },
  { label: "IP Ownership", value: "Yours" },
];

const services = [
  "Concept development",
  "Industrial design",
  "Mechanical engineering",
  "Electrical engineering",
  "Firmware development",
  "Rapid prototyping",
  "Design for manufacturing",
  "Turnkey production",
];

const process = [
  {
    step: "01",
    title: "Concept Development",
    location: "🇺🇸 USA",
    description: "Define product requirements, target market, and key features together with our US-based team.",
  },
  {
    step: "02",
    title: "Design & Engineering",
    location: "🇺🇸 USA + 🇭🇰 Shenzhen",
    description: "Our team creates industrial design, mechanical, and electrical engineering with DFM optimization.",
  },
  {
    step: "03",
    title: "Prototyping",
    location: "🇭🇰 Shenzhen",
    description: "Build and test functional prototypes in 72 hours to validate design and performance.",
  },
  {
    step: "04",
    title: "Production & Delivery",
    location: "🇮🇩 Indonesia",
    description: "Apply your branding and manufacture at scale in our Indonesia facility for optimal cost.",
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

export default function ServiceODM() {
  return (
    <>
      <SEO
        title="ODM Manufacturing | Original Design Manufacturing | Illuminious"
        description="From concept to completion. Let our experienced design and engineering team develop your product from concept to finished goods, ready to sell under your brand."
        keywords="ODM manufacturing, original design manufacturing, product development, turnkey manufacturing, white label products"
        url="/services/odm"
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
                ODM Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From concept to completion. Let our experienced design and engineering team 
                develop your product from idea to finished goods, ready to sell under your brand.
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
                src="/images/service-odm.jpg"
                alt="ODM Manufacturing"
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
              ODM Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end product development with design, engineering, and manufacturing 
              expertise under one roof.
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
                Complete ODM Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From initial concept to market-ready product, we handle every step 
                of the development process.
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
                  Why Choose Our ODM Services?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Faster Time to Market</strong>
                      <p className="text-sm text-muted-foreground">Reduce development time with our experienced team and streamlined process.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">IP Ownership</strong>
                      <p className="text-sm text-muted-foreground">Full IP transfer to you. All designs become your exclusive property.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Single Point of Contact</strong>
                      <p className="text-sm text-muted-foreground">One team handles design, engineering, and manufacturing seamlessly.</p>
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
              The ODM Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to market in four streamlined phases.
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
              Have a Product Idea?
            </h2>
            <p className="text-lg text-white mb-8">
              Let us help you turn your concept into a market-ready product.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Schedule a Consultation
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
