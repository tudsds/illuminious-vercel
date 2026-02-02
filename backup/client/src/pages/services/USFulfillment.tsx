import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Package,
  Truck,
  MapPin,
  Clock,
  BarChart3,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking with automated reorder alerts and demand forecasting to prevent stockouts.",
  },
  {
    icon: Truck,
    title: "Same-Day Shipping",
    description: "Orders placed before 2 PM PST ship same day. Strategic warehouse location enables 2-3 day ground delivery nationwide.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Our Los Angeles warehouse provides optimal coverage for both coasts and easy access to major ports.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Complete visibility into inventory levels, order status, and shipping performance through our online portal.",
  },
];

const benefits = [
  "2-3 day ground delivery to 95% of US addresses",
  "No minimum order quantities",
  "Custom packaging and labeling options",
  "Returns processing and management",
  "Integration with major e-commerce platforms",
  "Dedicated account manager",
];

const fulfillmentProcess = [
  {
    step: "01",
    title: "Receive Inventory",
    description: "Products arrive at our LA warehouse directly from our manufacturing facilities or your existing supply chain.",
  },
  {
    step: "02",
    title: "Quality Check",
    description: "Every shipment undergoes inspection to ensure products meet quality standards before stocking.",
  },
  {
    step: "03",
    title: "Store & Manage",
    description: "Products are stored in our climate-controlled facility with real-time inventory tracking.",
  },
  {
    step: "04",
    title: "Pick, Pack & Ship",
    description: "Orders are processed same-day with custom packaging and carrier optimization for fastest delivery.",
  },
];

const specs = [
  { label: "Warehouse Location", value: "🇺🇸 Los Angeles" },
  { label: "Same-Day Cutoff", value: "2 PM PST" },
  { label: "US Coverage", value: "2-3 Days" },
  { label: "Order Accuracy", value: "99.8%" },
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

export default function ServiceUSFulfillment() {
  return (
    <>
      <SEO
        title="US Fulfillment & Warehousing | Same-Day Shipping | Illuminious"
        description="Fast, reliable US fulfillment from our Los Angeles warehouse. Same-day shipping, 2-3 day delivery nationwide, and complete inventory management."
        keywords="US fulfillment, warehousing, same-day shipping, Los Angeles warehouse, inventory management, e-commerce fulfillment"
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
                <span className="text-sm font-medium text-illuminious-blue">US-Based Fulfillment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                US Fulfillment & Warehousing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete the last mile with our Los Angeles-based fulfillment center. 
                Same-day shipping, 2-3 day delivery nationwide, and seamless integration 
                with our global manufacturing network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Get Fulfillment Quote
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

      {/* Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Fulfillment Services
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end fulfillment solutions designed for growing brands.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Why Choose Our Fulfillment?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our US fulfillment center is the final piece of our end-to-end supply chain solution, 
                ensuring your products reach customers quickly and reliably.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/hero-global-supply-chain.jpg"
                alt="US Fulfillment Network"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined fulfillment process from receiving to delivery.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {fulfillmentProcess.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white border border-illuminious-light">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-illuminious-blue flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-illuminious-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Seamless Integration
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our fulfillment center integrates with major e-commerce platforms and marketplaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Shopify", "Amazon", "WooCommerce", "BigCommerce", "Magento", "Custom API"].map((platform) => (
                <span
                  key={platform}
                  className="px-4 py-2 rounded-full bg-white border border-illuminious-light text-illuminious-navy font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Fulfillment?
            </h2>
            <p className="text-lg text-white mb-8">
              Get a custom quote for your fulfillment needs and see how we can help you deliver faster.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Get Your Quote
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
