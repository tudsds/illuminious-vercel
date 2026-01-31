import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies: Record<string, {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  testimonial: string;
  image: string;
  tags: string[];
  details: string[];
}> = {
  "smart-home-device": {
    title: "Smart Home Device Manufacturer",
    industry: "Consumer IoT",
    challenge: "A US-based smart home company needed to scale from 1,000 to 50,000 units/month while reducing landed costs by 30% to compete with established players.",
    solution: "We implemented our Three-Phase Rocket approach: NPI in Asia Pacific for rapid iteration, then transferred production to Indonesia for cost-optimized mass production.",
    results: [
      { metric: "Cost Reduction", value: "35%", description: "Landed cost savings through optimized manufacturing" },
      { metric: "Time to Market", value: "8 Weeks", description: "From concept to first production batch" },
      { metric: "Quality Rate", value: "99.7%", description: "First-pass yield rate" },
    ],
    testimonial: "Illuminious helped us achieve price parity with competitors while maintaining the quality our customers expect.",
    image: "/images/service-ai-glasses.png",
    tags: ["Consumer Electronics", "IoT", "Scale-Up"],
    details: [
      "Rapid prototyping in Asia Pacific with 72-hour turnaround",
      "DFM optimization reduced BOM cost by 15%",
      "Copy Exact process transfer to Indonesia facility",
      "US warehouse stocking for 3-day domestic delivery",
    ],
  },
  "medical-device": {
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
    details: [
      "ISO 13485 compliant quality management system",
      "Dedicated clean room assembly area",
      "Full component-level traceability",
      "DHF documentation support for FDA submission",
    ],
  },
};

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

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug || "";
  const study = caseStudies[slug];

  if (!study) {
    return (
      <>
        <Header />
        <section className="pt-32 pb-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-illuminious-navy mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/case-studies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${study.title} | Case Study | Illuminious`}
        description={study.challenge}
        keywords={study.tags.join(", ")}
        url={`/case-studies/${slug}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-illuminious-blue hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
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
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
                {study.title}
              </h1>
              <p className="text-xl text-illuminious-blue mb-6">{study.industry}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {study.results.map((result, index) => (
              <AnimatedSection key={result.metric} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{result.value}</div>
                  <div className="text-sm text-illuminious-light/70">{result.metric}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-illuminious-navy mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-illuminious-navy mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.solution}</p>
              <ul className="space-y-3">
                {study.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <blockquote className="p-8 rounded-2xl bg-illuminious-light/30 border-l-4 border-illuminious-blue">
                <p className="text-lg italic text-muted-foreground">"{study.testimonial}"</p>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Let's discuss how we can help your project succeed.
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
