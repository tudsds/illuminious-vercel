import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench } from "lucide-react";

export default function ServiceAssembly() {
  return (
    <ServicePageTemplate
      title="Product Assembly & Box Build"
      subtitle="Complete System Integration Services"
      description="End-to-end product assembly and box build services from sub-assembly to final product. We handle mechanical assembly, cable harness, testing, and packaging to deliver market-ready products."
      heroImage="/images/service-assembly.jpg"
      icon={Wrench}
      features={[
        {
          title: "Mechanical Assembly",
          description: "Precision mechanical assembly including fastening, bonding, and integration of enclosures and structural components.",
        },
        {
          title: "Cable & Harness Assembly",
          description: "Custom cable assemblies and wire harnesses with crimping, soldering, and connector integration.",
        },
        {
          title: "Electro-Mechanical Integration",
          description: "Integration of PCBAs, displays, batteries, motors, and other components into complete systems.",
        },
        {
          title: "Final Product Assembly",
          description: "Complete box build from individual components to finished, packaged products ready for distribution.",
        },
        {
          title: "Firmware Programming",
          description: "In-line firmware and software programming with version control and verification.",
        },
        {
          title: "Custom Packaging",
          description: "Retail packaging, labeling, and kitting services for direct-to-customer or distribution channels.",
        },
      ]}
      benefits={[
        "Single-source solution from components to finished goods",
        "Flexible production lines for various product types",
        "Lean manufacturing principles for efficiency",
        "In-line quality checkpoints throughout assembly",
        "ESD-safe assembly environment for sensitive electronics",
        "Clean room assembly available for medical/optical products",
        "Automated and manual assembly options",
        "Just-in-time delivery and inventory management",
        "Scalable capacity from prototypes to mass production",
      ]}
      process={[
        {
          step: "01",
          title: "Work Instruction Development",
          description: "Create detailed assembly procedures, quality checkpoints, and operator training materials.",
        },
        {
          step: "02",
          title: "Line Setup",
          description: "Configure assembly stations, fixtures, and tooling for your specific product requirements.",
        },
        {
          step: "03",
          title: "Component Kitting",
          description: "Organize and kit all components, sub-assemblies, and materials for efficient line flow.",
        },
        {
          step: "04",
          title: "Assembly Operations",
          description: "Execute assembly with trained operators following standardized work instructions.",
        },
        {
          step: "05",
          title: "In-Process Testing",
          description: "Perform functional tests and quality inspections at critical assembly stages.",
        },
        {
          step: "06",
          title: "Final QC & Packaging",
          description: "Complete final inspection, packaging, and preparation for shipment.",
        },
      ]}
      faqs={[
        {
          question: "What types of products can you assemble?",
          answer: "We assemble a wide range of products including consumer electronics, IoT devices, medical devices, industrial equipment, and automotive electronics.",
        },
        {
          question: "Do you provide design for assembly (DFA) feedback?",
          answer: "Yes, our engineering team reviews product designs and provides DFA recommendations to optimize assembly efficiency and reduce costs.",
        },
        {
          question: "Can you handle products requiring cleanroom assembly?",
          answer: "Yes, we have cleanroom facilities for products requiring controlled environments such as medical devices and optical equipment.",
        },
        {
          question: "What is your capacity for assembly services?",
          answer: "Our assembly capacity is scalable from small batch prototypes to tens of thousands of units per month. We can ramp up quickly based on demand.",
        },
        {
          question: "Do you offer after-sales support and repair services?",
          answer: "Yes, we provide RMA handling, repair services, and refurbishment for products we manufacture, ensuring complete lifecycle support.",
        },
      ]}
      seoKeywords="product assembly, box build, system integration, cable assembly, electro-mechanical assembly, manufacturing services"
    />
  );
}
