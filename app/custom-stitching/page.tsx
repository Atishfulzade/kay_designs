import type { Metadata } from "next"
import { CustomStitchingForm } from "@/components/custom-stitching/stitching-form"
import { Scissors, Ruler, Palette, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Stitching",
  description:
    "Get your dream outfit custom-stitched by Kay Designs. Share your design, provide measurements, and we will bring your vision to life.",
}

const features = [
  {
    icon: Scissors,
    title: "Expert Tailoring",
    description: "Our master tailors bring decades of experience to every stitch",
  },
  {
    icon: Ruler,
    title: "Perfect Fit",
    description: "Precise measurements ensure your outfit fits you flawlessly",
  },
  {
    icon: Palette,
    title: "Your Design",
    description: "Bring your own design or choose from our curated collection",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your timeline and deliver on the promised date",
  },
]

export default function CustomStitchingPage() {
  return (
    <div className="pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Bespoke Tailoring
          </p>
          <h1 className="mb-4 font-serif text-4xl text-foreground lg:text-5xl text-balance">
            Custom Stitching
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Have a design in mind? Share your vision with us and our expert
            tailors will bring it to life with impeccable craftsmanship and
            attention to detail.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>

        {/* Features */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-sm border border-border bg-card p-6 md:p-10">
            <h2 className="mb-2 font-serif text-2xl text-foreground">
              Submit Your Design
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              Fill in the details below and our team will get in touch within 24
              hours.
            </p>
            <CustomStitchingForm />
          </div>
        </div>
      </div>
    </div>
  )
}
