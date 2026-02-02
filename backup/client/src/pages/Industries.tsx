import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Car,
  Factory,
  Home,
  Wifi,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  {
    icon: Heart,
    title: "Medical & Healthcare",
    description: "FDA-compliant manufacturing for medical devices, diagnostic equipment, and healthcare technology. Full traceability and documentation support.",
    capabilities: ["ISO 13485 Ready", "FDA 510(k) Support", "Clean Room Assembly", "Full Traceability"],
    href: "/industries/medical",
    image: "/images/industry-medical.jpg",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "IATF 16949 quality systems for automotive electronics. From infotainment to ADAS sensors, we meet the demanding requirements of the automotive industry.",
    capabilities: ["IATF 16949 Quality", "PPAP Documentation", "Extended Temp Range", "Vibration Testing"],
    href: "/industries/automotive",
    image: "/images/industry-automotive.jpg",
  },
  {
    icon: Factory,
    title: "Industrial & B2B",
    description: "Ruggedized electronics for industrial applications. Wide temperature range, IP-rated enclosures, and long product lifecycle support.",
    capabilities: ["IP67/IP68 Enclosures", "-40°C to +85°C", "Long Lifecycle", "Multi-Market Certs"],
    href: "/industries/industrial",
    image: "/images/industry-industrial.jpg",
  },
  {
    icon: Home,
    title: "Consumer Electronics",
    description: "High-volume consumer electronics manufacturing with cost optimization. From smart home devices to wearables, we deliver quality at scale.",
    capabilities: ["High Volume", "Cost Optimized", "Retail Packaging", "FCC/CE Certified"],
    href: "/industries/consumer",
    image: "/images/service-ai-glasses.jpg",
  },
  {
    icon: Wifi,
    title: "IoT & Connected Devices",
    description: "End-to-end IoT device manufacturing including wireless integration, antenna design, and cloud connectivity testing.",
    capabilities: ["RF/Wireless", "Antenna Design", "Low Power", "OTA Testing"],
    href: "/industries/iot",
    image: "/images/hero-global-supply-chain.jpg",
  },
  {
    icon: Cpu,
    title: "AI & Edge Computing",
    description: "Manufacturing for AI hardware including edge computing devices, neural processing units, and AI-enabled cameras.",
    capabilities: ["Thermal Management", "High-Speed PCB", "GPU Integration", "AI Testing"],
    href: "/industries/ai-computing",
    image: "/images/service-dfm-design.jpg",
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

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Medical, Automotive, Industrial, IoT | Illuminious"
        description="Specialized manufacturing solutions for medical devices, automotive electronics, industrial equipment, consumer electronics, IoT, and AI hardware."
        keywords="medical device manufacturing, automotive electronics, industrial electronics, IoT manufacturing, AI hardware"
        url="/industries"
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
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              Tailored Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From medical devices to automotive electronics, we understand the unique 
              requirements of each industry and deliver solutions that meet the highest standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <Link href={industry.href}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-illuminious-light/50 flex items-center justify-center group-hover:bg-illuminious-blue transition-colors">
                          <industry.icon className="w-5 h-5 text-illuminious-blue group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {industry.capabilities.slice(0, 3).map((cap) => (
                          <span
                            key={cap}
                            className="px-2 py-1 rounded-full bg-illuminious-light/50 text-xs text-illuminious-navy"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-medium text-illuminious-blue group-hover:gap-2 transition-all">
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Cross-Industry Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Regardless of your industry, you benefit from our core manufacturing strengths.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Systems", desc: "ISO 9001, ISO 13485, IATF 16949 ready" },
              { title: "Global Certifications", desc: "FCC, CE, IC, MIC, RCM support" },
              { title: "Supply Chain", desc: "Non-China sourcing options" },
              { title: "US Fulfillment", desc: "West Coast warehouse" },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light text-center">
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-white mb-8">
              We work with companies across many industries. Contact us to discuss 
              your specific requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Let's Talk
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
