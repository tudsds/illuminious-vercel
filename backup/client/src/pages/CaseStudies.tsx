import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
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

export const caseStudies = [
  {
    id: "smart-home-device",
    slug: "smart-home-device-scaling",
    title: "Smart Home Device Manufacturer",
    industry: "Consumer IoT",
    challenge: "A US-based smart home company needed to scale from 1,000 to 50,000 units/month while reducing landed costs by 30% to compete with established players.",
    solution: "We implemented our Three-Phase Rocket approach: NPI in our Asia Pacific hub for rapid iteration, then transferred production to Indonesia for cost-optimized mass production.",
    results: [
      { metric: "Cost Reduction", value: "35%", description: "Landed cost savings through global manufacturing" },
      { metric: "Time to Market", value: "8 Weeks", description: "From concept to first production batch" },
      { metric: "Quality Rate", value: "99.7%", description: "First-pass yield rate" },
    ],
    testimonial: "Illuminious helped us achieve price parity with competitors while maintaining the quality our customers expect.",
    image: "/images/case-study-hero.jpg",
    tags: ["Consumer Electronics", "IoT", "Scale-Up"],
    fullContent: `
      <h2>Background</h2>
      <p>Our client, a US-based smart home technology company, had developed an innovative smart thermostat that was gaining traction in the market. However, they faced a critical challenge: their existing manufacturing setup couldn't scale to meet growing demand while maintaining competitive pricing.</p>
      
      <h2>The Challenge</h2>
      <p>The company needed to increase production from 1,000 to 50,000 units per month while reducing landed costs by 30%. Their current single-source manufacturing approach in Asia was creating supply chain vulnerabilities and limiting their ability to compete on price with established players.</p>
      
      <h2>Our Solution</h2>
      <p>We implemented our proven Three-Phase Rocket approach:</p>
      <ul>
        <li><strong>Phase 1 - NPI:</strong> Rapid prototyping and design optimization at our Asia Pacific innovation hub</li>
        <li><strong>Phase 2 - Pilot Production:</strong> Small-batch production runs to validate manufacturing processes</li>
        <li><strong>Phase 3 - Scale Production:</strong> Transfer to our Indonesia facility for cost-optimized mass production</li>
      </ul>
      
      <h2>Results</h2>
      <p>Within 8 weeks, we had the client's product in mass production with a 35% reduction in landed costs. The diversified supply chain also provided resilience against regional disruptions and optimized their tariff exposure.</p>
    `,
  },
  {
    id: "medical-device",
    slug: "medical-device-fda-approval",
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
    image: "/images/industry-medical.jpg",
    tags: ["Medical Device", "FDA", "Startup"],
    fullContent: `
      <h2>Background</h2>
      <p>A medical device startup developing a novel patient monitoring device approached us with a challenging requirement: they needed FDA-compliant manufacturing with full traceability, but their budget couldn't accommodate traditional medical device contract manufacturers.</p>
      
      <h2>The Challenge</h2>
      <p>The startup needed to achieve FDA 510(k) clearance while keeping manufacturing costs under control. They required complete component-level traceability, clean room assembly, and comprehensive documentation to support their regulatory submission.</p>
      
      <h2>Our Solution</h2>
      <p>We developed a customized manufacturing solution that included:</p>
      <ul>
        <li>Dedicated ISO Class 7 clean room space for assembly</li>
        <li>Full lot traceability system with component-level tracking</li>
        <li>Device History Record (DHR) documentation for each unit</li>
        <li>Support for FDA 510(k) submission with manufacturing documentation</li>
      </ul>
      
      <h2>Results</h2>
      <p>The client achieved FDA 510(k) clearance on their first submission attempt, with no additional information requests from the FDA. Our manufacturing solution delivered 45% cost savings compared to US-based alternatives while maintaining full regulatory compliance.</p>
    `,
  },
  {
    id: "industrial-iot",
    slug: "industrial-iot-global-certification",
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
    image: "/images/industry-industrial.jpg",
    tags: ["Industrial", "IoT", "Certifications"],
    fullContent: `
      <h2>Background</h2>
      <p>An industrial IoT company developing sensors for harsh manufacturing environments needed a manufacturing partner who could handle both the technical challenges of ruggedized electronics and the complexity of multi-market certifications.</p>
      
      <h2>The Challenge</h2>
      <p>The sensors needed to operate reliably in extreme conditions: temperatures from -40°C to +85°C, exposure to dust and water (IP67), and vibration typical of industrial machinery. Additionally, the client needed certifications for five major markets to support their global sales strategy.</p>
      
      <h2>Our Solution</h2>
      <p>We provided end-to-end product realization:</p>
      <ul>
        <li>Enclosure design optimized for IP67 sealing and thermal management</li>
        <li>Component selection for extended temperature range</li>
        <li>Environmental testing including thermal cycling and IP67 validation</li>
        <li>Multi-market certification support (FCC, CE, IC, MIC, RCM)</li>
      </ul>
      
      <h2>Results</h2>
      <p>The client launched their product in five markets simultaneously, with all certifications achieved on schedule. The ruggedized design has proven reliable in demanding industrial environments with zero field failures in the first year of deployment.</p>
    `,
  },
  {
    id: "automotive-electronics",
    slug: "automotive-supply-chain-diversification",
    title: "Automotive Electronics Supplier",
    industry: "Automotive",
    challenge: "An automotive Tier 2 supplier needed to diversify their supply chain while maintaining IATF 16949 quality standards.",
    solution: "We established a dedicated production line in Indonesia with automotive-grade quality systems and supported their PPAP documentation requirements.",
    results: [
      { metric: "Supply Chain", value: "Diversified", description: "Global production capability" },
      { metric: "Quality Standard", value: "IATF 16949", description: "Automotive quality certification" },
      { metric: "Lead Time", value: "Reduced 40%", description: "With US warehouse stocking" },
    ],
    testimonial: "They understood automotive requirements from day one. No learning curve needed.",
    image: "/images/industry-automotive.jpg",
    tags: ["Automotive", "Quality", "Supply Chain"],
    fullContent: `
      <h2>Background</h2>
      <p>An automotive Tier 2 supplier providing electronic control units to major OEMs recognized the need to diversify their supply chain. They required a manufacturing partner who understood automotive quality requirements and could support their PPAP documentation needs.</p>
      
      <h2>The Challenge</h2>
      <p>The client needed to establish alternative production capability while maintaining IATF 16949 quality standards and meeting the rigorous documentation requirements of automotive OEMs. They also needed to reduce lead times to their US customers.</p>
      
      <h2>Our Solution</h2>
      <p>We developed a comprehensive automotive manufacturing solution:</p>
      <ul>
        <li>Dedicated production line with automotive-grade quality systems</li>
        <li>PPAP documentation support for OEM qualification</li>
        <li>US warehouse stocking program for reduced lead times</li>
        <li>Full traceability and change management processes</li>
      </ul>
      
      <h2>Results</h2>
      <p>The client successfully diversified their supply chain with a qualified alternative production source. Lead times to US customers were reduced by 40% through our warehouse stocking program, improving their competitiveness in the market.</p>
    `,
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
              { icon: DollarSign, value: "Minimal", label: "US Tariffs" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-illuminious-light text-illuminious-navy text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-illuminious-navy mb-2 group-hover:text-illuminious-blue transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-illuminious-blue font-medium mb-3">{study.industry}</p>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{study.challenge}</p>
                      
                      {/* Results Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="text-center p-2 rounded-lg bg-illuminious-light/30">
                            <div className="text-sm font-bold text-illuminious-blue">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-illuminious-blue font-medium text-sm">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
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
            <p className="text-lg text-white mb-8">
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
