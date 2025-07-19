import { Outfit, Ovo, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

const dmSans = DM_Sans({
  subsets: ["latin"], weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Victor Adebayo – Product & Business Creative Portfolio",
  description: "Portfolio of Victor Adebayo, Product Specialist and Business Creative. Explore my work in product management, business development, web development, and more.",
  keywords: "Victor Adebayo, Product Specialist, Business Creative, Portfolio, Project Management, Web Development, Renewable Energy, Client Success",
  openGraph: {
    title: "Victor Adebayo – Product & Business Creative Portfolio",
    description: "Explore my work in product management, business development, web development, and more.",
    url: "https://yourdomain.com",
    siteName: "Victor Adebayo Portfolio",
    images: [
      {
        url: "/profile-img.jpg",
        width: 800,
        height: 600,
        alt: "Victor Adebayo Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Adebayo – Product & Business Creative Portfolio",
    description: "Explore my work in product management, business development, web development, and more.",
    images: ["/profile-img.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${dmSans.className} antialiased leading-8 overflow-x-hidden dark:bg-(--darkTheme) dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
