import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Ruler,
  Layers,
  Cog,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Ruler,
    title: "Design Analysis",
    description: "Comprehensive review of your product design to identify potential manufacturing challenges and optimization opportunities.",
  },
  {
    icon: Layers,
    title: "Material Selection",
    description: "Expert guidance on choosing the right materials that balance performance, cost, and manufacturability.",
  },
  {
    icon: Cog,
    title: "Assembly Optimization",
    description: "Streamline assembly processes to reduce labor costs and improve production efficiency.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify and address potential manufacturing risks before they become costly problems.",
  },
];

const specs = [
  { label: "Cost Reduction", value: "15-30%" },
  { label: "Design Review", value: "48 Hours" },
  { label: "Engineering Team", value: "US + Asia" },
  { label: "Industries", value: "All" },
];

const services = [
  "Design for manufacturing review",
  "Material selection guidance",
  "Tolerance analysis",
  "Assembly process optimization",
  "Cost reduction strategies",
  "Quality risk assessment",
  "Production scalability planning",
  "Engineering consultation",
];

const process = [
  {
    step: "01",
    title: "Design Review",
    location: "🇺🇸 USA",
    description: "Our engineers conduct a thorough review of your product design, CAD files, and specifications.",
  },
  {
    step: "02",
    title: "DFM Analysis",
    location: "🇺🇸 USA",
    description: "We provide detailed DFM analysis with specific recommendations for design improvements.",
  },
  {
    step: "03",
    title: "Collaboration",
    location: "🇺🇸 USA + 🇭🇰 Shenzhen",
    description: "Work closely with your team to implement changes while maintaining design intent.",
  },
  {
    step: "04",
    title: "Validation",
    location: "🇭🇰 Shenzhen",
    description: "Verify optimized designs through prototyping and testing before mass production.",
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

export default function ServiceDFM() {
  return (
    <>
      <SEO
        title="Design for Manufacturing (DFM) | Product Design Optimization | Illuminious"
        description="Optimize your product design for efficient manufacturing with our DFM services. Reduce costs, improve quality, and accelerate time-to-market with expert engineering guidance."
        keywords="DFM, design for manufacturing, product design optimization, manufacturing efficiency, cost reduction, engineering services"
        url="/services/dfm"
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
                <span className="text-2xl">🇭🇰</span>
                <span className="text-sm font-medium text-illuminious-blue">Phase 1 & 2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Design for Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Optimize your product design for efficient manufacturing. 
                Reduce costs, improve quality, and accelerate time-to-market with expert DFM guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Get DFM Review
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
                src="/images/service-dfm-design.jpg"
                alt="Design for Manufacturing"
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
              DFM Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert analysis and recommendations to optimize your product 
              for manufacturing excellence.
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

      {/* Full Service List */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Complete DFM Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From initial design review to production validation, we provide 
                comprehensive DFM services to ensure your product is optimized for success.
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
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light">
                <h3 className="text-xl font-bold text-illuminious-navy mb-4">
                  Why DFM Matters
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Cost Reduction</strong>
                      <p className="text-sm text-muted-foreground">Reduce manufacturing costs by 15-30% through design optimization.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Faster Time-to-Market</strong>
                      <p className="text-sm text-muted-foreground">Avoid costly redesigns and production delays.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-illuminious-navy">Improved Quality</strong>
                      <p className="text-sm text-muted-foreground">Design for consistent quality and reliability in production.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The DFM Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined workflow from design review to production validation.
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
              Ready to Optimize Your Design?
            </h2>
            <p className="text-lg text-white mb-8">
              Get a comprehensive DFM review and reduce your manufacturing costs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Request DFM Review
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
