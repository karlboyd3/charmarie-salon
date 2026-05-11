import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CharMarie Salon | Blacksburg's Premier Full-Service Salon",
  description:
    "CharMarie Salon in Blacksburg, VA offers expert haircuts, color, extensions, lashes, bridal services, and more. Voted one of the best salons in the New River Valley.",
  keywords:
    "salon Blacksburg VA, hair salon Blacksburg, bridal hair Blacksburg, New River Valley salon, CharMarie Salon",
  openGraph: {
    title: "CharMarie Salon | Blacksburg, VA",
    description:
      "Full-service salon in Blacksburg, VA — where skill meets style.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
