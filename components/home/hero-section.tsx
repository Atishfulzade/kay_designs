"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const taglines = [
  "Designed with Grace. Stitched with Perfection.",
  "Where Tradition Meets Contemporary Elegance.",
  "Handcrafted for the Modern Woman.",
]

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length)
        setIsVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 py-12 lg:py-0">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Designer Boutique, Pune
              </p>
            </div>

            <h1
              className={`max-w-xl font-serif text-4xl font-bold leading-[1.1] text-foreground transition-all duration-500 sm:text-5xl lg:text-6xl xl:text-7xl text-balance ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {taglines[currentTagline]}
            </h1>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              Discover our curated collection of ethnic and indo-western wear,
              handcrafted for the modern woman who celebrates tradition with style.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-none bg-foreground px-10 py-6 text-sm font-medium uppercase tracking-wider text-background hover:bg-foreground/90"
              >
                <Link href="/shop">
                  Shop Collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-foreground/20 px-10 py-6 text-sm font-medium uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background"
              >
                <Link href="/custom-stitching">Custom Stitching</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 lg:gap-12">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "200+", label: "Unique Designs" },
                { value: "5+", label: "Years of Craft" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Collage */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/hero-new.jpg"
                alt="Kay Designs designer fashion - elegant Indian ethnic wear"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -left-12 h-40 w-40 overflow-hidden border-4 border-background shadow-xl xl:h-52 xl:w-52">
              <Image
                src="/images/hero-accent.jpg"
                alt="Intricate embroidery detail"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-12 flex items-center gap-2 rounded-full bg-card px-5 py-3 shadow-lg xl:top-16">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Handcrafted
              </span>
            </div>

            {/* Decorative line */}
            <div className="absolute -right-6 bottom-1/3 h-32 w-px bg-primary/40" />
          </div>

          {/* Mobile image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:hidden">
            <Image
              src="/images/hero-new.jpg"
              alt="Kay Designs designer fashion - elegant Indian ethnic wear"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
