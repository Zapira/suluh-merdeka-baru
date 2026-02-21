import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://suluhmediabaru.com"),
  title: {
    default: "Suluh Media Baru - Portal Berita Terkini",
    template: "%s | Suluh Media Baru",
  },
  description: "Portal berita terkini dan terpercaya dari Suluh Media Baru.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://suluhmediabaru.com",
    siteName: "Suluh Media Baru",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
