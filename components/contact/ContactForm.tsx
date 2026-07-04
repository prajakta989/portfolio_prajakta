import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name"
          className="forminput bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition border border-border"
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="hello@example.com"
          className="forminput bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition border border-border"
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="name">Message</label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me about your project…"
          className="forminput border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition resize-none"
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 mt-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            {" "}
            <FiSend />
            Send Message
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 text-center">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
