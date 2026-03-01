"use client"

import { createContext, useContext, useCallback, useSyncExternalStore } from "react"

interface WishlistContextType {
  items: string[]
  toggleItem: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  count: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

function getStoredWishlist(): string[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem("Kay Designs-wishlist")
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function setStoredWishlist(items: string[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("Kay Designs-wishlist", JSON.stringify(items))
}

let wlListeners: (() => void)[] = []
let wlSnapshot: string[] | null = null
const EMPTY_WISHLIST: string[] = []

function initWlSnapshot() {
  if (wlSnapshot === null && typeof window !== "undefined") {
    wlSnapshot = getStoredWishlist()
  }
}

function emitWlChange() {
  wlSnapshot = getStoredWishlist()
  for (const listener of wlListeners) {
    listener()
  }
}

function wlSubscribe(listener: () => void) {
  wlListeners = [...wlListeners, listener]
  return () => {
    wlListeners = wlListeners.filter((l) => l !== listener)
  }
}

function wlGetSnapshot() {
  initWlSnapshot()
  return wlSnapshot ?? EMPTY_WISHLIST
}

function wlGetServerSnapshot() {
  return EMPTY_WISHLIST
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(wlSubscribe, wlGetSnapshot, wlGetServerSnapshot)

  const toggleItem = useCallback((productId: string) => {
    const current = getStoredWishlist()
    const idx = current.indexOf(productId)
    if (idx >= 0) {
      current.splice(idx, 1)
    } else {
      current.push(productId)
    }
    setStoredWishlist(current)
    emitWlChange()
  }, [])

  const isWishlisted = useCallback(
    (productId: string) => items.includes(productId),
    [items]
  )

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isWishlisted, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
