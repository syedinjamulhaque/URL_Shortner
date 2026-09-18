import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "BitLinks - Your Trusted URL Shortener",
  description: "BitLinks helps you shorten your URLs easily.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="h-dvh flex flex-col bg-white font-(family-name:--font-body) overflow-y-auto">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(24px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes floatY {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-14px); }
              }
              @keyframes glowPulse {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 0.9; }
              }
              .animate-fade-in-up {
                animation: fadeInUp 0.8s ease-out both;
              }
              .animate-fade-in {
                animation: fadeIn 1s ease-out both;
              }
              .animate-float {
                animation: floatY 6s ease-in-out infinite;
              }
              .animate-glow-pulse {
                animation: glowPulse 4s ease-in-out infinite;
              }
            `,
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}