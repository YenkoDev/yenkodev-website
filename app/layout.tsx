"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./provider";
import { ContentfulProvider } from "@/context/ContenfulContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";

const inter = Inter({ subsets: ["latin"] });

const LoadingBar = ({ isLoading }: { isLoading: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 20;
          clearInterval(interval);
          return prev;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-blue-light transition-all"
      style={{ width: `${progress}%`, opacity: isLoading ? 1 : 0 }}
    ></div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <div suppressHydrationWarning>
          {mounted ? (
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <NavigationProvider>
                <ContentfulProvider>
                  <MainLayout>{children}</MainLayout>
                </ContentfulProvider>
              </NavigationProvider>
            </ThemeProvider>
          ) : (
            <NavigationProvider>
              <ContentfulProvider>
                <MainLayout>{children}</MainLayout>
              </ContentfulProvider>
            </NavigationProvider>
          )}
        </div>
      </body>
    </html>
  );
}

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { isLoading, handleExitComplete } = useNavigation();

  return (
    <div className="flex flex-col">
      <div className="min-h-screen">
        <LoadingBar isLoading={isLoading} />
        <header className="relative z-30">
          <NavBar />
        </header>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          {!isLoading && <div key={pathname}>{children}</div>}
        </AnimatePresence>
      </div>

      <footer className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
}
