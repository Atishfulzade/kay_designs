"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { toast } from "sonner"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      toast.success("Thank you for subscribing! Stay tuned for updates.")
      setEmail("")
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="rounded-2xl bg-secondary/60 px-6 py-16 text-center sm:px-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
          Stay in the Loop
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and style
          inspiration from Kay Designs.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border-border bg-card px-6 text-foreground"
            required
          />
          <Button
            type="submit"
            className="gap-2 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
