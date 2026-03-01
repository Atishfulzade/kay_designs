"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Loved by Our Clients
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
            What They Say
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-primary" />
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="pl-4 md:basis-1/2">
                <Card className="border-border bg-card h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < t.rating
                              ? "fill-primary text-primary"
                              : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                      {`"${t.text}"`}
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <Avatar className="h-10 w-10 bg-primary/10">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                          {t.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-border text-foreground" />
          <CarouselNext className="hidden md:flex -right-12 border-border text-foreground" />
        </Carousel>
      </div>
    </section>
  )
}
