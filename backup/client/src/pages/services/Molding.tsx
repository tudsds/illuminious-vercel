import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Box } from "lucide-react";

export default function ServiceMolding() {
  return (
    <ServicePageTemplate
      title="Tooling & Injection Molding"
      subtitle="Custom Mold Design & Manufacturing"
      description="Professional tooling design and injection molding services for plastic enclosures, components, and custom parts. From mold design to mass production, we deliver precision-engineered solutions for your product needs."
      heroImage="/images/service-molding.jpg"
      icon={Box}
      features={[
        {
          title: "Mold Design & Engineering",
          description: "Expert mold design using advanced CAD/CAM software with DFM analysis to optimize for manufacturability and cost.",
        },
        {
          title: "Precision Tooling",
          description: "High-precision steel and aluminum molds with tight tolerances for consistent part quality across production runs.",
        },
        {
          title: "Multi-Cavity Molds",
          description: "Efficient multi-cavity mold designs to maximize production output while maintaining quality standards.",
        },
        {
          title: "Material Expertise",
          description: "Wide range of engineering plastics including ABS, PC, PP, PA, POM, and specialty materials for specific applications.",
        },
        {
          title: "Surface Finishing",
          description: "Various texture options including polished, textured, matte, and custom finishes to meet aesthetic requirements.",
        },
        {
          title: "Secondary Operations",
          description: "Complete post-molding services including painting, printing, plating, and assembly integration.",
        },
      ]}
      benefits={[
        "Rapid mold development with 2-4 week lead times for prototype molds",
        "Production molds with 500K+ shot lifespan guarantee",
        "In-house mold maintenance and modification capabilities",
        "Scientific molding process for consistent quality",
        "Over-molding and insert molding capabilities",
        "Micro-molding for precision small parts",
        "Gas-assist and structural foam molding options",
        "Full dimensional inspection and quality reports",
        "Competitive pricing with transparent cost breakdown",
      ]}
      process={[
        {
          step: "01",
          title: "Design Analysis",
          description: "Review your 3D models and specifications, provide DFM feedback and optimization recommendations.",
        },
        {
          step: "02",
          title: "Mold Design",
          description: "Create detailed mold design with gate locations, cooling channels, and ejection system optimization.",
        },
        {
          step: "03",
          title: "Tooling Fabrication",
          description: "Precision CNC machining and EDM processing to create your custom mold with tight tolerances.",
        },
        {
          step: "04",
          title: "Mold Trial",
          description: "Initial sampling and T1 trials with detailed inspection reports and sample approval process.",
        },
        {
          step: "05",
          title: "Production",
          description: "Mass production with real-time quality monitoring and statistical process control.",
        },
        {
          step: "06",
          title: "Quality & Delivery",
          description: "Final inspection, packaging, and delivery with full documentation and traceability.",
        },
      ]}
      faqs={[
        {
          question: "What is the typical lead time for a new injection mold?",
          answer: "Prototype molds typically take 2-4 weeks, while production-grade steel molds take 4-8 weeks depending on complexity. We offer expedited services for urgent projects.",
        },
        {
          question: "What materials can you injection mold?",
          answer: "We work with a wide range of thermoplastics including ABS, PC, PP, PE, PA (Nylon), POM, PMMA, TPE, TPU, and engineering plastics like PEEK and PPS.",
        },
        {
          question: "Do you provide mold design services?",
          answer: "Yes, our in-house engineering team provides complete mold design services including DFM analysis, flow simulation, and optimization for manufacturability.",
        },
        {
          question: "What is the minimum order quantity for injection molded parts?",
          answer: "MOQ varies by project. For prototypes, we can produce as few as 50-100 pieces. Production runs typically start at 1,000+ pieces for cost efficiency.",
        },
        {
          question: "Can you match specific colors and textures?",
          answer: "Absolutely. We offer custom color matching to Pantone or RAL standards, and various surface textures from high-gloss polish to custom patterns.",
        },
      ]}
      seoKeywords="injection molding, custom molds, tooling design, plastic manufacturing, mold fabrication, enclosure manufacturing"
    />
  );
}
