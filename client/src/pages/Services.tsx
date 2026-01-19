import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Factory,
  Cpu,
  Package,
  Wrench,
  Truck,
  CircuitBoard,
  Box,
  TestTube,
  Layers,
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
    title: "Design for Manufacturing (DFM)",
    description: "Optimize your product design for efficient manufacturing, reducing costs and improving quality from the start.",
    features: ["Design optimization", "Cost reduction analysis", "Material selection", "Manufacturability assessment"],
    href: "/services/dfm",
    image: "/images/service-dfm-design.png",
  },
  {
    icon: Factory,
    title: "Original Equipment Manufacturing (OEM)",
    description: "Manufacture products to your exact specifications under your brand with our world-class facilities.",
    features: ["Your design, our production", "Quality assurance", "Scalable capacity", "Brand packaging"],
    href: "/services/oem",
    image: "/images/about-factory-equipment.png",
  },
  {
    icon: Cpu,
    title: "Original Design Manufacturing (ODM)",
    description: "Leverage our design expertise to create products from concept to completion under your brand.",
    features: ["Full product development", "Custom modifications", "IP protection", "Turnkey solutions"],
    href: "/services/odm",
    image: "/images/service-ai-glasses.png",
  },
  {
    icon: Package,
    title: "Electronics Manufacturing Services (EMS)",
    description: "Complete electronics assembly services from PCB assembly to final product integration.",
    features: ["SMT assembly", "Through-hole assembly", "Box build", "Testing & QC"],
    href: "/services/ems",
    image: "/images/service-prototyping.png",
  },
  {
    icon: CircuitBoard,
    title: "PCB Manufacturing & Assembly (PCBA)",
    description: "Complete PCB fabrication and assembly services from prototype to mass production with precision and reliability.",
    features: ["Multi-layer PCB", "SMT/THT assembly", "Quick turn prototyping", "AOI & X-ray inspection"],
    href: "/services/pcb",
    image: "/images/service-pcb.png",
  },
  {
    icon: Box,
    title: "Tooling & Injection Molding",
    description: "Professional tooling design and injection molding services for plastic enclosures and custom components.",
    features: ["Mold design & engineering", "Precision tooling", "Multi-cavity molds", "Surface finishing"],
    href: "/services/molding",
    image: "/images/service-molding.png",
  },
  {
    icon: Layers,
    title: "IC Packaging & Semiconductor Services",
    description: "Advanced chip packaging and semiconductor backend services including wire bonding and flip chip technologies.",
    features: ["Wire bonding", "Flip chip assembly", "System in Package (SiP)", "Module assembly"],
    href: "/services/packaging",
    image: "/images/service-packaging.png",
  },
  {
    icon: Wrench,
    title: "Product Assembly & Box Build",
    description: "End-to-end product assembly and box build services from sub-assembly to market-ready products.",
    features: ["Mechanical assembly", "Cable & harness", "Electro-mechanical integration", "Final packaging"],
    href: "/services/assembly",
    image: "/images/service-assembly.png",
  },
  {
    icon: Wrench,
    title: "Rapid Prototyping",
    description: "Quickly validate your designs with our rapid prototyping services before committing to mass production.",
    features: ["3D printing", "CNC machining", "Functional prototypes", "Design iteration"],
    href: "/services/prototyping",
    image: "/images/service-prototyping.png",
  },
  {
    icon: TestTube,
    title: "Quality Testing & Certification",
    description: "Comprehensive testing and certification services to ensure your products meet quality and regulatory standards.",
    features: ["Functional testing", "Environmental testing", "EMC/EMI testing", "Certification support"],
    href: "/services/testing",
    image: "/images/service-testing.png",
  },
  {
    icon: Truck,
    title: "Logistics & Overseas Warehouse",
    description: "Streamline your supply chain with our global logistics network and US-based fulfillment center.",
    features: ["Inventory management", "Order fulfillment", "Customs clearance", "Last-mile delivery"],
    href: "/services/logistics",
    image: "/images/about-overseas-warehouse.png",
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
        title="Our Services"
        description="Explore Illuminious comprehensive manufacturing services including DFM, OEM, ODM, EMS, PCB assembly, injection molding, IC packaging, testing, and global logistics solutions."
        keywords="manufacturing services, DFM, OEM, ODM, EMS, PCB assembly, injection molding, IC packaging, electronics assembly, prototyping, logistics"
        url="/services"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-illuminious-navy via-illuminious-blue to-illuminious-sky overflow-hidden">
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
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              End-to-End Manufacturing Solutions
            </h1>
            <p className="text-xl text-illuminious-light/90 leading-relaxed">
              From initial design optimization to final delivery, we provide
              comprehensive services tailored to your unique manufacturing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-illuminious-light flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-illuminious-blue" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#132843' }}>
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-illuminious-blue" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-6"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to bring your product from concept to market.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements and goals" },
              { step: "02", title: "Design & Planning", desc: "Optimize design for manufacturing" },
              { step: "03", title: "Production", desc: "Quality manufacturing at scale" },
              { step: "04", title: "Delivery", desc: "Global logistics and fulfillment" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-illuminious-light mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-illuminious-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Contact us today for a free consultation and quote. Our team is
              ready to help bring your product to life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Request a Quote
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
