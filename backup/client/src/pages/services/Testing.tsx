import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TestTube } from "lucide-react";

export default function ServiceTesting() {
  return (
    <ServicePageTemplate
      title="Quality Testing & Certification"
      subtitle="Comprehensive Testing & Compliance Services"
      description="Full-spectrum testing and certification services to ensure your products meet quality standards and regulatory requirements. From functional testing to environmental qualification, we validate your products for market success."
      heroImage="/images/service-testing.jpg"
      icon={TestTube}
      features={[
        {
          title: "Functional Testing",
          description: "Comprehensive functional verification including ICT, FCT, and system-level testing with custom test fixtures.",
        },
        {
          title: "Environmental Testing",
          description: "Temperature cycling, humidity, vibration, shock, and drop testing to validate product reliability.",
        },
        {
          title: "EMC/EMI Testing",
          description: "Electromagnetic compatibility testing and pre-compliance screening for regulatory certification.",
        },
        {
          title: "Safety Testing",
          description: "Electrical safety testing including hipot, ground continuity, and leakage current measurements.",
        },
        {
          title: "Reliability Testing",
          description: "HALT, HASS, burn-in, and accelerated life testing to ensure long-term product reliability.",
        },
        {
          title: "Certification Support",
          description: "Support for FCC, CE, UL, and other regulatory certifications with documentation and testing.",
        },
      ]}
      benefits={[
        "In-house testing capabilities reduce time and cost",
        "Custom test fixture design and development",
        "Automated test systems for high-volume production",
        "Real-time test data collection and analysis",
        "Pre-compliance testing to avoid certification delays",
        "Failure analysis and root cause investigation",
        "Test coverage optimization for cost efficiency",
        "Compliance with international standards (IEC, MIL-STD)",
        "Detailed test reports and documentation",
      ]}
      process={[
        {
          step: "01",
          title: "Test Strategy",
          description: "Develop comprehensive test strategy covering all functional and regulatory requirements.",
        },
        {
          step: "02",
          title: "Fixture Development",
          description: "Design and build custom test fixtures and automated test equipment as needed.",
        },
        {
          step: "03",
          title: "Test Program Development",
          description: "Create test software and procedures with defined pass/fail criteria.",
        },
        {
          step: "04",
          title: "Validation",
          description: "Validate test coverage and accuracy with golden samples and known defects.",
        },
        {
          step: "05",
          title: "Production Testing",
          description: "Execute testing in production with real-time monitoring and data logging.",
        },
        {
          step: "06",
          title: "Reporting & Analysis",
          description: "Generate test reports, yield analysis, and continuous improvement recommendations.",
        },
      ]}
      faqs={[
        {
          question: "What types of functional testing do you offer?",
          answer: "We offer ICT (In-Circuit Test), FCT (Functional Circuit Test), boundary scan, flying probe, and custom system-level testing based on your requirements.",
        },
        {
          question: "Can you help with regulatory certification?",
          answer: "Yes, we provide pre-compliance testing and support for FCC, CE, UL, CSA, and other certifications. We work with accredited test labs for final certification.",
        },
        {
          question: "Do you provide failure analysis services?",
          answer: "Yes, we offer failure analysis including X-ray inspection, cross-sectioning, and electrical characterization to identify root causes of failures.",
        },
        {
          question: "What environmental testing capabilities do you have?",
          answer: "We have chambers for temperature cycling (-40°C to +125°C), humidity testing, and partner labs for vibration, shock, and IP rating testing.",
        },
        {
          question: "How do you ensure test data traceability?",
          answer: "All test data is logged with serial number tracking, timestamps, and operator information. Data is stored securely and available for analysis and audits.",
        },
      ]}
      seoKeywords="product testing, quality testing, EMC testing, environmental testing, certification services, functional testing, reliability testing"
    />
  );
}
