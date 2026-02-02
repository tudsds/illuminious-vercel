import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { caseStudies } from "./CaseStudies";

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
  const study = caseStudies.find(s => s.slug === slug);

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

  const shareUrl = `https://illuminious.com/case-studies/${slug}`;

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
              
              {/* Social Share */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <SocialShare url={shareUrl} title={study.title} />
              </div>
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
              {study.fullContent && (
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: study.fullContent }}
                />
              )}
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <blockquote className="p-8 rounded-2xl bg-illuminious-light/30 border-l-4 border-illuminious-blue">
                <p className="text-lg italic text-muted-foreground">"{study.testimonial}"</p>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-illuminious-light/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-muted-foreground">Found this case study helpful? Share it:</span>
            <SocialShare url={shareUrl} title={study.title} />
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
