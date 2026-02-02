import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Award,
  FileCheck,
  Eye,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management System",
    description: "International standard for quality management systems, demonstrating consistent quality and customer satisfaction.",
    status: "Certified",
  },
  {
    name: "ISO 13485",
    category: "Medical Device QMS",
    description: "Quality management system for medical device design and manufacturing.",
    status: "Ready",
  },
  {
    name: "IATF 16949",
    category: "Automotive QMS",
    description: "Quality management standard for the automotive industry supply chain.",
    status: "Ready",
  },
  {
    name: "IPC-A-610 Class 2/3",
    category: "Electronics Assembly",
    description: "Acceptability standards for electronic assemblies, from general to high-reliability.",
    status: "Compliant",
  },
];

const qualityProcesses = [
  {
    icon: FileCheck,
    title: "Incoming Quality Control",
    description: "100% inspection of critical components with AQL sampling for standard parts.",
  },
  {
    icon: Eye,
    title: "In-Process Inspection",
    description: "SPC monitoring at key process steps with real-time quality alerts.",
  },
  {
    icon: Target,
    title: "Final Quality Assurance",
    description: "Comprehensive end-of-line testing including functional, visual, and packaging inspection.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description: "Regular quality reviews, root cause analysis, and corrective action implementation.",
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

export default function CapabilityQuality() {
  return (
    <>
      <SEO
        title="Quality & Certifications | ISO 9001, ISO 13485, IATF 16949 | Illuminious"
        description="Comprehensive quality management systems with ISO 9001, ISO 13485, and IATF 16949 certifications. IPC Class 2/3 compliant electronics assembly."
        keywords="ISO 9001, ISO 13485, IATF 16949, quality management, IPC Class 3, electronics quality"
        url="/capabilities/quality"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Quality Excellence
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Quality & Certifications
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Quality is not just a department—it's embedded in everything we do. 
                Our certifications and processes ensure consistent, reliable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Request Quality Documentation
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
                src="/images/service-testing.jpg"
                alt="Quality & Certifications"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized certifications that demonstrate our commitment to quality excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-illuminious-navy">{cert.name}</h3>
                      <p className="text-sm text-illuminious-blue">{cert.category}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                      cert.status === 'Ready' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Quality Processes
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to quality at every stage of manufacturing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => (
              <AnimatedSection key={process.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4">
                    <process.icon className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Quality Performance
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "99.7%", label: "First Pass Yield" },
              { metric: "<100 PPM", label: "Defect Rate" },
              { metric: "100%", label: "On-Time Delivery" },
              { metric: "0", label: "Customer Escapes (YTD)" },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-illuminious-light/30">
                  <div className="text-3xl font-bold text-illuminious-blue mb-2">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
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
              Quality You Can Trust
            </h2>
            <p className="text-lg text-white mb-8">
              Request our quality documentation or schedule a quality audit.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Contact Quality Team
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
