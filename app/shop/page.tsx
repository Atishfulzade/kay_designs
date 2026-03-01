import type { Metadata } from "next"
import { Suspense } from "react"
import { ShopContent } from "@/components/shop/shop-content"

export const metadata: Metadata = {
  title: "Shop Collection",
  description:
    "Browse our curated collection of designer kurtis, co-ord sets, festive wear, and indo-western outfits. Handcrafted in Pune with love.",
}

export default function ShopPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-secondary/40 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
            Shop All
          </h1>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground leading-relaxed">
            Explore our handcrafted collection of ethnic and contemporary wear,
            designed for every occasion.
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="h-96" />}>
        <ShopContent />
      </Suspense>
    </div>
  )
}
