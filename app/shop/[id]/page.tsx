"use client"

import { useParams } from "next/navigation"
import { products } from "@/lib/data"
import { ProductDetailContent } from "@/components/shop/product-detail-content"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="mb-4 font-serif text-3xl text-foreground">Product Not Found</h1>
        <p className="mb-6 text-muted-foreground">
          {"The product you're looking for doesn't exist or has been removed."}
        </p>
        <Link
          href="/shop"
          className="rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="transition-colors hover:text-foreground">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href={`/shop?category=${product.category}`}
            className="transition-colors hover:text-foreground"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
        <ProductDetailContent product={product} />
      </div>
    </div>
  )
}
