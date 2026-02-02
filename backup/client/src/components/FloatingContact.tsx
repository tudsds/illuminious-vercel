import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [location, navigate] = useLocation();
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isStartupsPage = location === "/startups";
  const isContactPage = location === "/contact";
  const isAdminPage = location === "/admin";
  const isThankYouPage = location === "/thank-you";

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      // GTM tracking for form submission
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "contact_form_submit",
          form_type: "floating_contact",
          page: location,
        });
      }
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
      setIsOpen(false);
      navigate("/thank-you");
    },
    onError: (error) => {
      toast.error("Failed to send message. Please try again.");
      setIsSubmitting(false);
    },
  });

  // Auto-open logic: open after 5 seconds or on scroll
  useEffect(() => {
    if (isContactPage || isAdminPage || isThankYouPage || hasAutoOpened) return;

    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("floatingContactSeen");
    if (hasSeenPopup) {
      setHasAutoOpened(true);
      return;
    }

    // Auto-open after 5 seconds
    autoOpenTimerRef.current = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("floatingContactSeen", "true");
        
        // Auto-collapse after 5 seconds if user doesn't interact
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      }
    }, 5000);

    // Open on scroll
    const handleScroll = () => {
      if (!hasAutoOpened && window.scrollY > 300) {
        if (autoOpenTimerRef.current) {
          clearTimeout(autoOpenTimerRef.current);
        }
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("floatingContactSeen", "true");
        
        // Auto-collapse after 5 seconds
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
        
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAutoOpened, isContactPage, isAdminPage, isThankYouPage]);

  // Don't show on contact, admin, or thank you pages
  if (isContactPage || isAdminPage || isThankYouPage) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    submitContact.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      message: formData.message,
      source: "floating_contact",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailClick = () => {
    // GTM tracking for email click
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "email_click",
        email: "info@illuminious.com",
        page: location,
        source: "floating_contact",
      });
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-colors ${
              isStartupsPage
                ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/90 shadow-cyber-cyan/30"
                : "bg-illuminious-blue text-white hover:bg-illuminious-navy shadow-illuminious-blue/30"
            }`}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Form Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md rounded-2xl shadow-2xl overflow-hidden ${
                isStartupsPage
                  ? "bg-cyber-black border border-cyber-purple/50"
                  : "bg-white border border-illuminious-light"
              }`}
            >
              {/* Header */}
              <div
                className={`px-6 py-4 flex items-center justify-between ${
                  isStartupsPage
                    ? "bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border-b border-cyber-purple/30"
                    : "bg-gradient-to-r from-illuminious-navy to-illuminious-blue"
                }`}
              >
                <div>
                  <h3
                    className={`font-semibold ${
                      isStartupsPage ? "text-cyber-cyan" : "text-white"
                    }`}
                  >
                    Quick Contact
                  </h3>
                  <p
                    className={`text-sm ${
                      isStartupsPage ? "text-gray-400" : "text-illuminious-light/80"
                    }`}
                  >
                    We'll respond within 24 hours
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full transition-colors ${
                    isStartupsPage
                      ? "text-cyber-cyan hover:bg-cyber-purple/30"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={
                        isStartupsPage
                          ? "bg-cyber-black border-cyber-purple/30 text-white placeholder:text-gray-500 focus:border-cyber-cyan"
                          : "border-illuminious-light focus:border-illuminious-blue"
                      }
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={
                        isStartupsPage
                          ? "bg-cyber-black border-cyber-purple/30 text-white placeholder:text-gray-500 focus:border-cyber-cyan"
                          : "border-illuminious-light focus:border-illuminious-blue"
                      }
                    />
                  </div>
                </div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className={
                    isStartupsPage
                      ? "bg-cyber-black border-cyber-purple/30 text-white placeholder:text-gray-500 focus:border-cyber-cyan"
                      : "border-illuminious-light focus:border-illuminious-blue"
                  }
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={
                    isStartupsPage
                      ? "bg-cyber-black border-cyber-purple/30 text-white placeholder:text-gray-500 focus:border-cyber-cyan resize-none"
                      : "border-illuminious-light focus:border-illuminious-blue resize-none"
                  }
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isStartupsPage
                      ? "bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/90"
                      : "bg-illuminious-blue text-white hover:bg-illuminious-navy"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p
                  className={`text-xs text-center ${
                    isStartupsPage ? "text-gray-500" : "text-muted-foreground"
                  }`}
                >
                  Or email us directly at{" "}
                  <a
                    href="mailto:info@illuminious.com"
                    onClick={handleEmailClick}
                    className={
                      isStartupsPage
                        ? "text-cyber-cyan hover:underline"
                        : "text-illuminious-blue hover:underline"
                    }
                  >
                    info@illuminious.com
                  </a>
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
