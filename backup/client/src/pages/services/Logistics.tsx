import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  CheckCircle,
  Globe,
  Package,
  Warehouse,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Warehouse,
    title: "US Warehouse",
    description: "Strategic West Coast warehouse for fast domestic delivery and reduced shipping costs.",
  },
  {
    icon: Package,
    title: "Order Fulfillment",
    description: "Pick, pack, and ship services with same-day processing for in-stock items.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "DDP/DDU shipping options with customs clearance support for seamless international delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated reorder point management with full visibility.",
  },
];

const specs = [
  { label: "US Warehouse", value: "Los Angeles" },
  { label: "Lead Time (Air)", value: "5-7 Days" },
  { label: "Lead Time (Sea)", value: "20-30 Days" },
  { label: "Fulfillment", value: "Same Day" },
];

const services = [
  "US warehouse storage",
  "Pick, pack & ship",
  "Same-day fulfillment",
  "B2B & D2C support",
  "Returns management",
  "Inventory tracking",
  "Customs clearance",
  "Last-mile delivery",
];

const shippingOptions = [
  {
    method: "Air Freight",
    leadTime: "5-7 Days",
    best: "Urgent orders, high-value products",
    cost: "$$$",
  },
  {
    method: "Sea Freight (FCL)",
    leadTime: "20-30 Days",
    best: "High-volume, cost-sensitive",
    cost: "$",
  },
  {
    method: "Sea Freight (LCL)",
    leadTime: "25-35 Days",
    best: "Medium volume, flexible",
    cost: "$$",
  },
  {
    method: "Express (DHL/FedEx)",
    leadTime: "3-5 Days",
    best: "Samples, prototypes",
    cost: "$$$$",
  },
];

const process = [
  {
    step: "01",
    title: "Setup & Integration",
    location: "🇺🇸 USA",
    description: "Integrate your systems with our warehouse management platform for seamless order flow.",
  },
  {
    step: "02",
    title: "Inventory Receipt",
    location: "🇺🇸 USA",
    description: "Receive and process your inventory at our US warehouse with quality verification.",
  },
  {
    step: "03",
    title: "Storage & Management",
    location: "🇺🇸 USA",
    description: "Secure storage with real-time inventory tracking, reporting, and automated alerts.",
  },
  {
    step: "04",
    title: "Order Processing",
    location: "🇺🇸 USA",
    description: "Automated order processing with same-day pick, pack, and shipping to your customers.",
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

export default function ServiceLogistics() {
  return (
    <>
      <SEO
        title="US Fulfillment & Logistics | Warehouse & Shipping | Illuminious"
        description="Streamline your supply chain with our US-based fulfillment center and comprehensive logistics network. Fast domestic delivery, inventory management, and global shipping."
        keywords="US fulfillment, logistics, warehouse, shipping, inventory management, supply chain, DDP shipping"
        url="/services/us-fulfillment"
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
                <span className="text-sm font-medium text-illuminious-blue">Phase 4 - US Fulfillment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                US Fulfillment & Logistics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Streamline your supply chain with our US-based fulfillment center. 
                Reduce shipping times, lower costs, and deliver faster to your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Get a Quote
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
                src="/images/about-overseas-warehouse.jpg"
                alt="US Fulfillment"
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
              Fulfillment Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete logistics solutions designed for the modern global supply chain 
              with US-based fulfillment.
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

      {/* Shipping Options */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Shipping Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the right shipping method based on your timeline and budget.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <AnimatedSection key={option.method} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{option.method}</h3>
                  <div className="text-2xl font-bold text-illuminious-blue mb-2">{option.leadTime}</div>
                  <p className="text-sm text-muted-foreground mb-4">Best for: {option.best}</p>
                  <div className="text-sm font-medium text-illuminious-navy">
                    Cost: {option.cost}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Service List */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Complete Fulfillment Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From inventory management to last-mile delivery, we handle every aspect 
                of your US fulfillment needs.
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
              <div className="bg-illuminious-navy rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  The US Fulfillment Advantage
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-illuminious-sky/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-illuminious-sky" />
                    </div>
                    <div>
                      <strong className="text-white">Faster Delivery</strong>
                      <p className="text-sm text-white/80">Reduce shipping times from weeks to days for US customers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-illuminious-sky/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-illuminious-sky" />
                    </div>
                    <div>
                      <strong className="text-white">Lower Costs</strong>
                      <p className="text-sm text-white/80">Bulk import and local delivery reduces overall shipping costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-illuminious-sky/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-illuminious-sky" />
                    </div>
                    <div>
                      <strong className="text-white">Real-Time Visibility</strong>
                      <p className="text-sm text-white/80">Track inventory and orders in real-time through our portal.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The Fulfillment Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Seamless integration from your factory to your customer's doorstep.
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
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-lg text-white mb-8">
              Let us help you reduce shipping times and costs with US-based fulfillment.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Request a Consultation
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
