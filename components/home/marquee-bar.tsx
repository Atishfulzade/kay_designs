export function MarqueeBar() {
  const items = [
    "NEW ARRIVALS",
    "CUSTOM STITCHING",
    "FREE DELIVERY ON ORDERS ABOVE 2999",
    "HANDCRAFTED WITH LOVE",
    "BOOK YOUR APPOINTMENT",
    "EXCLUSIVE DESIGNS",
  ]

  return (
    <div className="overflow-hidden bg-foreground py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            {item}
            <span className="ml-8 text-primary" aria-hidden="true">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
