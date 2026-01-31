import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Building2,
  Cpu,
  Factory,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facilities = [
  {
    flag: "🇭🇰",
    name: "Asia Pacific Engineering Center",
    location: "Greater Bay Area",
    role: "NPI & Engineering Center",
    description: "Our Asia Pacific facility is the heart of our rapid prototyping and engineering capabilities. Located in one of the world's leading electronics manufacturing regions, we have immediate access to a comprehensive supply chain ecosystem.",
    features: [
      "Advanced SMT lines with 0201 capability",
      "Rapid prototyping center (72-hour turnaround)",
      "Engineering lab with full testing equipment",
      "DFM review and optimization team",
      "Small-batch production (50-5000 units)",
    ],
    image: "/images/factory-tour-hero.png",
  },
  {
    flag: "🇮🇩",
    name: "Indonesia Production Center",
    location: "Batam Free Trade Zone",
    role: "Mass Production Hub",
    description: "Our Indonesia facility in the Batam Free Trade Zone offers the perfect combination of cost efficiency and quality. Strategic location enables optimized landed costs for US customers.",
    features: [
      "50,000 sq ft production floor",
      "High-volume SMT and assembly lines",
      "Injection molding center",
      "Box build and system integration",
      "ISO 9001:2015 certified",
    ],
    image: "/images/about-overseas-warehouse.png",
  },
];

const copyExactSteps = [
  {
    step: "01",
    title: "Process Documentation",
    description: "Every process parameter, tool setting, and quality checkpoint is documented in detail.",
  },
  {
    step: "02",
    title: "Equipment Calibration",
    description: "Identical equipment is calibrated to match NPI center specifications exactly.",
  },
  {
    step: "03",
    title: "Operator Training",
    description: "Indonesian operators are trained by our engineering team on exact procedures.",
  },
  {
    step: "04",
    title: "Pilot Verification",
    description: "First production batch is verified against engineering center golden samples.",
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

export default function FactoryTour() {
  return (
    <>
      <SEO
        title="Factory Tour | Asia Pacific & Indonesia Manufacturing Facilities | Illuminious"
        description="Tour our manufacturing facilities in Asia Pacific and Indonesia. See our SMT lines, engineering labs, and mass production capabilities. Book a virtual or in-person tour."
        keywords="factory tour, manufacturing facility, Asia Pacific factory, Indonesia factory, electronics manufacturing"
        url="/factory-tour"
      />
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative pt-32 pb-20 bg-illuminious-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Virtual Factory Tour
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Where Your Products Come to Life
            </h1>
            <p className="text-xl text-illuminious-light/80 mb-8">
              Take a virtual tour of our state-of-the-art manufacturing facilities 
              in Asia Pacific and Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/contact">
                  Book a Live Tour
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-illuminious-navy/50 border border-white/10">
              <img
                src="/images/factory-tour-hero.png"
                alt="Factory Tour Video"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-illuminious-sky flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-illuminious-navy ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/80 text-sm">Click to watch our facility overview video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Manufacturing Facilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Two strategically located facilities designed to optimize for speed, cost, and quality.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {facilities.map((facility, index) => (
              <AnimatedSection key={facility.name} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{facility.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-illuminious-navy">{facility.name}</h3>
                        <p className="text-illuminious-blue">{facility.location}</p>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-illuminious-light text-illuminious-navy text-sm font-medium mb-4">
                      {facility.role}
                    </span>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {facility.description}
                    </p>
                    <ul className="space-y-3">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Copy Exact Promise */}
      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The "Copy Exact" Promise
            </h2>
            <p className="text-lg text-muted-foreground">
              When we transfer production from our NPI center to Indonesia, we don't just move it—we 
              replicate it exactly. Every process, every parameter, every quality standard.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copyExactSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light h-full">
                  <div className="text-4xl font-bold text-illuminious-light mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-illuminious-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Tour Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the tour format that works best for you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light h-full">
                <div className="w-14 h-14 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-illuminious-blue" />
                </div>
                <h3 className="text-xl font-bold text-illuminious-navy mb-2">Virtual Tour</h3>
                <p className="text-muted-foreground mb-4">
                  Join a live video tour with one of our engineers. See our facilities in real-time 
                  and ask questions as we walk through the production floor.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    45-minute live session
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Q&A with engineers
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    No travel required
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full"
                >
                  <Link href="/contact">Schedule Virtual Tour</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-illuminious-light h-full">
                <div className="w-14 h-14 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-illuminious-blue" />
                </div>
                <h3 className="text-xl font-bold text-illuminious-navy mb-2">In-Person Tour</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our facilities in person. We'll arrange everything from airport pickup 
                  to hotel accommodations for a comprehensive factory visit.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Full-day facility tour
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Meet the team
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-illuminious-blue" />
                    Travel assistance provided
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full"
                >
                  <Link href="/contact">Plan Your Visit</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See Our Capabilities?
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Book a tour today and see firsthand why leading companies trust us 
              with their manufacturing needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Book a Tour
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
