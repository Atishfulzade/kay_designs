"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { products, categories, formatPrice } from "@/lib/data"

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
type SortOption = "newest" | "price-low" | "price-high" | "bestseller"

export function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  )
  const [priceRange, setPriceRange] = useState([0, 12000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sort, setSort] = useState<SortOption>("newest")

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 12000])
    setSelectedSizes([])
  }

  const activeFilterCount =
    selectedCategories.length +
    selectedSizes.length +
    (priceRange[0] > 0 || priceRange[1] < 12000 ? 1 : 0)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      )
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "bestseller":
        result.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, priceRange, selectedSizes, sort])

  const filterPanel = (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Category
        </h3>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-3">
              <Checkbox
                checked={selectedCategories.includes(cat.slug)}
                onCheckedChange={() => toggleCategory(cat.slug)}
              />
              <span className="text-sm text-foreground">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Price Range
        </h3>
        <Slider
          min={0}
          max={12000}
          step={500}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          Size
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-medium transition-colors ${
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" size="sm" onClick={clearFilters} className="gap-2">
          <X className="h-3 w-3" /> Clear Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge className="ml-1 h-5 w-5 rounded-full bg-primary p-0 text-[10px] text-primary-foreground flex items-center justify-center">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-card overflow-y-auto">
              <SheetTitle className="mb-6 text-lg font-serif font-bold text-foreground">Filters</SheetTitle>
              {filterPanel}
            </SheetContent>
          </Sheet>

          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="w-44 bg-card text-foreground">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="bestseller">Bestseller</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active filters */}
      {activeFilterCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {selectedCategories.map((slug) => {
            const cat = categories.find((c) => c.slug === slug)
            return (
              <Badge
                key={slug}
                variant="secondary"
                className="gap-1 bg-secondary text-secondary-foreground cursor-pointer"
                onClick={() => toggleCategory(slug)}
              >
                {cat?.name}
                <X className="h-3 w-3" />
              </Badge>
            )
          })}
          {selectedSizes.map((size) => (
            <Badge
              key={size}
              variant="secondary"
              className="gap-1 bg-secondary text-secondary-foreground cursor-pointer"
              onClick={() => toggleSize(size)}
            >
              Size: {size}
              <X className="h-3 w-3" />
            </Badge>
          ))}
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-60 shrink-0 lg:block">{filterPanel}</aside>

        {/* Product grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <p className="font-serif text-xl font-bold text-foreground">
                No products found
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters to discover more.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
