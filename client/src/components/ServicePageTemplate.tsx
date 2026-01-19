import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  features: { title: string; description: string }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  seoKeywords: string;
}

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

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  icon: Icon,
  features,
  benefits,
  process,
  faqs,
  seoKeywords,
}: ServicePageProps) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={seoKeywords}
        url={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-illuminious-light/80">{subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#132843' }}>
                {title}
              </h1>
              <p className="text-xl text-illuminious-light/90 leading-relaxed mb-8">
                {description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={heroImage}
                alt={title}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover what makes our {title.toLowerCase()} services stand out.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-illuminious-light hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-xl font-semibold text-illuminious-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-illuminious-light/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Why Choose Our {title}?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-illuminious-navy rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-illuminious-light/80 mb-6">
                  Contact our team today for a free consultation and discover
                  how we can help with your {title.toLowerCase()} needs.
                </p>
                <Button
                  asChild
                  className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-6"
                >
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-full bg-illuminious-light mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-illuminious-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-illuminious-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-illuminious-light px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-illuminious-navy hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Ready to take the next step? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/services">View All Services</Link>
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
