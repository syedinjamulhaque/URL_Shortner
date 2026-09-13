export default function About() {
  return (
    <main className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-purple-50">
      <div className="pointer-events-none absolute -left-24 top-10 z-0 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 z-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <section className="relative z-10 flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-4xl">
          <div className="rounded-3xl border border-purple-200/70 bg-white/75 p-5 shadow-2xl shadow-purple-300/30 backdrop-blur-xl sm:p-8 md:p-10">
            <div className="animate-fade-in-up text-center">
              <p className="mb-2 inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                About BitLinks
              </p>

              <h1 className="text-3xl font-black tracking-tight text-purple-950 sm:text-4xl md:text-5xl">
                Simple links.
                <span className="block bg-linear-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
                  Smarter sharing.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                BitLinks is a simple and straightforward URL shortener built
                to make sharing long URLs easier, cleaner, and more convenient.
              </p>
            </div>

            <div
              className="animate-fade-in-up mt-7 grid gap-4 sm:grid-cols-2"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="group rounded-2xl border border-purple-100 bg-purple-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-xl hover:shadow-purple-200/60">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-lg text-white shadow-lg shadow-purple-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  ⚡
                </div>
                <h2 className="text-lg font-bold text-purple-900">Easy to Use</h2>
                <p className="mt-1.5 text-sm leading-6 text-gray-600">
                  Create short and memorable links without unnecessary
                  complexity.
                </p>
              </div>

              <div className="group rounded-2xl border border-purple-100 bg-purple-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-xl hover:shadow-purple-200/60">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-lg text-white shadow-lg shadow-purple-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  🔗
                </div>
                <h2 className="text-lg font-bold text-purple-900">
                  Built for Everyone
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-gray-600">
                  Whether you are sharing links with friends, on social media,
                  or for your projects, BitLinks keeps your URLs clean and easy
                  to share.
                </p>
              </div>
            </div>

            <div
              className="animate-fade-in-up group relative mt-4 cursor-pointer overflow-hidden rounded-2xl bg-linear-to-br from-purple-600 via-purple-700 to-fuchsia-700 p-5 text-center text-white shadow-xl shadow-purple-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl hover:shadow-purple-500/50 sm:p-6"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:scale-[2]" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl transition-transform duration-700 group-hover:scale-[2]" />

              <h2 className="relative z-10 text-xl font-black transition-transform duration-500 group-hover:scale-105 sm:text-2xl">
                Less clutter. More sharing.
              </h2>

              <p className="relative z-10 mx-auto mt-2 max-w-xl text-sm leading-6 text-purple-100 transition-colors duration-500 group-hover:text-white sm:text-base">
                We built BitLinks with one goal in mind: making URL shortening
                simple, fast, and hassle-free.
              </p>

              <div className="relative z-10 mx-auto mt-4 h-1 w-10 rounded-full bg-white/60 transition-all duration-500 group-hover:w-24 group-hover:bg-white" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}