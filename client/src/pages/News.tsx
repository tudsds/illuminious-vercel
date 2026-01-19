import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sample news data - in production this would come from the database
const newsItems = [
  {
    id: 1,
    slug: "illuminious-expands-manufacturing-capacity",
    title: "Illuminious Expands Manufacturing Capacity in Southeast Asia",
    excerpt: "We are excited to announce a significant expansion of our manufacturing capabilities in the Batam Free Trade Zone, Indonesia.",
    date: "2026-01-15",
    readTime: "3 min read",
    image: "/images/about-factory-equipment.png",
    category: "Company News",
  },
  {
    id: 2,
    slug: "partnership-with-future-factory",
    title: "Strategic Partnership with Future Factory Announced",
    excerpt: "Illuminious partners with Future Factory to enhance AI hardware manufacturing capabilities and startup support services.",
    date: "2026-01-10",
    readTime: "4 min read",
    image: "/images/about-global-network.png",
    category: "Partnership",
  },
  {
    id: 3,
    slug: "new-us-warehouse-facility",
    title: "New US Warehouse Facility Now Operational",
    excerpt: "Our new state-of-the-art fulfillment center is now fully operational, enabling faster delivery times for North American customers.",
    date: "2026-01-05",
    readTime: "2 min read",
    image: "/images/about-overseas-warehouse.png",
    category: "Operations",
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

export default function News() {
  return (
    <>
      <SEO
        title="News"
        description="Stay updated with the latest news from Illuminious. Company announcements, partnerships, and industry insights."
        keywords="illuminious news, company news, electronics manufacturing news, supply chain updates"
        url="/news"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-illuminious-light overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ color: '#132843' }}>
              News & Updates
            </h1>
            <p className="text-xl text-illuminious-navy/70">
              Stay informed about the latest developments at Illuminious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Link href={`/news/${item.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-medium text-illuminious-blue bg-illuminious-light/50 px-3 py-1 rounded-full w-fit mb-3">
                        {item.category}
                      </span>
                      <h2 className="text-xl font-semibold text-illuminious-navy mb-3 group-hover:text-illuminious-blue transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          <AnimatedSection className="text-center mt-12">
            <Button
              variant="outline"
              className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-8"
            >
              Load More News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest news and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-illuminious-light focus:border-illuminious-blue focus:outline-none"
              />
              <Button className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-6">
                Subscribe
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
