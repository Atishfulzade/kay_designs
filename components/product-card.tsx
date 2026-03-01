"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { type Product, formatPrice } from "@/lib/data"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toggleItem, isWishlisted } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.sizes[1] || product.sizes[0])
    toast.success(`${product.name} added to cart`)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product.id)
    toast.success(
      wishlisted
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`
    )
  }

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-secondary/30">
        <div className="aspect-[3/4] relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <Badge
            className={`absolute top-3 left-3 text-xs font-medium ${
              product.badge === "Sale"
                ? "bg-destructive text-destructive-foreground"
                : product.badge === "New"
                  ? "bg-foreground text-background"
                  : "bg-primary text-primary-foreground"
            }`}
          >
            {product.badge}
          </Badge>
        )}

        {/* Wishlist */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm transition-all hover:bg-card"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              wishlisted ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-card/90 backdrop-blur-sm p-3 transition-transform duration-300 group-hover:translate-y-0">
          <Button
            onClick={handleAddToCart}
            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1 px-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-xs font-medium text-destructive">
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )}
              % off
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
