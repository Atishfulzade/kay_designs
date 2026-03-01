"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Minus, Plus, ShoppingBag, Star, Truck, RotateCcw, Shield, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"
import { products, formatPrice, type Product } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function ProductDetailContent({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toggleItem, isWishlisted } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size")
      return
    }
    addItem(product, selectedSize, quantity)
    toast.success(`${product.name} added to cart`)
  }

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${product.name} (${product.category}) priced at ${formatPrice(product.price)}. Could you share more details?`
    )
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank")
  }

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-sm border-2 transition-all",
                  selectedImage === i
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative flex-1 aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1 text-xs font-medium text-primary-foreground uppercase tracking-wide">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="mb-3 font-serif text-3xl text-foreground lg:text-4xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "fill-border text-border"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.rating}) {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-serif text-3xl text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % off
                </span>
              </>
            )}
          </div>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Fabric Info */}
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Fabric:</span>
            {product.fabric}
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-foreground">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "flex h-10 min-w-[44px] items-center justify-center rounded-sm border px-4 text-sm font-medium transition-all",
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium text-foreground">
              Quantity
            </p>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-l-sm border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex h-10 w-14 items-center justify-center border-y border-border bg-card text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-r-sm border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleAddToCart}
              className="flex-1 gap-2 rounded-sm bg-primary py-6 text-sm font-medium uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              onClick={() => {
                toggleItem(product.id)
                toast.success(
                  wishlisted ? "Removed from wishlist" : "Added to wishlist"
                )
              }}
              variant="outline"
              className={cn(
                "gap-2 rounded-sm border-border py-6 text-sm font-medium uppercase tracking-wide",
                wishlisted && "border-primary bg-primary/5 text-primary"
              )}
            >
              <Heart
                className={cn("h-4 w-4", wishlisted && "fill-primary")}
              />
              {wishlisted ? "Wishlisted" : "Add to Wishlist"}
            </Button>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppInquiry}
            className="mb-8 flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white uppercase tracking-wide transition-colors hover:bg-[#1fb855]"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire on WhatsApp
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">
                Free Shipping above Rs. 2,000
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RotateCcw className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">
                7 Day Easy Returns
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">
                100% Authentic
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl text-foreground lg:text-3xl">
              You May Also Like
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-primary" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
