import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arihant Mira | Ultra-Luxury 4 BHK Residences in Anna Nagar East, Chennai",
  description: "Bespoke boutique living by Arihant Spaces. Only 5 palatial 4 BHK residences of 3,308 sq. ft. (1 residence per floor) in Anna Nagar East, Chennai. Starting from ₹8.5 Cr*.",
  keywords: "Arihant Mira, Arihant Spaces, Anna Nagar East Luxury Apartments, 4 BHK Anna Nagar, Boutique Residences Chennai, Luxury Real Estate Chennai, Goed Properties, Palm Court",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#0a1f16] antialiased selection:bg-[#0c261c] selection:text-white">
        {children}
      </body>
    </html>
  );
}


