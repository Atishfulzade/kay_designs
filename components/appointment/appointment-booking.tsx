"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, Clock, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export function AppointmentBooking() {
  const [date, setDate] = useState<Date>()
  const [selectedSlot, setSelectedSlot] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [purpose, setPurpose] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      toast.error("Please select a date")
      return
    }
    if (!selectedSlot) {
      toast.error("Please select a time slot")
      return
    }
    if (!name.trim() || !phone.trim()) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsBooked(true)
    toast.success("Appointment booked successfully!")
  }

  if (isBooked) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl text-foreground">
          Appointment Confirmed!
        </h3>
        <p className="max-w-md text-muted-foreground">
          Your appointment on{" "}
          <span className="font-medium text-foreground">
            {date && format(date, "PPPP")}
          </span>{" "}
          at{" "}
          <span className="font-medium text-foreground">{selectedSlot}</span> has
          been confirmed. We will send a confirmation to your phone shortly.
        </p>
        <div className="mt-4 rounded-sm border border-border bg-secondary/50 p-4">
          <p className="text-sm text-muted-foreground">
            Kay Designs Boutique, Koregaon Park, Pune
          </p>
        </div>
        <Button
          onClick={() => {
            setIsBooked(false)
            setDate(undefined)
            setSelectedSlot("")
            setName("")
            setPhone("")
            setEmail("")
            setPurpose("")
            setNotes("")
          }}
          className="mt-4 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Calendar */}
        <div className="flex flex-col gap-4">
          <Label className="text-sm font-medium">Select Date *</Label>
          <div className="flex justify-center rounded-sm border border-border bg-background p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => {
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                return d < today || d.getDay() === 0
              }}
              className="rounded-md"
            />
          </div>
          {date && (
            <p className="text-center text-sm text-muted-foreground">
              Selected:{" "}
              <span className="font-medium text-foreground">
                {format(date, "PPPP")}
              </span>
            </p>
          )}
        </div>

        {/* Time Slots */}
        <div className="flex flex-col gap-4">
          <Label className="text-sm font-medium">Select Time *</Label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-sm border px-3 py-3 text-sm font-medium transition-all",
                  selectedSlot === slot
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50"
                )}
              >
                <Clock className="h-3.5 w-3.5" />
                {slot}
              </button>
            ))}
          </div>

          {/* Personal Info */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="appt-name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="appt-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="rounded-sm border-border bg-background"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="appt-phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="appt-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="rounded-sm border-border bg-background"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="appt-email" className="text-sm font-medium">
                Email (optional)
              </Label>
              <Input
                id="appt-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-sm border-border bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium">Purpose of Visit *</Label>
              <Select onValueChange={setPurpose} required>
                <SelectTrigger className="rounded-sm border-border bg-background">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="styling">Styling Consultation</SelectItem>
                  <SelectItem value="custom-stitching">
                    Custom Stitching
                  </SelectItem>
                  <SelectItem value="measurements">Measurements</SelectItem>
                  <SelectItem value="collection">
                    Explore Collection
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="appt-notes" className="text-sm font-medium">
          Additional Notes (optional)
        </Label>
        <Textarea
          id="appt-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any specific requirements or questions..."
          rows={3}
          className="rounded-sm border-border bg-background resize-none"
        />
      </div>

      {/* Summary */}
      {date && selectedSlot && (
        <div className="rounded-sm border border-primary/30 bg-primary/5 p-4">
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            Appointment Summary
          </h4>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <p>
              Date:{" "}
              <span className="text-foreground">{format(date, "PPPP")}</span>
            </p>
            <p>
              Time: <span className="text-foreground">{selectedSlot}</span>
            </p>
            <p>
              Location:{" "}
              <span className="text-foreground">
                Kay Designs Boutique, Koregaon Park, Pune
              </span>
            </p>
            {purpose && (
              <p>
                Purpose:{" "}
                <span className="text-foreground capitalize">{purpose}</span>
              </p>
            )}
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-primary py-6 text-sm font-medium uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Booking...
          </>
        ) : (
          "Confirm Appointment"
        )}
      </Button>
    </form>
  )
}
