import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const newsItems = [
  {
    id: 1,
    slug: "illuminious-expands-manufacturing-capacity",
    title: "Illuminious Expands Manufacturing Capacity in Southeast Asia",
    excerpt: "We are excited to announce a significant expansion of our manufacturing capabilities in the Batam Free Trade Zone, Indonesia. This expansion includes a new 50,000 sq ft facility dedicated to high-volume electronics assembly.",
    content: `
      <h2>Major Expansion Announcement</h2>
      <p>Illuminious is proud to announce a significant expansion of our manufacturing capabilities in the Batam Free Trade Zone, Indonesia. This strategic investment represents our commitment to providing world-class manufacturing services to our growing customer base.</p>
      
      <h2>New Facility Details</h2>
      <p>The new 50,000 square foot facility features:</p>
      <ul>
        <li>State-of-the-art SMT lines with 0201 capability</li>
        <li>Dedicated clean room space for medical device assembly</li>
        <li>Advanced automated optical inspection (AOI) systems</li>
        <li>Expanded box build and system integration capacity</li>
      </ul>
      
      <h2>Strategic Benefits</h2>
      <p>This expansion enables us to better serve customers seeking diversified manufacturing options. The Batam Free Trade Zone location provides significant advantages including streamlined customs processes and optimized logistics to major global markets.</p>
      
      <h2>Looking Ahead</h2>
      <p>With this expansion, Illuminious is well-positioned to support the growing demand for electronics manufacturing services from innovative companies worldwide. We remain committed to delivering exceptional quality and service to all our partners.</p>
    `,
    publishedAt: new Date("2026-01-15"),
    readTime: 3,
    featuredImage: "/images/about-factory-equipment.jpg",
    category: "Company News",
  },
  {
    id: 2,
    slug: "partnership-with-future-factory",
    title: "Strategic Partnership with Future Factory Announced",
    excerpt: "Illuminious partners with Future Factory to enhance AI hardware manufacturing capabilities and startup support services, creating a comprehensive ecosystem for hardware innovation.",
    content: `
      <h2>Partnership Announcement</h2>
      <p>Illuminious is pleased to announce a strategic partnership with Future Factory, a leading hardware accelerator focused on AI and emerging technology products. This collaboration brings together manufacturing excellence and startup ecosystem expertise.</p>
      
      <h2>Partnership Scope</h2>
      <p>Through this partnership, we will offer:</p>
      <ul>
        <li>Preferential manufacturing terms for Future Factory portfolio companies</li>
        <li>Dedicated NPI support for early-stage hardware startups</li>
        <li>Joint DFM workshops and engineering resources</li>
        <li>Streamlined prototype-to-production pathways</li>
      </ul>
      
      <h2>Supporting Innovation</h2>
      <p>This partnership reflects our shared commitment to supporting hardware innovation. By combining Future Factory's startup expertise with Illuminious's manufacturing capabilities, we create a powerful ecosystem for bringing new products to market.</p>
      
      <h2>Getting Started</h2>
      <p>Startups interested in leveraging this partnership can apply through Future Factory's accelerator program or contact Illuminious directly for manufacturing inquiries.</p>
    `,
    publishedAt: new Date("2026-01-10"),
    readTime: 4,
    featuredImage: "/images/about-global-network.jpg",
    category: "Partnership",
  },
  {
    id: 3,
    slug: "new-us-warehouse-facility",
    title: "New US Warehouse Facility Now Operational",
    excerpt: "Our new state-of-the-art fulfillment center in Los Angeles is now fully operational, enabling faster delivery times and improved inventory management for North American customers.",
    content: `
      <h2>US Operations Expansion</h2>
      <p>Illuminious is excited to announce that our new US warehouse and fulfillment center in Los Angeles is now fully operational. This facility represents a significant investment in our North American operations.</p>
      
      <h2>Facility Capabilities</h2>
      <p>The new facility offers:</p>
      <ul>
        <li>20,000 sq ft of warehouse and fulfillment space</li>
        <li>Same-day shipping for orders placed before 2 PM PST</li>
        <li>Real-time inventory visibility through customer portal</li>
        <li>Kitting and light assembly services</li>
        <li>Returns processing and quality inspection</li>
      </ul>
      
      <h2>Customer Benefits</h2>
      <p>With this new facility, customers can expect significantly reduced lead times for US deliveries. Products manufactured at our overseas facilities can be pre-positioned in the US warehouse, enabling rapid fulfillment to end customers.</p>
      
      <h2>Integrated Operations</h2>
      <p>The US warehouse is fully integrated with our global manufacturing operations, providing seamless visibility and control over the entire supply chain from production to final delivery.</p>
    `,
    publishedAt: new Date("2026-01-05"),
    readTime: 2,
    featuredImage: "/images/about-overseas-warehouse.jpg",
    category: "Operations",
  },
  {
    id: 4,
    slug: "iso-13485-certification-achieved",
    title: "Illuminious Achieves ISO 13485 Certification for Medical Devices",
    excerpt: "Our manufacturing facilities have successfully achieved ISO 13485:2016 certification, enabling us to serve medical device customers with the highest quality standards.",
    content: `
      <h2>Certification Achievement</h2>
      <p>Illuminious is proud to announce that our manufacturing facilities have achieved ISO 13485:2016 certification, the international standard for medical device quality management systems.</p>
      
      <h2>What This Means</h2>
      <p>ISO 13485 certification demonstrates our commitment to:</p>
      <ul>
        <li>Consistent quality management for medical devices</li>
        <li>Regulatory compliance with FDA and international requirements</li>
        <li>Risk-based approach to product development and manufacturing</li>
        <li>Full traceability and documentation control</li>
      </ul>
      
      <h2>Expanded Capabilities</h2>
      <p>With this certification, we can now support medical device customers through the entire product lifecycle, from design and development through manufacturing and post-market activities.</p>
      
      <h2>Commitment to Quality</h2>
      <p>This certification reflects our ongoing commitment to maintaining the highest quality standards across all our manufacturing operations. We continue to invest in quality systems and capabilities to serve our customers' evolving needs.</p>
    `,
    publishedAt: new Date("2025-12-20"),
    readTime: 3,
    featuredImage: "/images/industry-medical.jpg",
    category: "Certification",
  },
  {
    id: 5,
    slug: "q4-2025-industry-outlook",
    title: "Q4 2025 Electronics Manufacturing Industry Outlook",
    excerpt: "Our analysis of key trends shaping the electronics manufacturing industry, including supply chain developments, technology advances, and market dynamics.",
    content: `
      <h2>Industry Overview</h2>
      <p>As we close out 2025, the electronics manufacturing industry continues to evolve rapidly. This outlook examines key trends and developments that will shape the industry in the coming year.</p>
      
      <h2>Supply Chain Trends</h2>
      <p>Key supply chain developments include:</p>
      <ul>
        <li>Continued diversification of manufacturing locations</li>
        <li>Increased focus on supply chain resilience</li>
        <li>Growing adoption of digital supply chain tools</li>
        <li>Emphasis on sustainability and ESG compliance</li>
      </ul>
      
      <h2>Technology Advances</h2>
      <p>Manufacturing technology continues to advance with increased automation, AI-powered quality inspection, and advanced materials enabling new product capabilities.</p>
      
      <h2>Market Dynamics</h2>
      <p>Strong demand continues in IoT, wearables, and industrial electronics sectors. Medical devices and automotive electronics also show robust growth as these industries embrace digital transformation.</p>
      
      <h2>Looking Ahead</h2>
      <p>We expect 2026 to bring continued growth opportunities for companies that can navigate the evolving landscape with agility and innovation.</p>
    `,
    publishedAt: new Date("2025-12-15"),
    readTime: 5,
    featuredImage: "/images/news-industry.jpg",
    category: "Industry Insights",
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
        title="News | Company Updates & Announcements | Illuminious"
        description="Stay updated with the latest news from Illuminious. Company announcements, partnerships, certifications, and industry insights."
        keywords="illuminious news, company news, electronics manufacturing news, supply chain updates"
        url="/news"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed about the latest developments, announcements, and industry insights from Illuminious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection>
            <Link href={`/news/${newsItems[0].slug}`}>
              <div className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={newsItems[0].featuredImage}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium text-illuminious-blue bg-illuminious-light/50 px-3 py-1 rounded-full w-fit mb-4">
                    {newsItems[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-illuminious-navy mb-4 group-hover:text-illuminious-blue transition-colors">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(newsItems[0].publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {newsItems[0].readTime} min read
                    </span>
                  </div>
                  <div className="flex items-center text-illuminious-blue font-medium">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Link href={`/news/${item.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.featuredImage}
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
                          {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime} min read
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-illuminious-light/80 mb-6">
              Get the latest news and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-illuminious-sky"
              />
              <Button className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-6">
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
