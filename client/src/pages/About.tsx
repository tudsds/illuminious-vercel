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
  Shield,
  Cpu,
  Building2,
  Scale,
  Zap,
  FileCheck,
  Briefcase,
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
    description: "Global Headquarters",
    flag: "🇺🇸",
    role: "Headquarters",
    details: "US contracts, IP protection, customer success",
  },
  {
    name: "Hong Kong",
    city: "Hong Kong SAR",
    description: "R&D & Engineering Center",
    flag: "🇭🇰",
    role: "Engineering Hub",
    details: "JDM capability, hardware co-pilots",
  },
  {
    name: "Asia Pacific",
    city: "Greater Bay Area",
    description: "NPI & Prototyping Center",
    flag: "🌏",
    role: "NPI Center",
    details: "72-hour prototyping, rapid iteration",
  },
  {
    name: "Indonesia",
    city: "Batam Island FTZ",
    description: "Mass Production Center",
    flag: "🇮🇩",
    role: "Production Hub",
    details: "Cost-optimized, high-volume assembly",
  },
];

const values = [
  {
    icon: Shield,
    title: "IP Protection",
    description: "Your designs are protected by US law. We sign NDAs before any engagement and maintain strict confidentiality protocols.",
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We provide detailed cost breakdowns and work with you to optimize for your budget.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Our parallel engineering approach and supply chain access means you get to market faster than competitors.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We're not just a vendor—we're your hardware co-pilot. Your success is our success.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "ISO 14001:2015", desc: "Environmental" },
  { name: "ISO 13485", desc: "Medical Devices" },
  { name: "IATF 16949", desc: "Automotive" },
  { name: "UL Listed", desc: "Safety Certification" },
  { name: "CE Marking", desc: "EU Compliance" },
  { name: "FCC Certified", desc: "US RF Compliance" },
  { name: "RoHS Compliant", desc: "Environmental" },
];

const leadership = [
  {
    name: "Executive Team",
    role: "Strategic Leadership",
    description: "Silicon Valley veterans with 50+ years combined experience in hardware, supply chain, and manufacturing.",
    expertise: ["Product Strategy", "Global Operations", "Customer Success"],
  },
  {
    name: "Engineering Team",
    role: "Technical Excellence",
    description: "Hardware engineers from leading tech companies, specializing in DFM, NPI, and production optimization.",
    expertise: ["DFM Analysis", "NPI Management", "Quality Engineering"],
  },
  {
    name: "Operations Team",
    role: "Execution Excellence",
    description: "Supply chain experts managing end-to-end logistics across our global manufacturing network.",
    expertise: ["Supply Chain", "Logistics", "Vendor Management"],
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

export default function About() {
  return (
    <>
      <SEO
        title="About Illuminious | US Electronics Manufacturing Company"
        description="Illuminious is a US-based electronics manufacturing company with global production capabilities. We combine Silicon Valley innovation with world-class manufacturing excellence."
        keywords="about illuminious, US electronics manufacturing, American EMS company, supply chain partner, OEM ODM company"
        url="/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-illuminious overflow-hidden">
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
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              <Building2 className="w-4 h-4" />
              A US Company, A Global Network
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Hardware Co-Pilot from Concept to Scale
            </h1>
            <p className="text-lg sm:text-xl text-illuminious-light/90 leading-relaxed mb-8 max-w-3xl">
              Illuminious LLC is a Delaware-incorporated company headquartered in Palo Alto, California. 
              We combine Silicon Valley's innovation mindset with world-class manufacturing excellence to help 
              hardware companies navigate the complexities of global supply chains.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Shield className="w-5 h-5 text-illuminious-sky" />
                <span className="text-white text-sm">US Legal Entity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <FileCheck className="w-5 h-5 text-illuminious-sky" />
                <span className="text-white text-sm">IP Protected</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Globe className="w-5 h-5 text-illuminious-sky" />
                <span className="text-white text-sm">Global Footprint</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* US Foundation Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                US Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Why We're Incorporated in the USA
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unlike offshore shell companies, Illuminious is a real US business with real US accountability. 
                  When you sign a contract with us, you're protected by US commercial law, US courts, and US 
                  intellectual property protections.
                </p>
                <p>
                  This isn't just about legal technicalities—it's about trust. Your designs, your innovations, 
                  and your competitive advantages are protected by the strongest IP laws in the world.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-illuminious-light/50 rounded-xl">
                  <h4 className="font-semibold text-illuminious-navy mb-2">Contracts in English</h4>
                  <p className="text-sm text-muted-foreground">Clear terms, no translation ambiguity</p>
                </div>
                <div className="p-4 bg-illuminious-light/50 rounded-xl">
                  <h4 className="font-semibold text-illuminious-navy mb-2">US Court Jurisdiction</h4>
                  <p className="text-sm text-muted-foreground">Disputes resolved under US law</p>
                </div>
                <div className="p-4 bg-illuminious-light/50 rounded-xl">
                  <h4 className="font-semibold text-illuminious-navy mb-2">NDA Enforcement</h4>
                  <p className="text-sm text-muted-foreground">Real legal teeth, real protection</p>
                </div>
                <div className="p-4 bg-illuminious-light/50 rounded-xl">
                  <h4 className="font-semibold text-illuminious-navy mb-2">IP Registration</h4>
                  <p className="text-sm text-muted-foreground">USPTO-backed protections</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="/images/about-factory-equipment.png"
                  alt="US Headquarters"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-illuminious-light rounded-full flex items-center justify-center">
                      <span className="text-2xl">🇺🇸</span>
                    </div>
                    <div>
                      <p className="font-semibold text-illuminious-navy">Palo Alto, CA</p>
                      <p className="text-sm text-muted-foreground">Global Headquarters</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Manufacturing Network */}
      <section className="py-20 md:py-32 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Global Manufacturing Network
            </h2>
            <p className="text-lg text-muted-foreground">
              As a US company, we've built strategic partnerships across multiple regions. 
              Our diversified network provides flexibility, resilience, and optimized costs for every project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <AnimatedSection key={location.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all h-full border border-illuminious-light">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{location.flag}</span>
                    <div>
                      <h4 className="font-semibold text-illuminious-navy">{location.name}</h4>
                      <p className="text-sm text-muted-foreground">{location.city}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-illuminious-light rounded-full text-xs font-medium text-illuminious-blue">
                      {location.role}
                    </span>
                  </div>
                  <p className="text-sm text-illuminious-navy font-medium mb-2">{location.description}</p>
                  <p className="text-sm text-muted-foreground">{location.details}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Excellence - JDM Capability */}
      <section className="py-20 md:py-32 bg-illuminious-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                Engineering Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Your Hardware Co-Pilots
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Our engineering team doesn't just follow your specifications—we help you optimize them. 
                With deep expertise in JDM (Joint Design Manufacturing), we act as an extension of your 
                R&D team, identifying opportunities to improve manufacturability, reduce costs, and 
                accelerate time-to-market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-illuminious-blue/20 rounded-xl border border-illuminious-blue/30">
                  <CheckCircle className="w-6 h-6 text-illuminious-sky flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">DFM Review</h4>
                    <p className="text-sm text-white/70">We analyze your design before production, catching issues early when changes are cheap.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-illuminious-blue/20 rounded-xl border border-illuminious-blue/30">
                  <CheckCircle className="w-6 h-6 text-illuminious-sky flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Component Optimization</h4>
                    <p className="text-sm text-white/70">We suggest alternative components that reduce cost without compromising quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-illuminious-blue/20 rounded-xl border border-illuminious-blue/30">
                  <CheckCircle className="w-6 h-6 text-illuminious-sky flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Process Engineering</h4>
                    <p className="text-sm text-white/70">We design the manufacturing process alongside your product for optimal results.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img
                src="/images/about-global-network.png"
                alt="Engineering Team"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team combines decades of experience in hardware, manufacturing, and supply chain management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <AnimatedSection key={leader.name} delay={index * 0.1}>
                <div className="bg-illuminious-light/30 rounded-2xl p-6 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-illuminious-blue/10 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-illuminious-navy mb-1">{leader.name}</h3>
                  <p className="text-sm text-illuminious-blue font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground mb-4">{leader.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-illuminious-navy">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
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

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-light text-illuminious-blue text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Quality & Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-illuminious-navy mb-4">
              Certifications & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facilities maintain the highest industry standards and certifications, 
              ensuring your products meet global regulatory requirements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.05}>
                <div className="p-4 bg-illuminious-light/30 rounded-xl text-center hover:bg-illuminious-light/50 transition-colors">
                  <span className="font-semibold text-illuminious-navy block mb-1">{cert.name}</span>
                  <span className="text-xs text-muted-foreground">{cert.desc}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-illuminious-navy to-illuminious-blue">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-illuminious-light/90 mb-8">
              Let's discuss how we can help bring your product vision to life
              with our comprehensive manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
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
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Book a Factory Tour</Link>
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
