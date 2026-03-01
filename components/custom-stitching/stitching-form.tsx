"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarIcon, Upload, Loader2, Check } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  garmentType: z.string().min(1, "Please select a garment type"),
  fabric: z.string().min(1, "Please describe the fabric preference"),
  bust: z.string().min(1, "Required"),
  waist: z.string().min(1, "Required"),
  hips: z.string().min(1, "Required"),
  length: z.string().min(1, "Required"),
  designNotes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function CustomStitchingForm() {
  const [deadline, setDeadline] = useState<Date>()
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success(
      "Your custom stitching request has been submitted! We will contact you within 24 hours."
    )
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl text-foreground">
          Request Submitted!
        </h3>
        <p className="max-w-md text-muted-foreground">
          Thank you for your custom stitching request. Our team will review your
          design and contact you within 24 hours with a quote.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Personal Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            placeholder="Your full name"
            className="rounded-sm border-border bg-background"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number *
          </Label>
          <Input
            id="phone"
            placeholder="+91 98765 43210"
            className="rounded-sm border-border bg-background"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="rounded-sm border-border bg-background"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Garment Details */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Garment Type *</Label>
          <Select onValueChange={(v) => setValue("garmentType", v)}>
            <SelectTrigger className="rounded-sm border-border bg-background">
              <SelectValue placeholder="Select garment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kurti">Kurti</SelectItem>
              <SelectItem value="lehenga">Lehenga</SelectItem>
              <SelectItem value="anarkali">Anarkali</SelectItem>
              <SelectItem value="sharara">Sharara Set</SelectItem>
              <SelectItem value="saree-blouse">Saree Blouse</SelectItem>
              <SelectItem value="coord-set">Co-ord Set</SelectItem>
              <SelectItem value="gown">Gown</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.garmentType && (
            <p className="text-xs text-destructive">
              {errors.garmentType.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="fabric" className="text-sm font-medium">
            Fabric Preference *
          </Label>
          <Input
            id="fabric"
            placeholder="e.g., Silk, Cotton, Georgette"
            className="rounded-sm border-border bg-background"
            {...register("fabric")}
          />
          {errors.fabric && (
            <p className="text-xs text-destructive">{errors.fabric.message}</p>
          )}
        </div>
      </div>

      {/* Measurements */}
      <div>
        <Label className="mb-3 block text-sm font-medium">
          Measurements (in inches) *
        </Label>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Bust</span>
            <Input
              placeholder="36"
              className="rounded-sm border-border bg-background"
              {...register("bust")}
            />
            {errors.bust && (
              <p className="text-xs text-destructive">{errors.bust.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Waist</span>
            <Input
              placeholder="30"
              className="rounded-sm border-border bg-background"
              {...register("waist")}
            />
            {errors.waist && (
              <p className="text-xs text-destructive">{errors.waist.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Hips</span>
            <Input
              placeholder="38"
              className="rounded-sm border-border bg-background"
              {...register("hips")}
            />
            {errors.hips && (
              <p className="text-xs text-destructive">{errors.hips.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Length</span>
            <Input
              placeholder="42"
              className="rounded-sm border-border bg-background"
              {...register("length")}
            />
            {errors.length && (
              <p className="text-xs text-destructive">
                {errors.length.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Design Reference Upload */}
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-medium">
          Upload Design Reference (optional)
        </Label>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="design-upload"
          />
          <label
            htmlFor="design-upload"
            className="flex cursor-pointer flex-col items-center gap-3 rounded-sm border-2 border-dashed border-border bg-background p-8 text-center transition-colors hover:border-primary/50 hover:bg-secondary/50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Design preview"
                className="h-40 w-auto rounded-sm object-contain"
              />
            ) : (
              <>
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Click to upload
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </>
            )}
          </label>
        </div>
      </div>

      {/* Deadline */}
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-medium">
          Preferred Delivery Date (optional)
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start rounded-sm border-border bg-background text-left font-normal",
                !deadline && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {deadline ? format(deadline, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={deadline}
              onSelect={setDeadline}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Design Notes */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="designNotes" className="text-sm font-medium">
          Additional Notes (optional)
        </Label>
        <Textarea
          id="designNotes"
          placeholder="Any specific requirements, color preferences, embroidery details, etc."
          rows={4}
          className="rounded-sm border-border bg-background resize-none"
          {...register("designNotes")}
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
            Submitting...
          </>
        ) : (
          "Submit Stitching Request"
        )}
      </Button>
    </form>
  )
}
