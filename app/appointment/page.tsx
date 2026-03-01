import type { Metadata } from "next"
import { AppointmentBooking } from "@/components/appointment/appointment-booking"
import { MapPin, Clock, Phone, CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a private appointment at Kay Designs boutique in Pune. Get personalized styling advice and explore our exclusive collection.",
}

const benefits = [
  {
    icon: CalendarDays,
    title: "Private Session",
    description: "One-on-one styling consultation at our boutique",
  },
  {
    icon: MapPin,
    title: "In-Store Experience",
    description: "Visit our Koregaon Park studio for a curated experience",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Morning, afternoon, or evening slots available",
  },
  {
    icon: Phone,
    title: "Instant Confirmation",
    description: "Receive confirmation via WhatsApp within minutes",
  },
]

export default function AppointmentPage() {
  return (
    <div className="pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Visit Us
          </p>
          <h1 className="mb-4 font-serif text-4xl text-foreground lg:text-5xl text-balance">
            Book an Appointment
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Schedule a private session at our boutique for personalized styling,
            custom measurements, or to explore our latest collection.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>

        {/* Benefits */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-sm border border-border bg-card p-6 md:p-10">
            <h2 className="mb-2 font-serif text-2xl text-foreground">
              Choose Your Slot
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              Select your preferred date and time, and we will confirm your
              appointment.
            </p>
            <AppointmentBooking />
          </div>
        </div>
      </div>
    </div>
  )
}
