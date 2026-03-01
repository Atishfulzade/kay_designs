import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function DesignerSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-[4/5] relative">
            <Image
              src="/images/designer.jpg"
              alt="Kay Designs designer at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-lg bg-card/90 backdrop-blur-sm px-6 py-4">
            <p className="text-2xl font-serif font-bold text-foreground">10+</p>
            <p className="text-xs text-muted-foreground">Years of Craftsmanship</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            The Story Behind Kay Designs
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl text-balance">
            Where Tradition Meets Contemporary Elegance
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Born from a deep love for Indian textiles and a vision for modern
            design, Kay Designs brings together the finest fabrics, artisanal
            craftsmanship, and contemporary silhouettes. Every piece in our
            collection tells a story of heritage reimagined for the woman of
            today.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Our atelier in Pune is where creativity blooms. From hand-selected
            fabrics to meticulous embroidery, each garment is crafted with
            attention to detail that honors centuries-old traditions while
            embracing the spirit of modern fashion.
          </p>
          <Link
            href="/about"
            className="group mt-2 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Read Our Full Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
