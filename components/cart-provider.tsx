"use client"

import { createContext, useContext, useCallback, useSyncExternalStore } from "react"
import type { Product } from "@/lib/data"

export interface CartItem {
  product: Product
  quantity: number
  size: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem("Kay Designs-cart")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function setStoredCart(items: CartItem[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("Kay Designs-cart", JSON.stringify(items))
}

let listeners: (() => void)[] = []
let cartSnapshot: CartItem[] | null = null
const EMPTY_CART: CartItem[] = []

function initSnapshot() {
  if (cartSnapshot === null && typeof window !== "undefined") {
    cartSnapshot = getStoredCart()
  }
}

function emitChange() {
  cartSnapshot = getStoredCart()
  for (const listener of listeners) {
    listener()
  }
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener]
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function getSnapshot() {
  initSnapshot()
  return cartSnapshot ?? EMPTY_CART
}

function getServerSnapshot() {
  return EMPTY_CART
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const addItem = useCallback(
    (product: Product, size: string, quantity = 1) => {
      const current = getStoredCart()
      const existingIndex = current.findIndex(
        (item) => item.product.id === product.id && item.size === size
      )
      if (existingIndex >= 0) {
        current[existingIndex].quantity += quantity
      } else {
        current.push({ product, quantity, size })
      }
      setStoredCart(current)
      emitChange()
    },
    []
  )

  const removeItem = useCallback((productId: string, size: string) => {
    const current = getStoredCart().filter(
      (item) => !(item.product.id === productId && item.size === size)
    )
    setStoredCart(current)
    emitChange()
  }, [])

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) => {
      const current = getStoredCart()
      const item = current.find(
        (i) => i.product.id === productId && i.size === size
      )
      if (item) {
        if (quantity <= 0) {
          const filtered = current.filter(
            (i) => !(i.product.id === productId && i.size === size)
          )
          setStoredCart(filtered)
        } else {
          item.quantity = quantity
          setStoredCart(current)
        }
        emitChange()
      }
    },
    []
  )

  const clearCart = useCallback(() => {
    setStoredCart([])
    emitChange()
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
