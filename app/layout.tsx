import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Provider from "@/components/providers/Provider";
import NextThemeProvider from "@/components/providers/theme-provider";
import GlobalState from "@/context/page";
import ThemeToggle from "@/components/theme/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Teach News",
  description: "Generated by tonycross",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemeProvider>
          <Provider>
            <GlobalState>
                <NavBar />
              <main>
                {children}
              </main>
              <ThemeToggle />
            </GlobalState>
          </Provider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
