"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Rocket,
  Shield,
  Users,
  Code,
  Cpu,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const benefits = [
  {
    icon: Zap,
    title: "Preferential Pricing",
    description: "Access exclusive startup-friendly pricing on all manufacturing services.",
  },
  {
    icon: Rocket,
    title: "Fast-Track Production",
    description: "Priority scheduling to get your products to market faster.",
  },
  {
    icon: Shield,
    title: "Flexible MOQ",
    description: "Lower minimum order quantities designed for early-stage companies.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager who understands startup needs.",
  },
  {
    icon: Code,
    title: "DFM Consultation",
    description: "Free design for manufacturing review to optimize your product.",
  },
  {
    icon: Cpu,
    title: "Prototype to Scale",
    description: "Seamless transition from prototype to mass production.",
  },
];

const journey = [
  {
    phase: "01",
    title: "Ideation & Design",
    description: "We help refine your concept and optimize for manufacturing from day one.",
  },
  {
    phase: "02",
    title: "Rapid Prototyping",
    description: "Quick iterations to validate your design and gather user feedback.",
  },
  {
    phase: "03",
    title: "Pilot Production",
    description: "Small batch production for market testing and investor demos.",
  },
  {
    phase: "04",
    title: "Mass Production",
    description: "Scale up with confidence using our proven manufacturing processes.",
  },
];

const testimonials = [
  {
    quote: "Illuminious understood our startup constraints and helped us launch our AI wearable on time and on budget.",
    author: "Sarah Chen",
    role: "CEO, TechWear AI",
  },
  {
    quote: "The team&apos;s expertise in DFM saved us months of development time and significant costs.",
    author: "Michael Park",
    role: "Founder, RoboCompanion",
  },
];

export const metadata = {
  title: "Illuminious Startups Program",
  description: "Join the Illuminious Startups Program for preferential pricing, dedicated support, and a fast-track path from prototype to mass production.",
};

export default function Startups() {
  return (
    <>
      <Header />

      {/* Cyberpunk Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)`
        }} />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Co-branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-6 mb-8"
            >
              <img src="/images/illuminious-logo-white.png" alt="Illuminious" className="h-12 w-12" />
              <span className="text-cyan-400 text-2xl font-bold">×</span>
              <img src="/images/future-factory-logo.png" alt="Future Factory" className="h-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4" />
              For Hardware Innovators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Illuminious</span>
              <br />
              <span className="text-white">Startups Program</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We love working with hardware startups. As your experienced partner,
              we break down information barriers and provide end-to-end support from
              design to mass production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-cyan-400 text-black hover:bg-cyan-400/90 rounded-full px-8 font-semibold"
              >
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/20 rounded-full px-8"
              >
                <a href="#benefits">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-black">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Exclusive Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for <span className="text-cyan-400">Startups</span>
            </h2>
            <p className="text-lg text-gray-400">
              We understand the unique challenges of hardware startups and have
              designed our program to address them head-on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Factory Partnership */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-400 text-sm font-medium mb-6">
                Strategic Partnership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powered by <span className="text-cyan-400">Future Factory</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Through our partnership with Future Factory in Shenzhen, we offer
                unparalleled access to AI hardware manufacturing expertise. Their
                specialization in AI glasses, companion robots, and wearables
                complements our global supply chain capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI hardware design expertise",
                  "Cutting-edge prototyping capabilities",
                  "Access to Shenzhen&apos;s electronics ecosystem",
                  "Integrated R&D and manufacturing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/ai-smart-glasses.jpg"
                  alt="AI Smart Glasses"
                  className="rounded-xl border border-purple-500/30"
                />
                <img
                  src="/images/ai-smart-ring.jpg"
                  alt="AI Smart Ring"
                  className="rounded-xl border border-purple-500/30 mt-8"
                />
                <img
                  src="/images/ai-smart-pendant.jpg"
                  alt="AI Smart Pendant"
                  className="rounded-xl border border-purple-500/30"
                />
                <img
                  src="/images/ai-wearable-pin.jpg"
                  alt="AI Wearable Pin"
                  className="rounded-xl border border-purple-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the <span className="text-cyan-400">Future</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the Illuminious Startups Program and turn your hardware vision
              into reality. Apply today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyan-400 text-black hover:bg-cyan-400/90 rounded-full px-10 font-semibold"
              >
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500 text-white hover:bg-purple-500/20 rounded-full px-10"
              >
                <a href="mailto:startups@illuminious.com">Email Us</a>
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
