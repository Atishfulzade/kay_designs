import type { Metadata } from "next"
import { CartContent } from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your cart and proceed to checkout at Kay Designs boutique.",
}

export default function CartPage() {
  return (
    <div className="pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl text-foreground">Shopping Cart</h1>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>
        <CartContent />
      </div>
    </div>
  )
}
