"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@illuminious.com",
    href: "mailto:info@illuminious.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 424-626-3312",
    href: "tel:+14246263312",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Palo Alto, CA, USA",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM PST",
    href: null,
  },
];

const offices = [
  {
    location: "United States",
    city: "Palo Alto, CA",
    type: "Headquarters",
    flag: "🇺🇸",
  },
  {
    location: "Hong Kong",
    city: "Hong Kong SAR",
    type: "R&D Center",
    flag: "🇭🇰",
  },
  {
    location: "China",
    city: "Shenzhen, GD",
    type: "Production Center",
    flag: "🇨🇳",
  },
  {
    location: "Indonesia",
    city: "Batam Island FTZ",
    type: "Production Center",
    flag: "🇮🇩",
  },
];

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
          message: formData.message,
          source: "contact_page",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      // GTM tracking for form submission
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'contact_form_submit',
          form_type: 'contact_page'
        });
      }

      router.push('/thank-you');
    } catch (error) {
      alert("Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'email_click',
        email: 'info@illuminious.com'
      });
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 text-black text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Let&apos;s Talk
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-900/70">
              Ready to start your project? Contact us for a free consultation and
              quote. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-sky-200 focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border-sky-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-sky-200 focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-sky-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-sky-200 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, requirements, and any specific questions you have..."
                      className="border-sky-200 focus:border-blue-600 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-900 rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-blue-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            onClick={item.title === "Email" ? handleEmailClick : undefined}
                            className="text-white hover:text-sky-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-sky-100">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900">
                    Global Offices
                  </h3>
                </div>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.location}
                      className="flex items-start gap-3 p-3 rounded-lg bg-sky-50"
                    >
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <p className="font-medium text-blue-900">
                          {office.location}
                        </p>
                        <p className="text-xs text-blue-900/70">{office.city}</p>
                        <p className="text-sm text-blue-600">{office.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Prefer Email?
                </h3>
                <p className="text-sm text-blue-900/70 mb-4">
                  Send us a direct email and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:info@illuminious.com"
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@illuminious.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
