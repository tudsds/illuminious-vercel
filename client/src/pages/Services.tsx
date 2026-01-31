import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  Wrench,
  Package,
  Truck,
  Lightbulb,
  ChevronRight,
  CheckCircle,
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
    title: "NPI & Engineering",
    subtitle: "New Product Introduction",
    description: "From concept to Golden Sample in days. Our Asia Pacific engineering center delivers rapid prototyping, DFM optimization, and engineering validation with unmatched speed.",
    features: ["72-Hour Rapid Prototyping", "DFM Review & Optimization", "Engineering Validation", "Small-Batch Pilot Runs"],
    href: "/services/npi-engineering",
    phase: "Phase 1 & 2",
    location: "🇺🇸 USA + 🇭🇰 Asia Pacific",
  },
  {
    icon: Cpu,
    title: "PCB Assembly (PCBA)",
    subtitle: "Surface Mount Technology",
    description: "High-precision SMT assembly with advanced capabilities including 0201 components, BGA, fine pitch, and complex multi-layer boards.",
    features: ["0201 Component Placement", "BGA & Fine Pitch", "Multi-Layer PCB", "AOI & X-Ray Inspection"],
    href: "/services/pcb-assembly",
    phase: "Phase 2",
    location: "🇭🇰 Asia Pacific",
  },
  {
    icon: Package,
    title: "Box Build & System Integration",
    subtitle: "Complete Product Assembly",
    description: "Full system integration from sub-assemblies to finished products. Cable assembly, enclosure integration, and final product testing.",
    features: ["Sub-Assembly Integration", "Cable & Wire Harness", "Enclosure Assembly", "Functional Testing"],
    href: "/services/box-build",
    phase: "Phase 3",
    location: "🇮🇩 Indonesia",
  },
  {
    icon: Wrench,
    title: "Plastic Injection & Tooling",
    subtitle: "Mold Design & Manufacturing",
    description: "End-to-end tooling services from mold design to mass production. Precision injection molding for complex geometries and tight tolerances.",
    features: ["Mold Design & DFM", "Rapid Tooling", "Multi-Cavity Molds", "Insert & Overmolding"],
    href: "/services/injection-molding",
    phase: "Phase 2 & 3",
    location: "🇭🇰 Asia Pacific + 🇮🇩 Indonesia",
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    subtitle: "Global Fulfillment",
    description: "Comprehensive supply chain management including component sourcing, inventory management, and global logistics with US warehousing.",
    features: ["Global BOM Sourcing", "Inventory Management", "US Warehouse", "DDP/DDU Shipping"],
    href: "/services/supply-chain",
    phase: "All Phases",
    location: "🌐 Global",
  },
];

const phases = [
  {
    number: 1,
    title: "Strategy & DFM",
    location: "USA",
    flag: "🇺🇸",
    color: "bg-illuminious-blue",
    description: "Design review, legal contracts, IP protection",
  },
  {
    number: 2,
    title: "NPI Accelerator",
    location: "Asia Pacific",
    flag: "🇭🇰",
    color: "bg-illuminious-sky",
    description: "Rapid prototyping, engineering validation",
  },
  {
    number: 3,
    title: "Scale Engine",
    location: "Indonesia",
    flag: "🇮🇩",
    color: "bg-illuminious-navy",
    description: "Mass production, cost-optimized assembly",
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

export default function Services() {
  return (
    <>
      <SEO
        title="End-to-End Manufacturing Services | NPI to Mass Production | Illuminious"
        description="Complete electronics manufacturing services from NPI and engineering to mass production. PCB assembly, box build, injection molding, and global logistics."
        keywords="NPI services, PCB assembly, box build, injection molding, supply chain, electronics manufacturing"
        url="/services"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              End-to-End Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              The Complete Manufacturing Lifecycle
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From your first prototype to your millionth unit. Our "Three-Phase Rocket" 
              approach ensures seamless transition through every stage of your product journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Phase Overview */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.number} delay={index * 0.1}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {phase.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{phase.flag}</span>
                      <span className="text-white font-semibold">{phase.title}</span>
                    </div>
                    <p className="text-illuminious-light/70 text-sm">{phase.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Each service is designed to integrate seamlessly with our global manufacturing network, 
              giving you the flexibility to optimize for speed, cost, or both.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                      {/* Left - Icon & Title */}
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-illuminious-light/50 flex items-center justify-center group-hover:bg-illuminious-blue group-hover:text-white transition-colors flex-shrink-0">
                          <service.icon className="w-7 h-7 text-illuminious-blue group-hover:text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-illuminious-light text-illuminious-navy">
                              {service.phase}
                            </span>
                            <span className="text-xs text-muted-foreground">{service.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle - Description */}
                      <div className="md:col-span-1">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Right - Features */}
                      <div className="flex flex-col justify-between">
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex justify-end">
                          <span className="inline-flex items-center text-sm font-medium text-illuminious-blue group-hover:gap-2 transition-all">
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Our team can help you identify the right services for your project stage. 
              Schedule a free consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
