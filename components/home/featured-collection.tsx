"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/data"

export function FeaturedCollection() {
  const featured = getFeaturedProducts()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Handpicked for You
        </p>
        <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
          Curated Collection
        </h2>
        <div className="mt-4 h-[2px] w-12 bg-primary" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/shop"
          className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          View All Collection
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
