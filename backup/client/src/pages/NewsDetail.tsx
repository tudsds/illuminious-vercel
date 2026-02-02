import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import { newsItems } from "./News";

export default function NewsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const news = newsItems.find(item => item.slug === slug);

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-illuminious-navy mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild className="bg-illuminious-blue text-white rounded-full">
              <Link href="/news">Back to News</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareUrl = `https://illuminious.com/news/${slug}`;

  return (
    <>
      <SEO
        title={`${news.title} | News | Illuminious`}
        description={news.excerpt}
        keywords="illuminious news, company update, electronics manufacturing"
        url={`/news/${slug}`}
        type="article"
        publishedTime={news.publishedAt.toISOString()}
        image={news.featuredImage}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-illuminious-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/news" className="inline-flex items-center gap-2 text-illuminious-blue hover:text-illuminious-navy mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
            <span className="block text-sm font-medium text-illuminious-blue bg-illuminious-light px-3 py-1 rounded-full w-fit mb-4">
              {news.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-6">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(news.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {news.readTime} min read
              </span>
            </div>
            
            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                Share:
              </span>
              <SocialShare url={shareUrl} title={news.title} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={news.featuredImage}
              alt={news.title}
              className="w-full rounded-2xl shadow-lg mb-12"
            />

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-illuminious-light/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-muted-foreground">Found this article helpful? Share it:</span>
            <SocialShare url={shareUrl} title={news.title} />
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-illuminious-navy mb-8">More News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.filter(item => item.slug !== slug).slice(0, 3).map((item) => (
              <Link key={item.id} href={`/news/${item.slug}`}>
                <article className="group bg-white rounded-xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-illuminious-blue">{item.category}</span>
                    <h3 className="text-lg font-semibold text-illuminious-navy mt-1 line-clamp-2 group-hover:text-illuminious-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
