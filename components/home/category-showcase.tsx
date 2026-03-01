import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoryShowcase() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Explore Our World
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Shop by Category
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-primary" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
