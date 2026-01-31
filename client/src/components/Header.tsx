import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight, Globe, Cpu, Factory, Wrench, Layers, Award, Wifi, Heart, Car, Home as HomeIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Mega Menu Structure based on SEO plan
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
    columns: [
      {
        title: "Engineering & Design",
        items: [
          { label: "NPI & Engineering", href: "/services/npi-engineering", icon: Cpu, desc: "72-hour prototyping" },
          { label: "DFM Analysis", href: "/services/dfm", icon: Wrench, desc: "Design optimization" },
        ],
      },
      {
        title: "Manufacturing",
        items: [
          { label: "PCB Assembly", href: "/services/pcb-assembly", icon: Layers, desc: "SMT & through-hole" },
          { label: "Box Build", href: "/services/box-build", icon: Factory, desc: "Full system assembly" },
          { label: "Injection Molding", href: "/services/injection-molding", icon: Factory, desc: "Tooling & plastics" },
        ],
      },
      {
        title: "Supply Chain",
        items: [
          { label: "Supply Chain Management", href: "/services/supply-chain", icon: Globe, desc: "Global sourcing" },
          { label: "US Fulfillment", href: "/services/supply-chain#fulfillment", icon: Globe, desc: "West Coast warehouse" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: true,
    columns: [
      {
        title: "Regulated Industries",
        items: [
          { label: "Medical & Healthcare", href: "/industries/medical", icon: Heart, desc: "FDA compliant" },
          { label: "Automotive", href: "/industries/automotive", icon: Car, desc: "IATF 16949 ready" },
        ],
      },
      {
        title: "Technology",
        items: [
          { label: "Consumer Electronics", href: "/industries/consumer", icon: HomeIcon, desc: "High volume" },
          { label: "IoT & Connected", href: "/industries/iot", icon: Wifi, desc: "Wireless expertise" },
        ],
      },
      {
        title: "Industrial",
        items: [
          { label: "Industrial & B2B", href: "/industries/industrial", icon: Building2, desc: "Ruggedized" },
        ],
      },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    megaMenu: true,
    columns: [
      {
        title: "Quality & Compliance",
        items: [
          { label: "Quality & Certifications", href: "/capabilities/quality", icon: Award, desc: "ISO 9001, 13485" },
        ],
      },
      {
        title: "Specializations",
        items: [
          { label: "IoT & Wireless", href: "/capabilities/iot", icon: Wifi, desc: "RF expertise" },
        ],
      },
    ],
  },
  { label: "Factory Tour", href: "/factory-tour" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Startups Program", href: "/startups" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location]);

  const isDarkBgPage = location === "/" || location === "/startups";
  const isStartupsPage = location === "/startups";
  const isHomePage = location === "/";

  const getNavTextColor = (isActive: boolean) => {
    if (isStartupsPage) {
      return isActive ? "text-cyber-cyan" : "text-gray-300 hover:text-cyber-cyan";
    }
    if (isHomePage) {
      if (isScrolled) {
        return isActive ? "text-illuminious-blue" : "text-gray-900 hover:text-illuminious-blue hover:bg-illuminious-light/50";
      }
      return isActive ? "text-illuminious-blue" : "text-white/90 hover:text-white hover:bg-white/10";
    }
    return isActive ? "text-illuminious-blue" : "text-gray-900 hover:text-illuminious-blue hover:bg-illuminious-light/50";
  };

  const getLogoTextColor = () => {
    if (isStartupsPage) return "text-cyber-cyan";
    if (isHomePage && !isScrolled) return "text-white";
    return "text-illuminious-navy";
  };

  const getLogoSrc = () => {
    if (isStartupsPage) return "/images/illuminious-logo-white.png";
    if (isHomePage) return isScrolled ? "/images/illuminious-logo-blue.png" : "/images/illuminious-logo-white.png";
    return "/images/illuminious-logo-blue.png";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isStartupsPage
            ? "bg-cyber-black/95 backdrop-blur-md shadow-lg shadow-cyber-purple/20"
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : isStartupsPage
          ? "bg-transparent"
          : isDarkBgPage
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={getLogoSrc()} alt="Illuminious" className="h-10 w-10" />
            <span className={`text-xl font-bold font-heading ${getLogoTextColor()}`}>
              illuminious
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${getNavTextColor(location === item.href || location.startsWith(item.href + "/"))}`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.megaMenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl shadow-xl overflow-hidden ${
                        isStartupsPage
                          ? "bg-cyber-black border border-cyber-purple/30"
                          : "bg-white border border-illuminious-light"
                      }`}
                      style={{ minWidth: item.columns && item.columns.length > 2 ? "600px" : "400px" }}
                    >
                      <div className="p-6">
                        <div className={`grid gap-8 ${item.columns && item.columns.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
                          {item.columns?.map((column) => (
                            <div key={column.title}>
                              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                                isStartupsPage ? "text-cyber-cyan/70" : "text-illuminious-blue"
                              }`}>
                                {column.title}
                              </h4>
                              <div className="space-y-1">
                                {column.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                                      isStartupsPage
                                        ? "hover:bg-cyber-purple/20"
                                        : "hover:bg-illuminious-light/50"
                                    }`}
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                        isStartupsPage ? "text-cyber-cyan" : "text-illuminious-blue"
                                      }`} />
                                    )}
                                    <div>
                                      <div className={`text-sm font-medium ${
                                        isStartupsPage ? "text-gray-200" : "text-illuminious-navy"
                                      }`}>
                                        {subItem.label}
                                      </div>
                                      {subItem.desc && (
                                        <div className={`text-xs ${
                                          isStartupsPage ? "text-gray-500" : "text-muted-foreground"
                                        }`}>
                                          {subItem.desc}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={`mt-4 pt-4 border-t ${
                          isStartupsPage ? "border-cyber-purple/30" : "border-illuminious-light"
                        }`}>
                          <Link
                            href={item.href}
                            className={`text-sm font-medium flex items-center gap-1 ${
                              isStartupsPage ? "text-cyber-cyan hover:text-cyber-cyan/80" : "text-illuminious-blue hover:text-illuminious-navy"
                            }`}
                          >
                            View all {item.label.toLowerCase()}
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-3">
            <Button
              asChild
              className={`${
                isStartupsPage
                  ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                  : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
              } rounded-full px-6`}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xl:hidden p-2 rounded-lg ${
              isStartupsPage
                ? "text-cyber-cyan"
                : isHomePage && !isScrolled
                ? "text-white"
                : "text-illuminious-navy"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`xl:hidden overflow-hidden ${
                isStartupsPage ? "bg-cyber-black" : "bg-white"
              }`}
            >
              <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg ${
                            isStartupsPage
                              ? "text-gray-300 hover:text-cyber-cyan"
                              : "text-illuminious-navy hover:text-illuminious-blue hover:bg-illuminious-light/30"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileMenu === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedMobileMenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-2 pb-2"
                            >
                              {item.columns?.map((column) => (
                                <div key={column.title} className="py-2">
                                  <div className={`text-xs font-semibold uppercase tracking-wider px-4 mb-2 ${
                                    isStartupsPage ? "text-cyber-cyan/70" : "text-illuminious-blue/70"
                                  }`}>
                                    {column.title}
                                  </div>
                                  {column.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className={`block px-4 py-2 text-sm rounded-lg ${
                                        isStartupsPage
                                          ? "text-gray-400 hover:text-cyber-cyan"
                                          : "text-gray-600 hover:text-illuminious-blue hover:bg-illuminious-light/30"
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                              <Link
                                href={item.href}
                                className={`block px-4 py-2 text-sm font-medium ${
                                  isStartupsPage ? "text-cyber-cyan" : "text-illuminious-blue"
                                }`}
                              >
                                View all →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-base font-medium rounded-lg ${
                          location === item.href
                            ? isStartupsPage
                              ? "text-cyber-cyan bg-cyber-purple/20"
                              : "text-illuminious-blue bg-illuminious-light/50"
                            : isStartupsPage
                            ? "text-gray-300 hover:text-cyber-cyan"
                            : "text-illuminious-navy hover:text-illuminious-blue hover:bg-illuminious-light/30"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button
                    asChild
                    className={`w-full ${
                      isStartupsPage
                        ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                        : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
                    } rounded-full`}
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
