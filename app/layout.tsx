import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { CartProvider } from "@/components/cart-provider"
import { WishlistProvider } from "@/components/wishlist-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Kay Designs | Designer Boutique Pune",
    template: "%s | Kay Designs",
  },
  description:
    "Kay Designs is a premium designer boutique in Pune offering curated ethnic wear, kurtis, co-ord sets, festive wear, and indo-western fashion. Custom stitching available.",
  keywords: [
    "boutique",
    "Pune",
    "designer wear",
    "kurtis",
    "ethnic wear",
    "indian fashion",
    "custom stitching",
    "co-ord sets",
    "festive wear",
    "indo-western",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#B76E79",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </WishlistProvider>
        </CartProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FFFCF9",
              border: "1px solid #E8DDD4",
              color: "#2C2420",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
