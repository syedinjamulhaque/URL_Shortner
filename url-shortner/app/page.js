import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex-1 bg-linear-to-b from-purple-50 via-white to-purple-50">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="text-center md:text-left">
            <span
              className="animate-fade-in-up inline-block rounded-full border border-purple-200 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-purple-700 shadow-sm backdrop-blur-sm"
              style={{ animationDelay: "0.05s" }}
            >
              No tracking. No sign-up required.
            </span>

            <h1
              className="animate-fade-in-up mt-6 font-(family-name:--font-heading) text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900"
              style={{ animationDelay: "0.15s" }}
            >
              The best{" "}
              <span className="bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
                URL shortener
              </span>{" "}
              in the market
            </h1>

            <p
              className="animate-fade-in-up mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed"
              style={{ animationDelay: "0.25s" }}
            >
              We are the simplest and most straightforward URL shortener in the world. Most URL shorteners track your activity or require personal details to use their services. We understand your needs, which is why we created a simple and hassle-free URL shortener.
            </p>

            <div
              className="animate-fade-in-up mt-9 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              style={{ animationDelay: "0.35s" }}
            >
              <Link href="/shorten">
                <button
                  type="button"
                  className="w-full sm:w-auto rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-600 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 hover:brightness-110 active:translate-y-0 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                >
                  Try Now
                </button></Link>

              <a
                href="https://github.com/syedinjamulhaque/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View BitLinks on GitHub"
                className="w-full sm:w-auto rounded-xl border border-purple-200 bg-white px-7 py-3 text-center text-sm sm:text-base font-semibold text-purple-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-200/60 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
              >
                GitHub
              </a>
            </div>
          </div>

          <div
            className="animate-fade-in relative flex justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-purple-400/30 blur-3xl" />

            <div className="animate-float w-full max-w-md sm:max-w-lg rounded-3xl border border-purple-100 bg-white/60 p-3 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
              <Image
                src="/5439.jpg"
                alt="Illustration of BitLinks turning a long link into a short, shareable one"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}