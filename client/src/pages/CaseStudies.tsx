import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    id: "smart-home-device",
    title: "Smart Home Device Manufacturer",
    industry: "Consumer IoT",
    challenge: "A US-based smart home company needed to scale from 1,000 to 50,000 units/month while reducing landed costs by 30% to compete with established players.",
    solution: "We implemented our Three-Phase Rocket approach: NPI at our Asia Pacific engineering center for rapid iteration, then transferred production to Indonesia for cost-optimized mass production.",
    results: [
      { metric: "Cost Reduction", value: "35%", description: "Landed cost savings through optimized supply chain" },
      { metric: "Time to Market", value: "8 Weeks", description: "From concept to first production batch" },
      { metric: "Quality Rate", value: "99.7%", description: "First-pass yield rate" },
    ],
    testimonial: "Illuminious helped us achieve price parity with competitors while maintaining the quality our customers expect.",
    image: "/images/case-study-hero.png",
    tags: ["Consumer Electronics", "IoT", "Scale-Up"],
  },
  {
    id: "medical-device",
    title: "Medical Device Startup",
    industry: "Medical/Healthcare",
    challenge: "A medical device startup needed FDA-compliant manufacturing with full traceability, but couldn't afford the overhead of traditional medical device manufacturers.",
    solution: "We provided dedicated clean room space, implemented full lot traceability, and supported their FDA 510(k) submission with comprehensive documentation.",
    results: [
      { metric: "FDA Approval", value: "First Try", description: "510(k) clearance without additional information requests" },
      { metric: "Traceability", value: "100%", description: "Component-level lot tracking" },
      { metric: "Cost Savings", value: "45%", description: "vs. US-based contract manufacturers" },
    ],
    testimonial: "Their documentation and quality systems exceeded what we expected from an overseas manufacturer.",
    image: "/images/industry-medical.png",
    tags: ["Medical Device", "FDA", "Startup"],
  },
  {
    id: "industrial-iot",
    title: "Industrial IoT Platform",
    industry: "Industrial/B2B",
    challenge: "An industrial IoT company needed to produce ruggedized sensors with wide temperature range and IP67 rating, with certifications for multiple international markets.",
    solution: "We handled the complete product realization including enclosure design, environmental testing, and multi-market certifications (FCC, CE, IC).",
    results: [
      { metric: "Certifications", value: "5 Markets", description: "FCC, CE, IC, MIC, RCM" },
      { metric: "Temperature Range", value: "-40°C to +85°C", description: "Extended industrial range" },
      { metric: "IP Rating", value: "IP67", description: "Dust-tight and waterproof" },
    ],
    testimonial: "They handled everything from PCB design to final certification. True one-stop shop.",
    image: "/images/industry-industrial.png",
    tags: ["Industrial", "IoT", "Certifications"],
  },
  {
    id: "automotive-electronics",
    title: "Automotive Electronics Supplier",
    industry: "Automotive",
    challenge: "An automotive Tier 2 supplier needed to diversify their supply chain while maintaining IATF 16949 quality standards.",
    solution: "We established a dedicated production line in Indonesia with automotive-grade quality systems and supported their PPAP documentation requirements.",
    results: [
      { metric: "Supply Chain", value: "Diversified", description: "Multi-region production capability" },
      { metric: "Quality Standard", value: "IATF 16949", description: "Automotive quality certification" },
      { metric: "Lead Time", value: "Reduced 40%", description: "With US warehouse stocking" },
    ],
    testimonial: "They understood automotive requirements from day one. No learning curve needed.",
    image: "/images/industry-automotive.png",
    tags: ["Automotive", "Quality", "Supply Chain"],
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

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Customer Success Stories | Illuminious"
        description="See how companies across industries have achieved success with Illuminious manufacturing services. Real results from consumer IoT, medical devices, industrial, and automotive."
        keywords="case studies, customer success, manufacturing success stories, electronics manufacturing"
        url="/case-studies"
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
              <Award className="w-4 h-4" />
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              Real Results from Real Partnerships
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how companies across industries have leveraged our global manufacturing 
              network to achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "35%", label: "Avg. Cost Savings" },
              { icon: Clock, value: "8 Weeks", label: "Avg. Time to Market" },
              { icon: Award, value: "99.5%", label: "Quality Rate" },
              { icon: DollarSign, value: "Optimized", label: "Landed Costs" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-illuminious-light/70">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id}>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-illuminious-light text-illuminious-navy text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-illuminious-navy mb-2">
                      {study.title}
                    </h2>
                    <p className="text-illuminious-blue font-medium mb-6">{study.industry}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-illuminious-navy mb-2">The Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-illuminious-navy mb-2">Our Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center p-4 rounded-xl bg-illuminious-light/30">
                          <div className="text-xl md:text-2xl font-bold text-illuminious-blue">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="mt-8 p-6 rounded-xl bg-white border border-illuminious-light">
                      <p className="text-muted-foreground italic">"{study.testimonial}"</p>
                    </blockquote>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Let's discuss how we can help you achieve similar results for your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Book a Factory Tour</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
