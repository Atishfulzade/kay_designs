"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Check } from "lucide-react"
import { toast } from "sonner"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields")
      return
    }
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success("Message sent successfully!")
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-serif text-xl text-foreground">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setName("")
            setEmail("")
            setPhone("")
            setSubject("")
            setMessage("")
          }}
          className="mt-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="rounded-sm border-border bg-background"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email" className="text-sm font-medium">
            Email Address *
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="rounded-sm border-border bg-background"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-phone" className="text-sm font-medium">
            Phone (optional)
          </Label>
          <Input
            id="contact-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="rounded-sm border-border bg-background"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Subject *</Label>
          <Select onValueChange={setSubject} required>
            <SelectTrigger className="rounded-sm border-border bg-background">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="order">Order Related</SelectItem>
              <SelectItem value="custom">Custom Stitching</SelectItem>
              <SelectItem value="appointment">Appointment</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message" className="text-sm font-medium">
          Message *
        </Label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          rows={5}
          className="rounded-sm border-border bg-background resize-none"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-primary py-6 text-sm font-medium uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
