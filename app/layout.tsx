import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabin Budhathoki | Full Stack Developer",
  description: "Full Stack Developer based in Kathmandu, Nepal. MERN stack, Next.js, Tailwind CSS, and modern UI development.",

  openGraph: {
    title: "Nabin Budhathoki | Portfolio",
    description:
      "Explore my developer portfolio with MERN stack projects, UI/UX work, and full-stack apps.",
    url: "https://myportfolio-iota-inky.vercel.app/",   
    siteName: "Nabin Budhathoki Portfolio",
    images: [
      {
        url: "https://myportfolio-iota-inky.vercel.app/metaImg.png", 
        width: 1200,
        height: 630,
        alt: "Nabin Budhathoki Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nabin Budhathoki | Portfolio",
    description:
      "Explore MERN stack projects, full-stack apps, and modern UI development.",
    images: ["https://myportfolio-iota-inky.vercel.app/metaImg.png"],
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

  className={`${geistSans.variable} ${geistMono.variable}    antialiased`}
>
 
  {children}
</body>
    </html>
  );
}
