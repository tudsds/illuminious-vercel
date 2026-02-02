import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = "/images/illuminious-logo-main.jpg",
  url,
  type = "website",
  publishedTime,
  author,
}: SEOProps) {
  const fullTitle = `${title} | Illuminious - Global Electronics Supply Chain`;
  const siteUrl = "https://illuminious.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMeta("description", description);
    if (keywords) {
      updateMeta("keywords", keywords);
    }

    // Open Graph tags
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", fullImage, true);
    updateMeta("og:url", fullUrl, true);
    updateMeta("og:type", type, true);
    updateMeta("og:site_name", "Illuminious", true);

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", fullImage);

    // Article specific tags
    if (type === "article" && publishedTime) {
      updateMeta("article:published_time", publishedTime, true);
      if (author) {
        updateMeta("article:author", author, true);
      }
    }

    // Structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "Organization",
      name: type === "article" ? title : "Illuminious LLC",
      description: description,
      url: fullUrl,
      logo: `${siteUrl}/images/illuminious-logo-main.png`,
      ...(type === "article" && {
        headline: title,
        image: fullImage,
        datePublished: publishedTime,
        author: {
          "@type": "Organization",
          name: author || "Illuminious",
        },
      }),
      ...(type === "website" && {
        sameAs: [
          "https://linkedin.com/company/illuminious",
          "https://twitter.com/illuminious",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@illuminious.com",
          contactType: "customer service",
        },
      }),
    };

    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup is optional since we're updating in place
    };
  }, [
    fullTitle,
    description,
    keywords,
    fullImage,
    fullUrl,
    type,
    publishedTime,
    author,
  ]);

  return null;
}
