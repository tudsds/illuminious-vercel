import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  CheckCircle,
  Radio,
  Antenna,
  Battery,
  Signal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Radio,
    title: "RF/Wireless Design Support",
    description: "Expert support for RF circuit design, impedance matching, and wireless system integration.",
  },
  {
    icon: Antenna,
    title: "Antenna Integration",
    description: "PCB antenna design, external antenna integration, and antenna performance optimization.",
  },
  {
    icon: Battery,
    title: "Low Power Design",
    description: "Power optimization for battery-powered devices, sleep mode implementation, and power budgeting.",
  },
  {
    icon: Signal,
    title: "OTA Testing",
    description: "Over-the-air testing for wireless performance, range testing, and regulatory compliance.",
  },
];

const protocols = [
  { name: "Wi-Fi", versions: "802.11 a/b/g/n/ac/ax" },
  { name: "Bluetooth", versions: "Classic, BLE 4.x/5.x" },
  { name: "Zigbee", versions: "3.0, Thread" },
  { name: "Z-Wave", versions: "700 Series" },
  { name: "LoRa", versions: "LoRaWAN 1.0/1.1" },
  { name: "Cellular", versions: "LTE Cat-M1, NB-IoT, 5G" },
  { name: "Matter", versions: "1.0+" },
  { name: "UWB", versions: "IEEE 802.15.4z" },
];

const certifications = [
  "FCC Part 15/18",
  "CE RED",
  "IC RSS",
  "MIC (Japan)",
  "RCM (Australia)",
  "SRRC (China)",
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

export default function CapabilityIoT() {
  return (
    <>
      <SEO
        title="IoT & Wireless Specialization | RF Design, Antenna, Low Power | Illuminious"
        description="Deep expertise in IoT device manufacturing. RF design support, antenna integration, low power optimization, and wireless certification for all major protocols."
        keywords="IoT manufacturing, wireless design, RF design, antenna integration, low power, BLE, WiFi, LoRa"
        url="/capabilities/iot"
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
                <Wifi className="w-4 h-4" />
                IoT Expertise
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                IoT & Wireless Specialization
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Deep expertise in connected device manufacturing. From RF design support 
                to wireless certification, we help you build reliable IoT products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Discuss Your IoT Project
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
                src="/images/hero-global-supply-chain.jpg"
                alt="IoT & Wireless"
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
              IoT Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized expertise for the unique challenges of wireless device manufacturing.
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

      {/* Protocols */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Supported Wireless Protocols
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience with all major wireless protocols and standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {protocols.map((protocol) => (
                  <div key={protocol.name} className="p-4 rounded-xl bg-white border border-illuminious-light">
                    <div className="font-bold text-illuminious-navy">{protocol.name}</div>
                    <div className="text-xs text-muted-foreground">{protocol.versions}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light">
                <h3 className="text-xl font-bold text-illuminious-navy mb-6">
                  Wireless Certifications
                </h3>
                <p className="text-muted-foreground mb-6">
                  We support certification for all major markets:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
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
              Ready to Build Your IoT Product?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss your wireless requirements and how we can help.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Start Your Project
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
