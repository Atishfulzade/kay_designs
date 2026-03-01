import Image from "next/image"
import { Instagram } from "lucide-react"
import { instagramImages } from "@/lib/data"

export function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <Instagram className="mb-3 h-6 w-6 text-primary" />
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Follow Us
        </p>
        <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
          @Kay Designs.pune
        </h2>
        <div className="mt-4 h-[2px] w-12 bg-primary" />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {instagramImages.map((img) => (
          <a
            key={img.id}
            href="https://instagram.com/Kay Designs.pune"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40">
                <Instagram className="h-6 w-6 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
