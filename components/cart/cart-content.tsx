"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/data"
import { toast } from "sonner"

export function CartContent() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart()
  const [coupon, setCoupon] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)
  const [discount, setDiscount] = useState(0)

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "Kay Designs10") {
      setAppliedCoupon("Kay Designs10")
      setDiscount(Math.round(subtotal * 0.1))
      toast.success("Coupon applied! 10% discount")
    } else if (coupon.toUpperCase() === "FIRST20") {
      setAppliedCoupon("FIRST20")
      setDiscount(Math.round(subtotal * 0.2))
      toast.success("Coupon applied! 20% discount")
    } else {
      toast.error("Invalid coupon code")
    }
    setCoupon("")
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setDiscount(0)
    toast.success("Coupon removed")
  }

  const shipping = subtotal > 2000 ? 0 : 99
  const finalTotal = subtotal - discount + shipping

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <div>
          <h2 className="mb-2 font-serif text-2xl text-foreground">
            Your Cart is Empty
          </h2>
          <p className="text-muted-foreground">
            Looks like you have not added anything to your cart yet.
          </p>
        </div>
        <Link
          href="/shop"
          className="flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Continue Shopping
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        {/* Header */}
        <div className="mb-4 hidden border-b border-border pb-4 md:grid md:grid-cols-12 md:gap-4">
          <span className="col-span-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Product
          </span>
          <span className="col-span-2 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Quantity
          </span>
          <span className="col-span-2 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Subtotal
          </span>
          <span className="col-span-2 text-right text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Action
          </span>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="grid items-center gap-4 rounded-sm border border-border bg-card p-4 md:grid-cols-12"
            >
              {/* Product */}
              <div className="flex items-center gap-4 md:col-span-6">
                <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-sm bg-secondary">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/shop/${item.product.id}`}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Size: {item.size}
                  </p>
                  <p className="text-sm font-medium text-foreground md:hidden">
                    {formatPrice(item.product.price)}
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-center md:col-span-2">
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-border bg-background transition-colors hover:bg-secondary"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="flex h-8 w-10 items-center justify-center border-y border-border bg-background text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.size, item.quantity + 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-r-sm border border-border bg-background transition-colors hover:bg-secondary"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="hidden text-center md:col-span-2 md:block">
                <span className="text-sm font-medium text-foreground">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>

              {/* Remove */}
              <div className="flex justify-end md:col-span-2">
                <button
                  onClick={() => {
                    removeItem(item.product.id, item.size)
                    toast.success("Item removed from cart")
                  }}
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-destructive"
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="md:hidden">Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-28 rounded-sm border border-border bg-card p-6">
          <h2 className="mb-6 font-serif text-xl text-foreground">
            Order Summary
          </h2>

          {/* Coupon Code */}
          <div className="mb-6">
            <label
              htmlFor="coupon"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Coupon Code
            </label>
            {appliedCoupon ? (
              <div className="flex items-center justify-between rounded-sm border border-primary/20 bg-primary/5 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {appliedCoupon}
                  </span>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-xs text-muted-foreground hover:text-destructive"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Input
                  id="coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code"
                  className="rounded-sm border-border bg-background text-sm"
                />
                <Button
                  onClick={handleApplyCoupon}
                  variant="outline"
                  className="rounded-sm border-border px-4 text-sm"
                >
                  Apply
                </Button>
              </div>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              Try: Kay Designs10 or FIRST20
            </p>
          </div>

          {/* Summary Lines */}
          <div className="flex flex-col gap-3 border-t border-border pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
              <span className="text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary">Discount</span>
                <span className="text-primary">
                  - {formatPrice(discount)}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">
                {shipping === 0 ? (
                  <span className="text-primary">Free</span>
                ) : (
                  formatPrice(shipping)
                )}
              </span>
            </div>

            {shipping > 0 && (
              <p className="text-xs text-muted-foreground">
                Free shipping on orders above Rs. 2,000
              </p>
            )}

            <div className="border-t border-border pt-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-serif text-xl text-foreground">
                  {formatPrice(finalTotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <Button
            onClick={() =>
              toast.success(
                "Checkout coming soon! We will reach out to you on WhatsApp to confirm your order."
              )
            }
            className="mt-6 w-full rounded-sm bg-primary py-6 text-sm font-medium uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
          >
            Proceed to Checkout
          </Button>

          {/* Trust */}
          <div className="mt-4 flex flex-col items-center gap-2 text-center">
            <p className="text-xs text-muted-foreground">
              Secure checkout via WhatsApp confirmation
            </p>
            <p className="text-xs text-muted-foreground">
              COD & UPI payments accepted
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
