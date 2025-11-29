import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saimon Hossen | UI/UX & Graphic Designer | Portfolio",
  description:
    "My design journey is fueled by a passion for problem-solving, ensuring that each project I undertake is not just visually appealing but also user-centric.",
  icons: {
    icon: "/images/saimon-profile.png",
    apple: "/images/saimon-profile.png",
  },
  keywords: [
    "UI/UX Designer",
    "Visual Designer",
    "Graphic Designer",
    "Figma",
    "Adobe XD",
    "Mobile App Design",
    "Web Design",
    "Bangladesh",
    "Saimon Hossen",
    "saimonhossen",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Saimon Hossen | UI/UX & Visual Designer",
    description:
      "UI/UX Designer with 3+ years of experience creating user-centric digital experiences using Figma, Adobe XD, and modern design tools.",
    type: "website",
    locale: "en_US",
    url: "https://saimonhossen.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saimon Hossen | UI/UX & Visual Designer",
    description:
      "UI/UX Designer with 3+ years of experience creating user-centric digital experiences using Figma, Adobe XD, and modern design tools.",
  },
  alternates: {
    canonical: "https://saimonhossen.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saimon Hossen",
              url: "https://saimonhossen.com",
              jobTitle: "UI/UX Designer",
              telephone: "+8801874460944",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangladesh",
                addressCountry: "BD",
              },
              sameAs: ["https://www.behance.net/saimonhossen5"],
              knowsAbout: ["UI Design", "UX Design", "Figma", "Adobe XD", "Graphic Design", "Mobile App Design"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
