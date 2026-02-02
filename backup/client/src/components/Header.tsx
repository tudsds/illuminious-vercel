import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight, Globe, Cpu, Factory, Wrench, Layers, Award, Wifi, Heart, Car, Home as HomeIcon, Building2, Newspaper, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Simplified navigation structure for cleaner look
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
    columns: [
      {
        title: "Engineering",
        items: [
          { label: "NPI & Engineering", href: "/services/npi-engineering", icon: Cpu },
          { label: "DFM Analysis", href: "/services/dfm", icon: Wrench },
          { label: "Rapid Prototyping", href: "/services/rapid-prototyping", icon: Cpu },
        ],
      },
      {
        title: "Manufacturing",
        items: [
          { label: "ODM", href: "/services/odm", icon: Cpu },
          { label: "OEM", href: "/services/oem", icon: Factory },
          { label: "EMS", href: "/services/ems", icon: Layers },
          { label: "PCB Assembly", href: "/services/pcb-assembly", icon: Layers },
          { label: "Box Build", href: "/services/box-build", icon: Factory },
          { label: "Injection Molding", href: "/services/injection-molding", icon: Factory },
        ],
      },
      {
        title: "Logistics",
        items: [
          { label: "Supply Chain", href: "/services/supply-chain", icon: Globe },
          { label: "US Fulfillment", href: "/services/us-fulfillment", icon: Globe },
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
        title: "Sectors",
        items: [
          { label: "Medical", href: "/industries/medical", icon: Heart },
          { label: "Automotive", href: "/industries/automotive", icon: Car },
          { label: "Consumer", href: "/industries/consumer", icon: HomeIcon },
          { label: "IoT", href: "/industries/iot", icon: Wifi },
          { label: "Industrial", href: "/industries/industrial", icon: Building2 },
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
        title: "Core Capabilities",
        items: [
          { label: "Quality & Certifications", href: "/capabilities/quality", icon: Award },
          { label: "IoT Specialization", href: "/capabilities/iot", icon: Wifi },
          { label: "Rapid Prototyping", href: "/services/rapid-prototyping", icon: Cpu },
          { label: "EMS Services", href: "/services/ems", icon: Factory },
        ],
      },
    ],
  },
  { label: "Factory Tour", href: "/factory-tour" },
  {
    label: "Resources",
    href: "/blog",
    megaMenu: true,
    columns: [
      {
        title: "Content",
        items: [
          { label: "Case Studies", href: "/case-studies", icon: FileText },
          { label: "Blog", href: "/blog", icon: BookOpen },
          { label: "News", href: "/news", icon: Newspaper },
        ],
      },
    ],
  },
  { label: "Startups", href: "/startups" },
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
        return isActive ? "text-illuminious-blue" : "text-gray-700 hover:text-illuminious-blue";
      }
      return isActive ? "text-illuminious-sky" : "text-white/90 hover:text-white";
    }
    return isActive ? "text-illuminious-blue" : "text-gray-700 hover:text-illuminious-blue";
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
            : "bg-white/95 backdrop-blur-md shadow-md"
          : isStartupsPage
          ? "bg-transparent"
          : isDarkBgPage
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={getLogoSrc()} alt="Illuminious" className="h-8 w-8 lg:h-9 lg:w-9" />
            <span className={`text-lg lg:text-xl font-bold font-heading ${getLogoTextColor()}`}>
              illuminious
            </span>
          </Link>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-0.5 ${getNavTextColor(location === item.href || location.startsWith(item.href + "/"))}`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>

                {/* Mega Menu - Compact */}
                <AnimatePresence>
                  {item.megaMenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full left-0 mt-1 rounded-lg shadow-xl overflow-hidden ${
                        isStartupsPage
                          ? "bg-cyber-black border border-cyber-purple/30"
                          : "bg-white border border-gray-100"
                      }`}
                      style={{ minWidth: "220px" }}
                    >
                      <div className="p-3">
                        {item.columns?.map((column, colIdx) => (
                          <div key={column.title} className={colIdx > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}>
                            <h4 className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${
                              isStartupsPage ? "text-cyber-cyan/60" : "text-gray-400"
                            }`}>
                              {column.title}
                            </h4>
                            <div className="space-y-0.5">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                                    isStartupsPage
                                      ? "text-gray-300 hover:bg-cyber-purple/20 hover:text-cyber-cyan"
                                      : "text-gray-700 hover:bg-illuminious-light/50 hover:text-illuminious-blue"
                                  }`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className={`w-4 h-4 ${
                                      isStartupsPage ? "text-cyber-cyan/60" : "text-illuminious-blue/60"
                                    }`} />
                                  )}
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              size="sm"
              className={`${
                isStartupsPage
                  ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                  : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
              } rounded-full px-5 text-sm`}
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-md ${
              isStartupsPage
                ? "text-cyber-cyan"
                : isHomePage && !isScrolled
                ? "text-white"
                : "text-illuminious-navy"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu - Compact */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden overflow-hidden ${
                isStartupsPage ? "bg-cyber-black" : "bg-white"
              }`}
            >
              <div className="py-3 space-y-0.5 max-h-[65vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                            isStartupsPage
                              ? "text-gray-300 hover:text-cyber-cyan"
                              : "text-gray-700 hover:text-illuminious-blue hover:bg-gray-50"
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
                              className="ml-3 space-y-0.5 pb-1"
                            >
                              {item.columns?.map((column) => (
                                <div key={column.title} className="py-1">
                                  <div className={`text-[10px] font-semibold uppercase tracking-wider px-3 mb-1 ${
                                    isStartupsPage ? "text-cyber-cyan/50" : "text-gray-400"
                                  }`}>
                                    {column.title}
                                  </div>
                                  {column.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className={`block px-3 py-1.5 text-sm rounded-md ${
                                        isStartupsPage
                                          ? "text-gray-400 hover:text-cyber-cyan"
                                          : "text-gray-600 hover:text-illuminious-blue hover:bg-gray-50"
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-sm font-medium rounded-md ${
                          location === item.href
                            ? isStartupsPage
                              ? "text-cyber-cyan bg-cyber-purple/20"
                              : "text-illuminious-blue bg-illuminious-light/50"
                            : isStartupsPage
                            ? "text-gray-300 hover:text-cyber-cyan"
                            : "text-gray-700 hover:text-illuminious-blue hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-3 pt-3">
                  <Button
                    asChild
                    size="sm"
                    className={`w-full ${
                      isStartupsPage
                        ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80"
                        : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
                    } rounded-full`}
                  >
                    <Link href="/contact">Get Quote</Link>
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
