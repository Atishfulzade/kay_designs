import { HeroSection } from "@/components/home/hero-section"
import { MarqueeBar } from "@/components/home/marquee-bar"
import { FeaturedCollection } from "@/components/home/featured-collection"
import { CategoryShowcase } from "@/components/home/category-showcase"
import { DesignerSection } from "@/components/home/designer-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { InstagramGallery } from "@/components/home/instagram-gallery"
import { CTABanner } from "@/components/home/cta-banner"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBar />
      <FeaturedCollection />
      <CategoryShowcase />
      <DesignerSection />
      <TestimonialsSection />
      <InstagramGallery />
      <CTABanner />
      <NewsletterSection />
    </>
  )
}
