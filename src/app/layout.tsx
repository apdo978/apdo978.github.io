import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ClientProvider from "@/components/providers/client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrhman Muhamed - Full-Stack Developer",
  description: "Passionate full-stack developer creating exceptional digital experiences with modern technologies. Specializing in React, Next.js, and Node.js.",
  keywords: ["Abdelrhman Muhamed", "Full-Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Abdelrhman Muhamed" }],
  creator: "Abdelrhman Muhamed",
  openGraph: {
    title: "Abdelrhman Muhamed - Full-Stack Developer",
    description: "Passionate full-stack developer creating exceptional digital experiences with modern technologies.",
    url: "https://abdelrhman.dev",
    siteName: "Abdelrhman Muhamed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdelrhman Muhamed - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Muhamed - Full-Stack Developer",
    description: "Passionate full-stack developer creating exceptional digital experiences with modern technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProvider>
            {children}
          </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
