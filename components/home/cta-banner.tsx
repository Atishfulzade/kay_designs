import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function CTABanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:px-8">
        <CalendarDays className="h-8 w-8 text-primary-foreground/80" />
        <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
          Book Your Exclusive Appointment
        </h2>
        <p className="max-w-lg text-base text-primary-foreground/80">
          Visit our atelier for a personalized styling session. Our designers
          will help you find the perfect outfit for any occasion.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full bg-card px-8 text-foreground hover:bg-card/90"
        >
          <Link href="/appointment">Schedule a Visit</Link>
        </Button>
      </div>
    </section>
  )
}
