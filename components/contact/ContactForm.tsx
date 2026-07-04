import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  return (
    <form>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name"
          className="forminput bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition border border-border"
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
        />
      </div>
      <button
        type="submit"
        disabled={status === "Sending"}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 mt-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {status === "Sending" ? (
          "Sending..."
        ) : (
          <>
            {" "}
            <FiSend />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
