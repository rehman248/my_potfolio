"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Trash2,
  ArrowLeft,
  RefreshCw,
  Clock,
  User,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: "unread" | "read";
}

export default function InboxPage() {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete message", err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
              <span>Messages &amp; Inquiries</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black font-bold">
                {messages.length}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Live database storage for messages received via the Get In Touch form.
            </p>
          </div>

          <button
            onClick={fetchMessages}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:border-[#FACC15] transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#FACC15]" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Messages List */}
        <div className="mt-8 space-y-4">
          {loading ? (
            <div className="text-center py-16 text-zinc-500 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#FACC15]" />
              <p>Loading inquiries from database...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="theme-card p-12 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/10 text-[#FACC15] flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">No Messages Yet</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-sm mx-auto">
                When someone submits the contact form on your portfolio, their message will appear here in real time.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black btn-yellow"
              >
                <span>Test Contact Form</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="theme-card p-5 sm:p-6 rounded-2xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 flex items-center justify-center font-bold text-sm shrink-0">
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {msg.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`mailto:${msg.email}`}
                          className="text-xs text-[#FACC15] hover:underline"
                        >
                          {msg.email}
                        </a>
                        <button
                          onClick={() => handleCopyEmail(msg.email, msg.id)}
                          className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                          title="Copy email"
                        >
                          {copiedId === msg.id ? (
                            <CheckCircle2 className="w-3 h-3 text-[#FACC15]" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-600" />
                      <span>{new Date(msg.createdAt).toLocaleString()}</span>
                    </div>

                    <button
                      onClick={() => handleDelete(msg.id)}
                      disabled={deletingId === msg.id}
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                      title="Delete message"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-black/60 border border-zinc-800/80 text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">
                  {msg.message}
                </div>

                <div className="mt-4 flex items-center justify-end gap-2">
                  <a
                    href={`mailto:${msg.email}?subject=Re:%20Inquiry%20via%20Portfolio`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#FACC15] text-black hover:bg-[#EAB308] transition-colors"
                  >
                    <span>Reply via Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
