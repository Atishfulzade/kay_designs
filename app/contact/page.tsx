import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kay Designs boutique in Pune. Visit our store, call us, or send a message. We are here to help.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Boutique",
    lines: ["123, Lane 5, Koregaon Park", "Pune, Maharashtra 411001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 20 2634 5678"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@Kay Designs.in", "orders@Kay Designs.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  return (
    <div className="pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="mb-4 font-serif text-4xl text-foreground lg:text-5xl text-balance">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            We would love to hear from you. Whether you have a question about our
            collection, custom stitching, or anything else, our team is here
            to help.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-primary" />
        </div>

        {/* Contact Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-sm border border-border bg-card p-6 md:p-8">
            <h2 className="mb-2 font-serif text-2xl text-foreground">
              Send Us a Message
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in the form below and we will get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>

          {/* Map + Social */}
          <div className="flex flex-col gap-6">
            {/* Map Embed */}
            <div className="flex-1 overflow-hidden rounded-sm border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1951097744917!2d73.8900977!3d18.5362399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a35c9f8b4d%3A0x4ef8ace4de83a7bc!2sKoregaon%20Park%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kay Designs Boutique Location - Koregaon Park, Pune"
              />
            </div>

            {/* Social Links */}
            <div className="rounded-sm border border-border bg-card p-6">
              <h3 className="mb-4 font-serif text-lg text-foreground">
                Connect With Us
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-sm border border-border p-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                  <span>@Kay Designs.boutique</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-sm border border-border p-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
