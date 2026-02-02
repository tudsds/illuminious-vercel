import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Factory Tour | Illuminious",
  description: "Book a virtual or in-person factory tour to see our manufacturing capabilities.",
};

export default function FactoryTour() {
  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Factory Tour</h1>
            <p className="text-xl text-white/80">
              See our manufacturing capabilities firsthand. Book a virtual or in-person tour.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Virtual Tour</h3>
              <p className="text-muted-foreground mb-6">
                Take a virtual tour of our facilities from anywhere in the world.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/contact">Schedule Virtual Tour <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">In-Person Tour</h3>
              <p className="text-muted-foreground mb-6">
                Visit our facilities in Shenzhen or Indonesia in person.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/contact">Schedule In-Person Tour <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
