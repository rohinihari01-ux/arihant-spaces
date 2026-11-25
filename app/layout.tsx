import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arihant Mira | Ultra-Luxury 4 BHK Residences in Anna Nagar East, Chennai",
  description: "Bespoke boutique living by Arihant Spaces. Only 5 palatial 4 BHK residences of 3,308 sq. ft. (1 residence per floor) in Anna Nagar East, Chennai. Starting from ₹8.5 Cr*.",
  keywords: "Arihant Mira, Arihant Spaces, Anna Nagar East Luxury Apartments, 4 BHK Anna Nagar, Boutique Residences Chennai, Luxury Real Estate Chennai, Goed Properties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-white text-[#262638] antialiased selection:bg-[#262638] selection:text-white">
        {children}
      </body>
    </html>
  );
}
