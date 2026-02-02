import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  CheckCircle,
  Package,
  Zap,
  DollarSign,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const productTypes = [
  "Smart Home Devices",
  "Wearable Technology",
  "Audio Equipment",
  "Personal Care Electronics",
  "Gaming Accessories",
  "Mobile Accessories",
  "Kitchen Electronics",
  "Fitness Equipment",
];

const advantages = [
  {
    icon: DollarSign,
    title: "Cost Optimized",
    description: "Indonesia assembly delivers 40-60% labor cost savings with optimized US tariffs.",
  },
  {
    icon: Zap,
    title: "Fast Ramp",
    description: "Scale from prototype to 50K+ units/month with proven processes.",
  },
  {
    icon: Package,
    title: "Retail Ready",
    description: "Complete packaging solutions including retail-ready and Amazon FBA prep.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Consistent quality with <100 PPM defect rates.",
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

export default function IndustryConsumer() {
  return (
    <>
      <SEO
        title="Consumer Electronics Manufacturing | Smart Home, Wearables | Illuminious"
        description="High-volume consumer electronics manufacturing with cost optimization. Smart home devices, wearables, audio equipment with retail-ready packaging."
        keywords="consumer electronics manufacturing, smart home, wearables, high volume manufacturing"
        url="/industries/consumer"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Consumer Electronics
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                Consumer Electronics Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                High-volume manufacturing with cost optimization. Deliver quality 
                products at competitive prices with our Indonesia production advantage.
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
                src="/images/service-ai-glasses.jpg"
                alt="Consumer Electronics"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The Consumer Electronics Advantage
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built capabilities for high-volume consumer product success.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <AnimatedSection key={adv.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                    <adv.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground">{adv.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience across a wide range of consumer electronics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {productTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/service-assembly.jpg"
                alt="Consumer Products"
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
              Ready to Scale Your Consumer Product?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss how we can help you compete on cost without compromising quality.
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
