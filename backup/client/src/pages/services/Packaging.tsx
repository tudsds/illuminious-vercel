import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Package } from "lucide-react";

export default function ServicePackaging() {
  return (
    <ServicePageTemplate
      title="IC Packaging & Semiconductor Services"
      subtitle="Advanced Chip Packaging Solutions"
      description="Comprehensive IC packaging and semiconductor backend services including wire bonding, flip chip, and advanced packaging technologies. We support your chip-level integration needs from prototype to volume production."
      heroImage="/images/service-packaging.jpg"
      icon={Package}
      features={[
        {
          title: "Wire Bonding",
          description: "Gold and copper wire bonding with fine pitch capabilities for traditional and advanced packaging applications.",
        },
        {
          title: "Flip Chip Assembly",
          description: "Advanced flip chip bonding with underfill for high-performance and high-density applications.",
        },
        {
          title: "System in Package (SiP)",
          description: "Multi-die integration solutions combining multiple chips and passive components in a single package.",
        },
        {
          title: "COB/COF/COG",
          description: "Chip on Board, Chip on Flex, and Chip on Glass solutions for display and sensor applications.",
        },
        {
          title: "Module Assembly",
          description: "Complete module assembly including RF modules, power modules, and sensor modules.",
        },
        {
          title: "Testing & Characterization",
          description: "Comprehensive electrical testing, thermal characterization, and reliability qualification.",
        },
      ]}
      benefits={[
        "Advanced packaging technologies for next-gen products",
        "Cleanroom facilities with ISO Class 7 environment",
        "Fine pitch wire bonding down to 35μm pad pitch",
        "Flip chip with copper pillar and micro-bump capabilities",
        "Fan-out wafer level packaging (FOWLP) options",
        "Thermal management solutions for high-power devices",
        "Hermetic sealing for harsh environment applications",
        "AEC-Q100 qualified processes for automotive",
        "Quick turn prototyping with production scalability",
      ]}
      process={[
        {
          step: "01",
          title: "Package Design",
          description: "Collaborate on package design, substrate layout, and thermal/electrical simulations.",
        },
        {
          step: "02",
          title: "Substrate Procurement",
          description: "Source or fabricate custom substrates and leadframes to your specifications.",
        },
        {
          step: "03",
          title: "Die Attach",
          description: "Precision die placement with epoxy or eutectic die attach processes.",
        },
        {
          step: "04",
          title: "Interconnect",
          description: "Wire bonding or flip chip interconnection with process optimization.",
        },
        {
          step: "05",
          title: "Encapsulation",
          description: "Molding, glob top, or underfill application for protection and reliability.",
        },
        {
          step: "06",
          title: "Test & Ship",
          description: "Final electrical test, marking, and tape & reel packaging for delivery.",
        },
      ]}
      faqs={[
        {
          question: "What package types do you support?",
          answer: "We support QFN, QFP, BGA, LGA, CSP, SiP, and custom packages. We can also develop new package designs based on your requirements.",
        },
        {
          question: "What is your cleanroom classification?",
          answer: "Our packaging facilities operate in ISO Class 7 (Class 10,000) cleanrooms with ISO Class 5 workstations for critical processes.",
        },
        {
          question: "Do you offer wafer-level packaging?",
          answer: "Yes, we offer fan-in and fan-out wafer level packaging (FOWLP) through our partner network for high-volume applications.",
        },
        {
          question: "Can you handle automotive-grade packaging?",
          answer: "Yes, our processes are qualified to AEC-Q100 standards for automotive applications with full traceability and reliability testing.",
        },
        {
          question: "What is the minimum order for packaging services?",
          answer: "We offer flexible quantities from engineering samples (25-100 units) to high-volume production. Contact us for specific project requirements.",
        },
      ]}
      seoKeywords="IC packaging, semiconductor packaging, wire bonding, flip chip, SiP, chip assembly, module packaging"
    />
  );
}
