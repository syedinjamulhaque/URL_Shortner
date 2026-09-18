"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaqbzev";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative flex-1 min-h-0 bg-purple-50">
      <div className="pointer-events-none absolute -left-24 top-10 z-0 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 z-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <section className="relative z-10 flex min-h-full items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-2xl">
          <div className="rounded-3xl border border-purple-200/70 bg-white/75 p-5 shadow-2xl shadow-purple-300/30 backdrop-blur-xl sm:p-8 md:p-10">
            <div className="animate-fade-in-up text-center">
              <p className="mb-2 inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                Contact Us
              </p>

              <h1 className="text-3xl font-black tracking-tight text-purple-950 sm:text-4xl md:text-5xl">
                Let's get in
                <span className="block bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
                  touch.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Have a question, found a bug, or just want to say hi? Drop us
                a message and we'll get back to you soon.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="animate-fade-in-up mt-8 space-y-5"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-purple-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-purple-200 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-purple-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-purple-200 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-purple-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-purple-200 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 hover:brightness-110 active:translate-y-0 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 sm:text-base"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="animate-fade-in-up rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                  Thanks! Your message has been sent.
                </p>
              )}

              {status === "error" && (
                <p className="animate-fade-in-up rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}