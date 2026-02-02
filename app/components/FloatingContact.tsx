"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();
  const router = useRouter();
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isStartupsPage = pathname === "/startups";
  const isContactPage = pathname === "/contact";
  const isThankYouPage = pathname === "/thank-you";

  useEffect(() => {
    if (isContactPage || isThankYouPage || hasAutoOpened) return;

    const hasSeenPopup = sessionStorage.getItem("floatingContactSeen");
    if (hasSeenPopup) {
      setHasAutoOpened(true);
      return;
    }

    autoOpenTimerRef.current = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("floatingContactSeen", "true");
        
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      }
    }, 5000);

    const handleScroll = () => {
      if (!hasAutoOpened && window.scrollY > 300) {
        if (autoOpenTimerRef.current) {
          clearTimeout(autoOpenTimerRef.current);
        }
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("floatingContactSeen", "true");
        
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
  }, [hasAutoOpened, isContactPage, isThankYouPage]);

  if (isContactPage || isThankYouPage) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          message: formData.message,
          source: "floating_contact",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "contact_form_submit",
          form_type: "floating_contact",
          page: pathname,
        });
      }

      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
      setIsOpen(false);
      router.push("/thank-you");
    } catch (error) {
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
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
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "email_click",
        email: "info@illuminious.com",
        page: pathname,
        source: "floating_contact",
      });
    }
  };

  return (
    <>
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
                ? "bg-cyan-400 text-black hover:bg-cyan-400/90 shadow-cyan-400/30"
                : "bg-blue-600 text-white hover:bg-blue-900 shadow-blue-600/30"
            }`}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md rounded-2xl shadow-2xl overflow-hidden ${
                isStartupsPage
                  ? "bg-black border border-purple-500/50"
                  : "bg-white border border-sky-100"
              }`}
            >
              <div
                className={`px-6 py-4 flex items-center justify-between ${
                  isStartupsPage
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border-b border-purple-500/30"
                    : "bg-gradient-to-r from-blue-900 to-blue-600"
                }`}
              >
                <div>
                  <h3 className={`font-semibold ${isStartupsPage ? "text-cyan-400" : "text-white"}`}>
                    Quick Contact
                  </h3>
                  <p className={`text-sm ${isStartupsPage ? "text-gray-400" : "text-white/80"}`}>
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full transition-colors ${
                    isStartupsPage
                      ? "text-cyan-400 hover:bg-purple-500/30"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={
                      isStartupsPage
                        ? "bg-black border-purple-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400"
                        : "border-sky-200 focus:border-blue-600"
                    }
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={
                      isStartupsPage
                        ? "bg-black border-purple-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400"
                        : "border-sky-200 focus:border-blue-600"
                    }
                  />
                </div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className={
                    isStartupsPage
                      ? "bg-black border-purple-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      : "border-sky-200 focus:border-blue-600"
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
                      ? "bg-black border-purple-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 resize-none"
                      : "border-sky-200 focus:border-blue-600 resize-none"
                  }
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isStartupsPage
                      ? "bg-cyan-400 text-black hover:bg-cyan-400/90"
                      : "bg-blue-600 text-white hover:bg-blue-900"
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
                <p className={`text-xs text-center ${isStartupsPage ? "text-gray-500" : "text-muted-foreground"}`}>
                  Or email us directly at{" "}
                  <a
                    href="mailto:info@illuminious.com"
                    onClick={handleEmailClick}
                    className={isStartupsPage ? "text-cyan-400 hover:underline" : "text-blue-600 hover:underline"}
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
