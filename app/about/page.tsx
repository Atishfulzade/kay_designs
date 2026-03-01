import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Sparkles, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story of Kay Designs - a premium designer boutique in Pune dedicated to crafting timeless Indian ethnic wear with a modern twist.",
}

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Kay Designs started as a small home studio in Pune, born from a passion for creating unique ethnic wear that blends tradition with contemporary design.",
  },
  {
    year: "2019",
    title: "First Boutique",
    description:
      "We opened our first boutique in Koregaon Park, Pune, offering curated collections and custom stitching services to our growing clientele.",
  },
  {
    year: "2021",
    title: "Going Digital",
    description:
      "Expanded our reach through our online presence, serving customers across India with the same personalized experience.",
  },
  {
    year: "2023",
    title: "Growing Community",
    description:
      "Over 5,000 happy customers and counting, with a dedicated team of 15 artisans and designers bringing every creation to life.",
  },
  {
    year: "2025",
    title: "New Horizons",
    description:
      "Launching exclusive festive collections and expanding our custom stitching services with new fabric partnerships.",
  },
]

const stats = [
  { icon: Users, label: "Happy Customers", value: "5,000+" },
  { icon: Heart, label: "Designs Created", value: "2,500+" },
  { icon: Sparkles, label: "Custom Orders", value: "1,200+" },
  { icon: Award, label: "Years of Craft", value: "7+" },
]

export default function AboutPage() {
  return (
    <div className="pb-20 pt-28">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Our Story
            </p>
            <h1 className="mb-6 font-serif text-4xl text-foreground lg:text-5xl text-balance">
              Crafting Elegance, One Stitch at a Time
            </h1>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Kay Designs was born from a simple yet profound belief: every woman
                deserves clothing that makes her feel extraordinary. Founded in
                Pune in 2018, we set out to reimagine Indian ethnic wear for the
                modern woman.
              </p>
              <p>
                Our founder, a design graduate with roots in traditional Indian
                textiles, noticed a gap between mass-produced ethnic wear and the
                bespoke luxury market. Kay Designs bridges that gap, offering
                beautifully crafted pieces that honour our textile heritage while
                embracing contemporary aesthetics.
              </p>
              <p>
                Every piece at Kay Designs is thoughtfully designed, carefully sourced,
                and meticulously crafted. From our signature kurtis to
                show-stopping festive wear, each garment tells a story of
                craftsmanship and care.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/about-hero.jpg"
              alt="Kay Designs boutique workspace with fabric swatches and design sketches"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20 bg-secondary/50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif text-3xl text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Milestones
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-12 flex-1 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designer */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-sm lg:order-2">
              <Image
                src="/images/designer.jpg"
                alt="Kay Designs founder and designer in her studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Meet the Designer
              </p>
              <h2 className="mb-6 font-serif text-3xl text-foreground lg:text-4xl">
                A Vision for Modern Indian Fashion
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Our founder and lead designer brings a unique perspective to
                  Indian fashion, combining formal design education with a deep
                  understanding of traditional textile techniques passed down
                  through generations.
                </p>
                <p>
                  With experience working with renowned designers in Mumbai and
                  Jaipur, she returned to Pune with a mission: to make
                  high-quality, beautifully designed ethnic wear accessible
                  without compromising on craftsmanship.
                </p>
                <p>
                  {'"'}Every garment is a conversation between tradition and
                  modernity. We honour the techniques of the past while designing
                  for the woman of today.{'"'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl text-foreground">
            Ready to Experience Kay Designs?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Visit our boutique in Koregaon Park, Pune or explore our collection
            online.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-sm bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Collection
            </Link>
            <Link
              href="/appointment"
              className="rounded-sm border border-border bg-card px-8 py-3 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
