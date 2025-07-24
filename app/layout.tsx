import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meshack Kataboi - Software Engineering Student",
  description:
    "Personal portfolio website of Meshack Kataboi, a Software Engineering student at Zetech University, Nairobi, Kenya.",
  keywords: "Meshack Kataboi, Software Engineering, Zetech University, Nairobi, Kenya, Web Developer, Portfolio",
  authors: [{ name: "Meshack Kataboi" }],
  openGraph: {
    title: "Meshack Kataboi - Software Engineering Student",
    description:
      "Personal portfolio website showcasing my journey from childhood in Nairobi to pursuing Software Engineering at Zetech University.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meshack Kataboi - Software Engineering Student",
    description:
      "Personal portfolio website showcasing my journey from childhood in Nairobi to pursuing Software Engineering at Zetech University.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
