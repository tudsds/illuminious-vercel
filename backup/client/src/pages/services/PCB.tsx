import ServicePageTemplate from "@/components/ServicePageTemplate";
import { CircuitBoard } from "lucide-react";

export default function ServicePCB() {
  return (
    <ServicePageTemplate
      title="PCB Manufacturing & Assembly (PCBA)"
      subtitle="Electronics Manufacturing Services for PCB"
      description="Complete PCB fabrication and assembly services from prototype to mass production. We deliver high-quality printed circuit boards with precision and reliability for all your electronic product needs."
      heroImage="/images/service-pcb.jpg"
      icon={CircuitBoard}
      features={[
        {
          title: "Multi-Layer PCB Fabrication",
          description: "From single-sided to complex multi-layer boards up to 32 layers with HDI technology for high-density applications.",
        },
        {
          title: "SMT Assembly",
          description: "Surface mount technology with high-speed pick-and-place machines for precise component placement and soldering.",
        },
        {
          title: "Quick Turn Prototyping",
          description: "Rapid prototyping with 24-48 hour turnaround for urgent development needs and time-sensitive projects.",
        },
        {
          title: "Quality Assurance",
          description: "AOI, X-ray inspection, and functional testing to ensure every board meets your exact specifications.",
        },
        {
          title: "Component Sourcing",
          description: "Authentic components from authorized distributors with full traceability and counterfeit prevention.",
        },
        {
          title: "Box Build Integration",
          description: "Complete system integration including enclosure assembly, wiring, and final product testing.",
        },
      ]}
      benefits={[
        "Single-sided, double-sided, and multi-layer PCBs up to 32 layers",
        "HDI (High Density Interconnect) boards for compact designs",
        "Rigid, flex, and rigid-flex PCB capabilities",
        "Aluminum and metal core PCBs for thermal management",
        "High-frequency and RF boards for wireless applications",
        "Lead-free and RoHS compliant assembly processes",
        "BGA, QFN, and fine-pitch component placement expertise",
        "Conformal coating and potting for harsh environments",
        "NPI (New Product Introduction) engineering support",
      ]}
      process={[
        {
          step: "01",
          title: "Design Review",
          description: "Our engineers review your Gerber files and BOM for manufacturability and optimization opportunities.",
        },
        {
          step: "02",
          title: "PCB Fabrication",
          description: "High-precision fabrication using advanced equipment and quality materials with strict process control.",
        },
        {
          step: "03",
          title: "Component Sourcing",
          description: "Authentic components from authorized distributors with full traceability and quality verification.",
        },
        {
          step: "04",
          title: "SMT/THT Assembly",
          description: "Automated assembly lines with both surface mount and through-hole capabilities for mixed technology boards.",
        },
        {
          step: "05",
          title: "Testing & Inspection",
          description: "Comprehensive testing including ICT, FCT, and burn-in testing as required by your specifications.",
        },
        {
          step: "06",
          title: "Delivery",
          description: "Secure ESD-safe packaging and global shipping with full documentation and traceability.",
        },
      ]}
      faqs={[
        {
          question: "What is the minimum order quantity for PCB assembly?",
          answer: "We offer flexible MOQ options starting from 1 piece for prototypes. For production runs, MOQ varies based on complexity and can be discussed with our sales team.",
        },
        {
          question: "What file formats do you accept for PCB manufacturing?",
          answer: "We accept Gerber files (RS-274X), ODB++, and IPC-2581 formats. We also accept native design files from major EDA tools like Altium, KiCad, and Eagle.",
        },
        {
          question: "Do you offer design for manufacturability (DFM) review?",
          answer: "Yes, we provide free DFM review for all orders. Our engineers will analyze your design and suggest optimizations to improve yield and reduce costs.",
        },
        {
          question: "What certifications do your facilities have?",
          answer: "Our manufacturing partners are ISO 9001, ISO 14001, IATF 16949, and IPC certified. We can also support UL, CE, and FCC certification requirements.",
        },
        {
          question: "Can you handle high-mix low-volume production?",
          answer: "Absolutely. Our flexible manufacturing setup is optimized for both high-mix low-volume and high-volume production scenarios.",
        },
      ]}
      seoKeywords="PCB manufacturing, PCBA, PCB assembly, SMT assembly, circuit board fabrication, electronics manufacturing, prototype PCB"
    />
  );
}
