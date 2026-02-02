import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Award,
  Users,
  Shield,
  Scale,
  Zap,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const locations = [
  {
    name: "United States",
    city: "Palo Alto, CA",
    description: "Headquarters & Legal Entity",
    flag: "🇺🇸",
    role: "The Foundation",
    details: "US contracts, IP protection, customer success",
  },
  {
    name: "Hong Kong",
    city: "Hong Kong SAR",
    description: "R&D & Engineering Center",
    flag: "🇭🇰",
    role: "The Brain",
    details: "JDM capability, hardware co-pilots",
  },
  {
    name: "China",
    city: "Shenzhen, GD",
    description: "NPI & Engineering Hub",
    flag: "🇨🇳",
    role: "The Speed",
    details: "72-hour prototyping, supply chain access",
  },
  {
    name: "Indonesia",
    city: "Batam Island FTZ",
    description: "Mass Production Center",
    flag: "🇮🇩",
    role: "The Scale",
    details: "Optimized tariffs, high-volume assembly",
  },
];

const values = [
  {
    icon: Shield,
    title: "IP Protection",
    description: "Your designs are protected by US law. We sign NDAs before any engagement and maintain strict confidentiality protocols.",
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We provide detailed cost breakdowns and work with you to optimize for your budget.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Our parallel engineering approach and supply chain access means you get to market faster than competitors.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We're not just a vendor—we're your hardware co-pilot. Your success is our success.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "ISO 14001:2015", desc: "Environmental" },
  { name: "ISO 13485", desc: "Medical Devices" },
  { name: "IATF 16949", desc: "Automotive" },
  { name: "UL Listed", desc: "Safety Certification" },
  { name: "CE Marking", desc: "EU Compliance" },
  { name: "FCC Certified", desc: "US RF Compliance" },
  { name: "RoHS Compliant", desc: "Environmental" },
];

export const metadata = {
  title: "About Illuminious | US-Managed Global Electronics Manufacturing",
  description: "Illuminious is a US-based electronics manufacturing partner with facilities in Indonesia and China. We combine Silicon Valley innovation with Asian manufacturing excellence.",
};

export default function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Manufacturing Partner
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bridging Silicon Valley Innovation with Asian Manufacturing Excellence
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              Illuminious is a US-based electronics manufacturing partner with facilities 
              in Indonesia and China. We combine the innovation of Silicon Valley with 
              the manufacturing expertise of Asia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-sky-100 rounded-full px-8"
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
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-muted-foreground">
              Four strategic locations, one unified mission: to deliver exceptional 
              electronics manufacturing services to innovative companies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div
                key={location.name}
                className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{location.flag}</span>
                  <div>
                    <h3 className="font-bold text-blue-900">{location.name}</h3>
                    <p className="text-sm text-blue-600">{location.city}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
                  {location.role}
                </span>
                <p className="text-sm text-muted-foreground mb-2">
                  {location.description}
                </p>
                <p className="text-sm text-foreground">{location.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-sky-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Quality Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Certified Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our facilities maintain the highest international standards for quality, 
              safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-gradient-to-br from-sky-50 to-white rounded-xl p-6 text-center border border-sky-100"
              >
                <h3 className="font-bold text-blue-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss how our global manufacturing network can accelerate 
              your hardware development and scale your production.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-sky-400 text-blue-900 hover:bg-sky-300 rounded-full px-8"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
