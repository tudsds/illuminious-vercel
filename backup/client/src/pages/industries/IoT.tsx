import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  CheckCircle,
  Home,
  Building2,
  Truck,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const segments = [
  {
    icon: Home,
    title: "Smart Home",
    description: "Connected home devices including sensors, controllers, and hubs.",
    examples: ["Smart Thermostats", "Security Cameras", "Door Locks", "Lighting Controls"],
  },
  {
    icon: Building2,
    title: "Smart Building",
    description: "Commercial building automation and monitoring systems.",
    examples: ["HVAC Controllers", "Occupancy Sensors", "Energy Monitors", "Access Control"],
  },
  {
    icon: Truck,
    title: "Asset Tracking",
    description: "GPS and cellular-based tracking devices for logistics.",
    examples: ["Fleet Trackers", "Container Monitors", "Cold Chain Sensors", "Equipment Tags"],
  },
  {
    icon: Activity,
    title: "Wearables",
    description: "Health and fitness wearable devices.",
    examples: ["Fitness Bands", "Health Monitors", "Smart Watches", "Medical Wearables"],
  },
];

const capabilities = [
  "Wi-Fi, BLE, Zigbee, Z-Wave integration",
  "LoRa and cellular (LTE-M, NB-IoT) support",
  "Low power design optimization",
  "OTA update capability",
  "Cloud connectivity testing",
  "RF performance validation",
  "Multi-market certification",
  "Security implementation",
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

export default function IndustryIoT() {
  return (
    <>
      <SEO
        title="IoT & Connected Device Manufacturing | Smart Home, Wearables | Illuminious"
        description="End-to-end IoT device manufacturing for smart home, building automation, asset tracking, and wearables. Wireless integration and multi-market certification."
        keywords="IoT manufacturing, smart home devices, connected devices, wearables, wireless devices"
        url="/industries/iot"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                IoT & Connected Devices
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                IoT Device Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From smart home to industrial IoT, we have the expertise to manufacture 
                reliable connected devices at scale.
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
                alt="IoT Manufacturing"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              IoT Market Segments
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience across the full spectrum of IoT applications.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <AnimatedSection key={segment.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <segment.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{segment.title}</h3>
                  <p className="text-muted-foreground mb-4">{segment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {segment.examples.map((ex) => (
                      <span key={ex} className="px-2 py-1 rounded-full bg-illuminious-light/50 text-xs">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                IoT Manufacturing Capabilities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/service-ai-glasses.jpg"
                alt="IoT Capabilities"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Connected Device?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss your IoT project requirements.
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
