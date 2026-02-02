import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  CheckCircle,
  Shield,
  FileCheck,
  Microscope,
  ClipboardCheck,
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
    title: "ISO 13485 Ready",
    description: "Quality management systems designed to meet ISO 13485 requirements for medical device manufacturing.",
  },
  {
    icon: FileCheck,
    title: "FDA 510(k) Support",
    description: "Documentation and process support for FDA regulatory submissions including 510(k) and PMA.",
  },
  {
    icon: Microscope,
    title: "Clean Room Assembly",
    description: "Class 10,000 (ISO 7) clean room facilities for sensitive medical device assembly.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Traceability",
    description: "Component-level lot traceability with comprehensive documentation for regulatory compliance.",
  },
];

const deviceTypes = [
  "Diagnostic Equipment",
  "Patient Monitoring Devices",
  "Surgical Instruments",
  "Implantable Electronics",
  "Wearable Health Devices",
  "Laboratory Equipment",
  "Therapeutic Devices",
  "Point-of-Care Devices",
];

const certifications = [
  { name: "ISO 13485", status: "Ready", desc: "Medical Device QMS" },
  { name: "FDA 21 CFR Part 820", status: "Compliant", desc: "Quality System Regulation" },
  { name: "CE Marking", status: "Supported", desc: "EU Medical Device Directive" },
  { name: "UDI Compliance", status: "Supported", desc: "Unique Device Identification" },
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

export default function IndustryMedical() {
  return (
    <>
      <SEO
        title="Medical Device Manufacturing | FDA Compliant | ISO 13485 | Illuminious"
        description="FDA-compliant medical device manufacturing with ISO 13485 quality systems. Clean room assembly, full traceability, and regulatory documentation support."
        keywords="medical device manufacturing, FDA compliant, ISO 13485, clean room assembly, medical electronics"
        url="/industries/medical"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Medical & Healthcare
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Medical Device Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                FDA-compliant manufacturing with the quality systems and documentation 
                required for medical device success. From Class I to Class III devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Discuss Your Device
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
                src="/images/industry-medical.jpg"
                alt="Medical Device Manufacturing"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Medical Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built capabilities for the unique requirements of medical device manufacturing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Device Types We Manufacture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience across a wide range of medical device categories.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {deviceTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light">
                <h3 className="text-xl font-bold text-illuminious-navy mb-6">
                  Regulatory Compliance
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between p-4 rounded-xl bg-illuminious-light/30">
                      <div>
                        <div className="font-semibold text-illuminious-navy">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">{cert.desc}</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Medical Device?
            </h2>
            <p className="text-lg text-white mb-8">
              Our team has experience with FDA submissions and can guide you through 
              the manufacturing process.
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
