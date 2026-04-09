import type { Metadata } from "next";
import { Cormorant_Garamond, Albert_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Lawn Barber | Licensed Lawn Care Service in Fresno, CA",
  description:
    "Fresno's licensed lawn care specialist. Chase Raffellini delivers precision cuts, aeration, sod installation, sprinkler repair, and more. World-class care, local roots. Call (559) 578-4820.",
  keywords:
    "lawn care Fresno, lawn mowing Fresno, aeration Fresno, sod installation Fresno, sprinkler repair Fresno, weed control Fresno, The Lawn Barber",
  openGraph: {
    title: "The Lawn Barber | Licensed Lawn Care in Fresno, CA",
    description:
      "Fresno's licensed lawn barber. World-class care, local roots. Call Chase Raffellini for a free estimate.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${albertSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LawnCareService",
              name: "The Lawn Barber",
              telephone: "(559) 578-4820",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2490 N Antioch Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93722",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "07:30",
                  closes: "18:30",
                },
              ],
              areaServed: [
                "Fresno, CA",
                "Lemoore, CA",
                "Reedley, CA",
                "Sanger, CA",
                "Selma, CA",
                "Dinuba, CA",
              ],
              sameAs: ["https://www.yelp.com/biz/the-lawn-barber-fresno"],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
