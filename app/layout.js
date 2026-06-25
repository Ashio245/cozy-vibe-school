import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Cozy Vibe Coding School - Build Apps in Plain Language",
  description: "Learn to build software by simply describing what you want. No code, no setup, no intimidation. Perfect for absolute beginners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-family-sans: var(--font-inter), 'Inter', system-ui, -apple-system, sans-serif;
            --font-family-heading: var(--font-outfit), 'Outfit', sans-serif;
          }
        `}} />
      </head>
      <body>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
