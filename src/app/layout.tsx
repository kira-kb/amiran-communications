import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amiran Communications",
  description:
    "Amiran Communications — professional communications and web solutions by Balton CP. Reliable, secure, and tailored services for businesses.",
  keywords: [
    "Amiran Communications",
    "Balton CP",
    "communications",
    "web services",
    "consulting",
    "telecom",
    "digital",
  ],
  authors: [
    { name: "Amiran Communications", url: "https://baltoncp.com/amirancomm/" },
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Amiran Communications",
    description:
      "Professional communications and web solutions by Balton CP — tailored services for businesses.",
    url: "https://baltoncp.com/amirancomm/",
    siteName: "Amiran Communications",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Amiran Communications logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amiran Communications",
    description:
      "Professional communications and web solutions by Balton CP — tailored services for businesses.",
    images: ["/logo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
