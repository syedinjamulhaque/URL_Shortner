"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shorten", label: "Shorten" },
    { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-purple-800/30 bg-purple-950/80 backdrop-blur-md shadow-lg shadow-purple-950/20">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-2xl font-(family-name:--font-heading) font-extrabold tracking-tight transition-transform duration-300 hover:scale-105"
                    >
                        <span className="bg-linear-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Bit
                        </span>
                        <span className="bg-linear-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                            Links
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-7 text-sm font-medium text-purple-100">
                            {navLinks.map((link) => (
                                <li key={link.href} className="relative group">
                                    <Link
                                        href={link.href}
                                        className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
                                    >
                                        {link.label}
                                        <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-purple-400 to-fuchsia-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3">
                            <Link href="/shorten">
                                <button
                                    type="button"
                                    className="rounded-lg bg-linear-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40 hover:brightness-110 active:translate-y-0 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-950"
                                >
                                    Try Now
                                </button>
                            </Link>

                            <a
                                href="https://github.com/syedinjamulhaque"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-purple-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-purple-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-md hover:shadow-purple-500/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-950"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-purple-100 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                    >
                        <span className="relative block h-4 w-6">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "top-1.75 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-1.75 h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-3.5 h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "top-1.75 -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col gap-1 pt-2 text-sm font-medium text-purple-100">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-3 flex flex-col gap-2.5">
                        <button
                            type="button"
                            className="w-full rounded-lg bg-linear-to-r from-purple-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-900/40 transition-all duration-300 hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                        >
                            Try Now
                        </button>

                        <a
                            href="https://github.com/syedinjamulhaque"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-lg border border-purple-400/40 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-purple-100 transition-all duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;