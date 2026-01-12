import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Cancionero",
  icons: {
    icon: "/icon.webp",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="relative min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 bg-[url('/bg.png')] bg-cover bg-center scale-110" />
          <div className="fixed inset-0 -z-10 bg-black/40" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
