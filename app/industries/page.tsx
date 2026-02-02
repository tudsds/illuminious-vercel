import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const industries = [
  {
    title: "Medical Devices",
    description: "FDA-registered manufacturing for medical electronics.",
    href: "/industries/medical",
  },
  {
    title: "Automotive",
    description: "IATF 16949 certified automotive electronics manufacturing.",
    href: "/industries/automotive",
  },
  {
    title: "Consumer Electronics",
    description: "From wearables to smart home devices.",
    href: "/industries/consumer",
  },
  {
    title: "IoT & Smart Devices",
    description: "Connected device manufacturing and testing.",
    href: "/industries/iot",
  },
  {
    title: "Industrial",
    description: "Rugged electronics for industrial applications.",
    href: "/industries/industrial",
  },
];

export const metadata = {
  title: "Industries We Serve | Illuminious",
  description: "Electronics manufacturing expertise across medical, automotive, consumer, IoT, and industrial sectors.",
};

export default function Industries() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/80">
              Specialized manufacturing expertise across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link key={industry.title} href={industry.href}>
                <div className="group p-6 rounded-2xl bg-sky-50 hover:bg-blue-50 border border-sky-100 transition-colors h-full">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
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
