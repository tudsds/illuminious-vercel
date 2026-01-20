import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Award,
  Users,
  Target,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  {
    name: "United States",
    city: "Palo Alto, CA",
    description: "Headquarters",
    flag: "🇺🇸",
  },
  {
    name: "Hong Kong",
    city: "Hong Kong SAR",
    description: "R&D Center",
    flag: "🇭🇰",
  },
  {
    name: "Indonesia",
    city: "Batam Island FTZ",
    description: "Production Center",
    flag: "🇮🇩",
  },
  {
    name: "China",
    city: "Shenzhen, GD",
    description: "Production Center",
    flag: "🇨🇳",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue excellence in every product we manufacture, ensuring the highest quality standards.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients, becoming an extension of their team.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our worldwide network ensures efficient delivery and support wherever you are.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously adopt cutting-edge technologies to stay ahead of industry trends.",
  },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "IATF 16949",
  "UL Certified",
  "CE Marking",
  "FCC Compliant",
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

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Illuminious LLC, a global electronics supply chain provider with manufacturing facilities in USA, Indonesia, and China. We bridge innovation and manufacturing excellence."
        keywords="about illuminious, electronics manufacturing company, supply chain partner, OEM ODM company"
        url="/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-illuminious-navy via-illuminious-blue to-illuminious-sky overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#132843] mb-6">
              Bridging Innovation and Manufacturing
            </h1>
            <p className="text-xl text-illuminious-light/90 leading-relaxed">
              Illuminious LLC is a US-based global electronics supply chain
              provider, dedicated to helping companies bring their innovative
              products to market with speed, quality, and competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                From Silicon Valley Vision to Global Reality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to democratize access to world-class
                  electronics manufacturing, Illuminious emerged from the heart
                  of Silicon Valley's innovation ecosystem. We recognized a
                  critical gap: brilliant hardware startups and established
                  companies alike struggled to navigate the complexities of
                  global supply chains.
                </p>
                <p>
                  Today, we serve as the bridge between innovative ideas and
                  manufacturing excellence. Our strategic partnerships with
                  tier-1 facilities across the USA, Indonesia's Batam Free Trade
                  Zone, and Shenzhen, China enable us to offer unparalleled
                  flexibility, quality, and value.
                </p>
                <p>
                  Whether you're a startup building your first prototype or an
                  enterprise scaling to millions of units, we provide the
                  expertise, infrastructure, and support to make your vision a
                  reality.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img
                src="/images/about-factory-equipment.png"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, from how we work with
              clients to how we approach manufacturing challenges.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 rounded-xl bg-illuminious-light flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-illuminious-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-32 bg-illuminious-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Strategic Locations Worldwide
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Our carefully selected locations provide optimal coverage for
                manufacturing, logistics, and customer support, ensuring fast
                turnaround times and competitive costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="bg-illuminious-blue/20 rounded-xl p-4 border border-illuminious-blue/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl text-white">{location.flag}</span>
                      <h4 className="font-semibold text-white">{location.name}</h4>
                    </div>
                    <p className="text-sm text-white/70 mb-1">{location.city}</p>
                    <p className="text-sm text-illuminious-sky">{location.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img
                src="/images/about-global-network.png"
                alt="Global Network Map"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <img
                src="/images/about-overseas-warehouse.png"
                alt="Overseas Warehouse"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                US-Based Operations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Overseas Warehouse & Fulfillment
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our US-based warehouse and fulfillment center ensures rapid
                delivery to North American customers. With strategic inventory
                positioning and advanced logistics management, we minimize lead
                times and shipping costs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  <span>Same-day shipping for in-stock items</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  <span>Real-time inventory tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  <span>Custom packaging and labeling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                  <span>Direct-to-customer fulfillment</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-muted-foreground">
              Our facilities maintain the highest industry standards and certifications.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert} delay={index * 0.05}>
                <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-illuminious-light">
                  <span className="font-medium text-illuminious-navy">{cert}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your product vision to life
              with our comprehensive manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/services">View Our Services</Link>
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
