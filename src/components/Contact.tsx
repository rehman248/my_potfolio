"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastMessageId, setLastMessageId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "tomato040499@gmail.com";
  const phoneNumber = "03072151932";
  const formattedPhone = "+92 307 2151932";
  const whatsappUrl = "https://wa.me/923072151932";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setLastMessageId(data.data?.id || null);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3 py-1 rounded-full border border-[#FACC15]/20">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          Get In <span className="text-[#FACC15]">Touch</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
          Have a question or looking to build a website? Send a message below or contact me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="theme-card p-5 rounded-2xl">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="block text-white font-semibold text-sm sm:text-base truncate hover:text-[#FACC15] transition-colors mt-0.5"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#FACC15] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="theme-card p-5 rounded-2xl">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Phone &amp; WhatsApp
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href="tel:+923072151932"
                    className="block text-white font-semibold text-sm sm:text-base hover:text-[#FACC15] transition-colors"
                  >
                    {formattedPhone}
                  </a>
                  <span className="text-xs text-zinc-500 font-mono">({phoneNumber})</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 text-xs text-[#FACC15] hover:underline cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy number</span>
                      </>
                    )}
                  </button>

                  <span className="text-zinc-600">•</span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#25D366] hover:underline"
                  >
                    <WhatsAppIcon className="w-3 h-3" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="theme-card p-5 rounded-2xl">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Location
                </span>
                <h3 className="text-white font-semibold text-sm sm:text-base mt-0.5">
                  Faisalabad, Pakistan
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>PKT (GMT +5:00)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Icons */}
          <div className="theme-card p-5 rounded-2xl">
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Direct Links
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/rehman248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="theme-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              I usually reply within 24 hours.
            </p>

            {errorMsg && (
              <div className="p-3.5 mb-5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {submitted ? (
              <div className="p-7 rounded-2xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-center animate-in fade-in zoom-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#FACC15] text-black flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Delivered &amp; Saved!</h4>
                <p className="text-xs text-zinc-300 mt-1.5 max-w-sm mx-auto">
                  Your inquiry has been sent to Abdul Rehman&apos;s email (<span className="text-[#FACC15]">tomato040499@gmail.com</span>) and saved in the database inbox.
                </p>
                {lastMessageId && (
                  <p className="text-[11px] font-mono text-zinc-500 mt-2">
                    Reference ID: <span className="text-[#FACC15]">{lastMessageId}</span>
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-700 text-white hover:border-[#FACC15] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="/inbox"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-black btn-yellow"
                  >
                    View in Inbox
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Abdul, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-black btn-yellow flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message to database...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
