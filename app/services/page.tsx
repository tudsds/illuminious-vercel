import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const services = [
  {
    title: "NPI & Engineering",
    description: "Rapid prototyping and new product introduction services.",
    href: "/services/npi-engineering",
  },
  {
    title: "ODM Services",
    description: "End-to-end design and manufacturing solutions.",
    href: "/services/odm",
  },
  {
    title: "OEM Manufacturing",
    description: "Original equipment manufacturing with high quality standards.",
    href: "/services/oem",
  },
  {
    title: "EMS Services",
    description: "Electronic manufacturing services for complex assemblies.",
    href: "/services/ems",
  },
  {
    title: "PCB Assembly",
    description: "High-quality PCB assembly and testing.",
    href: "/services/pcb-assembly",
  },
  {
    title: "Box Build",
    description: "Complete product assembly and packaging.",
    href: "/services/box-build",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "IP Protection",
    description: "US contracts and strict confidentiality protocols",
  },
  {
    icon: Zap,
    title: "Rapid Turnaround",
    description: "72-hour prototyping, fast iteration cycles",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "US HQ, China engineering, Indonesia production",
  },
];

export const metadata = {
  title: "Our Services | Illuminious",
  description: "Comprehensive electronics manufacturing services from NPI to mass production.",
};

export default function Services() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              From concept to mass production, we provide end-to-end electronics manufacturing services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="group p-6 rounded-2xl bg-sky-50 hover:bg-blue-50 border border-sky-100 transition-colors h-full">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <Button asChild size="lg" className="bg-sky-400 text-blue-900 hover:bg-sky-300 rounded-full px-8">
            <Link href="/contact">
              Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
