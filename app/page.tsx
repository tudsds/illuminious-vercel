import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Globe,
  Lightbulb,
  CheckCircle,
  ChevronRight,
  Scale,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { FadeInUp, ScrollIndicator } from "@/components/HomeHeroAnimations";

const stats = [
  { value: "500+", label: "Products Delivered" },
  { value: "50+", label: "Global Partners" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export const metadata = {
  title: "US-Managed Electronics Manufacturing | Indonesia & China | Illuminious",
  description: "Mitigate risk with our global manufacturing strategy. US engineering, Shenzhen speed, and Southeast Asian scale. Get a quote today.",
  keywords: "China Plus Two Strategy, Supply Chain Resilience, Vietnam vs China Manufacturing, tariff free assembly, NPI services, electronics manufacturing",
};

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-global-supply-chain.jpg"
            alt="Global Supply Chain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-blue-700/70" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/80 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-sky-400/30">
                <Globe className="w-4 h-4" />
                The New Standard for Resilient Manufacturing
              </span>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                From the First 100 to the{" "}
                <span className="text-sky-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Next 1 Million</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 md:mb-4 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                US Engineering. Shenzhen Speed. Southeast Asia Scale.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.25}>
              <p className="text-base sm:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Accelerate NPI in Shenzhen. Scale duty-free in Southeast Asia.
                Managed securely from our Palo Alto HQ.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-sky-400 rounded-full px-8"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Book a Factory Tour</Link>
              </Button>
            </FadeInUp>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* Rest of the page content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Stop Choosing Between Cost and Safety
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver the perfect balance. Whether you&apos;re an innovator building your first prototype
              or an enterprise scaling to millions, we have the right solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Innovators */}
            <Link href="/services/npi-engineering">
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-sky-100/50 to-white border-2 border-sky-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4">
                  For Innovators
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                  Need Engineering & NPI?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Leverage our Shenzhen engineering center for rapid iteration.
                  From concept to &quot;Golden Sample&quot; in days, not weeks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    72-Hour Rapid Prototyping
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    DFM Review & Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Small-Batch Pilot Runs
                  </li>
                </ul>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Explore NPI Services
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* For Scaling */}
            <Link href="/services/box-build">
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/5 to-white border-2 border-sky-200 hover:border-blue-900 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-blue-900/10 flex items-center justify-center">
                  <Factory className="w-8 h-8 text-blue-900" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-900/10 text-blue-900 text-sm font-medium mb-4">
                  For Scaling
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                  Need Cost Reduction & Volume?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Utilize our Southeast Asian facilities for tariff-free mass production
                  with unbeatable labor costs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                    Tariff Optimization Solutions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                    High-Volume Assembly
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                    Non-China BOM Sourcing
                  </li>
                </ul>
                <span className="inline-flex items-center text-blue-900 font-medium group-hover:gap-2 transition-all">
                  Explore Mass Production
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need rapid prototyping or high-volume production,
              our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-900 rounded-full px-8"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-sky-100 rounded-full px-8"
              >
                <Link href="/factory-tour">Schedule a DFM Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
