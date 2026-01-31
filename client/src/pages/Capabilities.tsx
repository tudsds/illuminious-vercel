import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Cpu,
  Wifi,
  Zap,
  Award,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Shield,
    title: "Quality & Certifications",
    description: "Comprehensive quality management systems and certifications to meet the most demanding industry requirements.",
    features: ["ISO 9001:2015", "ISO 13485 Ready", "IATF 16949 Ready", "IPC Class 2/3"],
    href: "/capabilities/quality",
  },
  {
    icon: Wifi,
    title: "IoT & Wireless Specialization",
    description: "Deep expertise in IoT device manufacturing including RF design, antenna integration, and wireless testing.",
    features: ["RF/Wireless Design", "Antenna Integration", "Low Power Design", "OTA Testing"],
    href: "/capabilities/iot",
  },
  {
    icon: Cpu,
    title: "Advanced Electronics",
    description: "State-of-the-art SMT capabilities for complex electronics including fine-pitch, BGA, and high-density assemblies.",
    features: ["0201 Components", "BGA/CSP/QFN", "HDI PCB", "Multi-Layer Boards"],
    href: "/services/pcb-assembly",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "72-hour prototype turnaround leveraging our Asia Pacific engineering center's supply chain ecosystem.",
    features: ["72-Hour Turnaround", "DFM Review", "Small Batch", "Quick Iteration"],
    href: "/services/npi-engineering",
  },
];

const certifications = [
  { name: "ISO 9001:2015", category: "Quality Management", status: "Certified" },
  { name: "ISO 13485", category: "Medical Devices", status: "Ready" },
  { name: "IATF 16949", category: "Automotive", status: "Ready" },
  { name: "IPC-A-610 Class 2/3", category: "Electronics Assembly", status: "Compliant" },
  { name: "RoHS/REACH", category: "Environmental", status: "Compliant" },
  { name: "UL Listed", category: "Safety", status: "Available" },
];

const equipment = [
  { category: "SMT Lines", items: ["Fuji NXT III", "Yamaha YSM40R", "Panasonic NPM-W2"] },
  { category: "Inspection", items: ["Koh Young 3D AOI", "Nordson X-Ray", "Keyence Microscopes"] },
  { category: "Testing", items: ["Flying Probe", "ICT", "Functional Test Systems"] },
  { category: "Tooling", items: ["Fanuc CNC", "Sodick EDM", "Haitian Injection"] },
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

export default function Capabilities() {
  return (
    <>
      <SEO
        title="Manufacturing Capabilities | Quality, IoT, Advanced Electronics | Illuminious"
        description="Explore our manufacturing capabilities including quality certifications, IoT specialization, advanced SMT, and rapid prototyping services."
        keywords="manufacturing capabilities, ISO 9001, ISO 13485, IoT manufacturing, SMT assembly, rapid prototyping"
        url="/capabilities"
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
              <Award className="w-4 h-4" />
              Our Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              World-Class Manufacturing Capabilities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From quality certifications to specialized IoT expertise, we have the 
              capabilities to bring your most demanding products to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <Link href={cap.href}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-illuminious-light/50 flex items-center justify-center group-hover:bg-illuminious-blue transition-colors flex-shrink-0">
                        <cap.icon className="w-7 h-7 text-illuminious-blue group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors mb-2">
                          {cap.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {cap.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cap.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 rounded-full bg-illuminious-light/50 text-xs text-illuminious-navy"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-medium text-illuminious-blue group-hover:gap-2 transition-all">
                          Learn more
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized certifications that demonstrate our commitment to quality.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-illuminious-navy">{cert.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                      cert.status === 'Ready' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.category}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Equipment & Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art equipment from industry-leading manufacturers.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((eq, index) => (
              <AnimatedSection key={eq.category} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                  <h3 className="font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light">
                    {eq.category}
                  </h3>
                  <ul className="space-y-2">
                    {eq.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Leverage Our Capabilities?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Let's discuss how our capabilities can help bring your product to market.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Get Started
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
