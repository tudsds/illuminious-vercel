import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, User, Loader2, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trpc } from "@/lib/trpc";
import { useState } from "react";

// Rich blog content for SEO and user engagement
const fallbackBlogPosts = [
  {
    id: 1,
    slug: "choosing-right-manufacturing-partner",
    title: "How to Choose the Right Manufacturing Partner for Your Hardware Startup",
    excerpt: "Selecting the right manufacturing partner is one of the most critical decisions for hardware startups. Learn the key factors to consider including quality systems, communication, and scalability.",
    publishedAt: new Date("2026-01-12"),
    readTime: 8,
    authorName: "Illuminious Team",
    featuredImage: "/images/about-factory-equipment.png",
    category: "Startup Guide",
  },
  {
    id: 2,
    slug: "dfm-best-practices",
    title: "Design for Manufacturing: Best Practices for Electronics Products",
    excerpt: "Implementing DFM principles early in your product development can save significant time and money. Here's how to get it right from the start.",
    publishedAt: new Date("2026-01-08"),
    readTime: 10,
    authorName: "Illuminious Team",
    featuredImage: "/images/service-dfm-design.png",
    category: "Technical",
  },
  {
    id: 3,
    slug: "ai-hardware-trends-2026",
    title: "AI Hardware Trends to Watch in 2026",
    excerpt: "From smart glasses to companion robots, AI hardware is evolving rapidly. Explore the trends shaping the industry this year.",
    publishedAt: new Date("2026-01-03"),
    readTime: 6,
    authorName: "Illuminious Team",
    featuredImage: "/images/service-ai-glasses.png",
    category: "Industry Insights",
  },
  {
    id: 4,
    slug: "supply-chain-diversification-strategy",
    title: "Supply Chain Diversification: Building a Resilient Manufacturing Network",
    excerpt: "Learn how leading companies are diversifying their manufacturing footprint with Indonesia and Southeast Asia while maintaining engineering excellence.",
    publishedAt: new Date("2025-12-28"),
    readTime: 9,
    authorName: "Illuminious Team",
    featuredImage: "/images/about-global-network.png",
    category: "Supply Chain",
  },
  {
    id: 5,
    slug: "iot-device-manufacturing-guide",
    title: "Complete Guide to IoT Device Manufacturing",
    excerpt: "From RF design considerations to wireless certification, everything you need to know about manufacturing connected devices.",
    publishedAt: new Date("2025-12-20"),
    readTime: 12,
    authorName: "Illuminious Team",
    featuredImage: "/images/hero-global-supply-chain.png",
    category: "Technical",
  },
  {
    id: 6,
    slug: "medical-device-manufacturing-fda",
    title: "FDA Compliance in Medical Device Manufacturing",
    excerpt: "Understanding 510(k) requirements, ISO 13485, and what to look for in a medical device manufacturing partner.",
    publishedAt: new Date("2025-12-15"),
    readTime: 11,
    authorName: "Illuminious Team",
    featuredImage: "/images/industry-medical.png",
    category: "Regulated Industries",
  },
];

const categories = [
  "All",
  "Startup Guide",
  "Technical",
  "Industry Insights",
  "Supply Chain",
  "Regulated Industries",
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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: dbPosts, isLoading } = trpc.posts.list.useQuery({
    type: "blog",
    publishedOnly: true,
  });

  const blogPosts = dbPosts && dbPosts.length > 0 ? dbPosts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || post.content.substring(0, 150) + "...",
    publishedAt: post.publishedAt || post.createdAt,
    readTime: post.readTime || Math.ceil(post.content.length / 1000),
    authorName: post.authorName || "Illuminious Team",
    featuredImage: post.featuredImage || "/images/about-factory-equipment.png",
    category: post.category || "Blog",
  })) : fallbackBlogPosts;

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog | Electronics Manufacturing Insights | Illuminious"
        description="Expert insights on electronics manufacturing, supply chain optimization, DFM best practices, and hardware startup guides from the Illuminious team."
        keywords="electronics manufacturing blog, hardware startup guide, supply chain insights, DFM best practices, supply chain diversification"
        url="/blog"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
              Manufacturing Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert guides, industry insights, and practical knowledge for hardware entrepreneurs 
              and manufacturing professionals.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full border-illuminious-light"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-illuminious-light bg-white sticky top-20 z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-illuminious-blue text-white"
                    : "bg-illuminious-light/50 text-illuminious-navy hover:bg-illuminious-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-illuminious-blue" />
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16">
              <div className="container">
                <AnimatedSection>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <article className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg border border-illuminious-light hover:shadow-xl transition-shadow">
                      <div className="aspect-video md:aspect-auto overflow-hidden">
                        <img
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <span className="text-xs font-medium text-white bg-illuminious-blue px-3 py-1 rounded-full w-fit mb-4">
                          Featured
                        </span>
                        <span className="text-sm text-illuminious-blue mb-2">{featuredPost.category}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-illuminious-navy mb-4 group-hover:text-illuminious-blue transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.authorName}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime} min read
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* Blog Grid */}
          {otherPosts.length > 0 && (
            <section className="py-12 bg-illuminious-light/30">
              <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post, index) => (
                    <AnimatedSection key={post.id} delay={index * 0.1}>
                      <Link href={`/blog/${post.slug}`}>
                        <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <span className="text-xs font-medium text-illuminious-blue mb-2">
                              {post.category}
                            </span>
                            <h2 className="text-xl font-semibold text-illuminious-navy mb-3 group-hover:text-illuminious-blue transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime} min read
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
          )}
        </>
      )}

      {filteredPosts.length === 0 && !isLoading && (
        <div className="text-center py-20">
          <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
          >
            Clear filters
          </Button>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-illuminious-light/80 mb-8">
              Get the latest manufacturing insights and industry updates delivered to your inbox.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Subscribe to Updates
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
