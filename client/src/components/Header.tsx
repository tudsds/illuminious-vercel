import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Design for Manufacturing (DFM)", href: "/services/dfm" },
      { label: "Original Equipment Manufacturing (OEM)", href: "/services/oem" },
      { label: "Original Design Manufacturing (ODM)", href: "/services/odm" },
      { label: "Electronics Manufacturing Services (EMS)", href: "/services/ems" },
      { label: "PCB Manufacturing & Assembly (PCBA)", href: "/services/pcb" },
      { label: "Tooling & Injection Molding", href: "/services/molding" },
      { label: "IC Packaging & Semiconductor", href: "/services/packaging" },
      { label: "Product Assembly & Box Build", href: "/services/assembly" },
      { label: "Rapid Prototyping", href: "/services/prototyping" },
      { label: "Quality Testing & Certification", href: "/services/testing" },
      { label: "Logistics & Overseas Warehouse", href: "/services/logistics" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Startups Program", href: "/startups" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  }, [location]);

  // Pages with dark backgrounds that need white text
  const isDarkBgPage = location === "/" || location === "/startups";
  const isStartupsPage = location === "/startups";
  const isHomePage = location === "/";

  // Determine text color based on page and scroll state
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
    // All other pages - always black text for unselected items
    return isActive ? "text-illuminious-blue" : "text-gray-900 hover:text-illuminious-blue hover:bg-illuminious-light/50";
  };

  // Logo text color
  const getLogoTextColor = () => {
    if (isStartupsPage) return "text-cyber-cyan";
    if (isHomePage && !isScrolled) return "text-white";
    return "text-illuminious-navy";
  };

  // Logo image - use the new transparent logo
  const getLogoSrc = () => {
    // Always use white logo
    return "/images/illuminious-logo-white.png";
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
            <img
              src={getLogoSrc()}
              alt="Illuminious"
              className="h-10 w-10"
            />
            <span
              className={`text-xl font-bold font-heading ${getLogoTextColor()}`}
            >
              illuminious
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${getNavTextColor(location === item.href)}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-72 rounded-xl shadow-xl overflow-hidden ${
                        isStartupsPage
                          ? "bg-cyber-black border border-cyber-purple/30"
                          : "bg-white border border-illuminious-light"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isStartupsPage
                              ? "text-gray-300 hover:text-cyber-cyan hover:bg-cyber-purple/20"
                              : "text-illuminious-navy hover:text-illuminious-blue hover:bg-illuminious-light/50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admin"
              className={`p-2 rounded-lg transition-colors ${
                isStartupsPage
                  ? "text-gray-400 hover:text-cyber-cyan hover:bg-cyber-purple/20"
                  : isHomePage && !isScrolled
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-gray-500 hover:text-illuminious-blue hover:bg-illuminious-light/50"
              }`}
              title="Admin Portal"
            >
              <Settings className="w-5 h-5" />
            </Link>
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
            className={`lg:hidden p-2 rounded-lg ${
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
              className={`lg:hidden overflow-hidden ${
                isStartupsPage ? "bg-cyber-black" : "bg-white"
              }`}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
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
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 text-sm rounded-lg ${
                              isStartupsPage
                                ? "text-gray-400 hover:text-cyber-cyan"
                                : "text-illuminious-blue/70 hover:text-illuminious-blue hover:bg-illuminious-light/30"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Admin Portal in Mobile Menu */}
                <Link
                  href="/admin"
                  className={`block px-4 py-3 text-base font-medium rounded-lg ${
                    isStartupsPage
                      ? "text-gray-400 hover:text-cyber-cyan"
                      : "text-gray-500 hover:text-illuminious-blue hover:bg-illuminious-light/30"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Admin Portal
                  </span>
                </Link>
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
