import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from "@/components/providers/theme-provider"
import TopNav from "@/components/common/TopNav";
import Footer from "@/components/common/Footer";


export const metadata: Metadata = {
  title: "Martin",
  description: "My Metadata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <TopNav />
          {children}
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
