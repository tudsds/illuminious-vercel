import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trpc } from "@/lib/trpc";

// Fallback blog data for when database is empty
const fallbackBlogPosts = [
  {
    id: 1,
    slug: "choosing-right-manufacturing-partner",
    title: "How to Choose the Right Manufacturing Partner for Your Hardware Startup",
    excerpt: "Selecting the right manufacturing partner is one of the most critical decisions for hardware startups. Learn the key factors to consider.",
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
    excerpt: "Implementing DFM principles early in your product development can save significant time and money. Here's how to get it right.",
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
    slug: "supply-chain-optimization",
    title: "Optimizing Your Electronics Supply Chain for Global Markets",
    excerpt: "Learn strategies to build a resilient and efficient supply chain that can serve customers worldwide.",
    publishedAt: new Date("2025-12-28"),
    readTime: 7,
    authorName: "Illuminious Team",
    featuredImage: "/images/about-global-network.png",
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

export default function Blog() {
  const { data: dbPosts, isLoading } = trpc.posts.list.useQuery({
    type: "blog",
    publishedOnly: true,
  });

  // Use database posts if available, otherwise use fallback
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

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog"
        description="Insights, guides, and industry knowledge from the Illuminious team. Learn about electronics manufacturing, supply chain, and hardware startups."
        keywords="electronics manufacturing blog, hardware startup guide, supply chain insights, DFM best practices"
        url="/blog"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#132843' }}>
              Insights & Resources
            </h1>
            <p className="text-xl text-illuminious-navy/70">
              Expert knowledge and practical guides for hardware entrepreneurs and manufacturers.
            </p>
          </motion.div>
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

      {blogPosts.length === 0 && !isLoading && (
        <div className="text-center py-20 text-muted-foreground">
          No blog posts available at the moment.
        </div>
      )}

      <Footer />
      <FloatingContact />
    </>
  );
}
