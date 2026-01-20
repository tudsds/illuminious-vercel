import { Link, useLocation } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Twitter, Globe } from "lucide-react";

const globalOffices = [
  { location: "United States", city: "Palo Alto, CA", type: "Headquarters", flag: "🇺🇸" },
  { location: "Hong Kong", city: "Hong Kong SAR", type: "R&D Center", flag: "🇭🇰" },
  { location: "China", city: "Shenzhen, GD", type: "Production Center", flag: "🇨🇳" },
  { location: "Indonesia", city: "Batam Island FTZ", type: "Production Center", flag: "🇮🇩" },
];

const footerLinks = {
  services: [
    { label: "DFM", href: "/services/dfm" },
    { label: "OEM", href: "/services/oem" },
    { label: "ODM", href: "/services/odm" },
    { label: "EMS", href: "/services/ems" },
    { label: "PCBA", href: "/services/pcb" },
    { label: "Prototyping", href: "/services/prototyping" },
    { label: "Logistics", href: "/services/logistics" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "News", href: "/news" },
    { label: "Blog", href: "/blog" },
    { label: "Startups Program", href: "/startups" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const [location] = useLocation();
  const isStartupsPage = location === "/startups";

  return (
    <footer
      className={`${
        isStartupsPage
          ? "bg-cyber-black border-t border-cyber-purple/30"
          : "bg-illuminious-navy"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/illuminious-logo-white.png"
                alt="Illuminious"
                className="h-10 w-10"
              />
              <span
                className={`text-xl font-bold font-heading ${
                  isStartupsPage ? "text-cyber-cyan" : "text-white"
                }`}
              >
                illuminious
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white">
              Your trusted global electronics supply chain partner. From concept to
              delivery, we bridge the gap between innovation and manufacturing
              excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isStartupsPage
                    ? "bg-cyber-purple/20 text-white hover:bg-cyber-purple/40"
                    : "bg-illuminious-blue/20 text-white hover:bg-illuminious-blue/40"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isStartupsPage
                    ? "bg-cyber-purple/20 text-white hover:bg-cyber-purple/40"
                    : "bg-illuminious-blue/20 text-white hover:bg-illuminious-blue/40"
                }`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global Offices
            </h3>
            <ul className="space-y-3">
              {globalOffices.map((office) => (
                <li key={office.location} className="flex items-center gap-2">
                  <span className="text-lg text-white">{office.flag}</span>
                  <div>
                    <p className="text-sm text-white">{office.location}</p>
                    <p className="text-xs text-white/70">{office.city}</p>
                    <p className={`text-xs ${isStartupsPage ? "text-cyber-cyan/70" : "text-white/60"}`}>
                      {office.type}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-white" />
                <a
                  href="mailto:info@illuminious.com"
                  onClick={() => {
                    // GTM tracking for email click
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'email_click',
                        email: 'info@illuminious.com'
                      });
                    }
                  }}
                  className="text-sm text-white hover:text-white/80 transition-colors"
                >
                  info@illuminious.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-white" />
                <span className="text-sm text-white">
                  +1 424-626-3312
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                <span className="text-sm text-white">
                  Palo Alto, CA
                  <br />
                  United States (HQ)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t ${
            isStartupsPage ? "border-cyber-purple/30" : "border-illuminious-blue/30"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Illuminious LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
