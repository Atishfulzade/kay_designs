export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  sizes: string[]
  fabric: string
  category: "kurtis" | "coord-sets" | "festive-wear" | "indo-western"
  description: string
  badge?: "New" | "Sale" | "Bestseller"
  rating: number
  reviews: number
  careInstructions: string[]
  deliveryInfo: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  location: string
  avatar: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
  count: number
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Kurtis",
    slug: "kurtis",
    image: "/images/categories/kurtis.jpg",
    description: "Elegant everyday wear with intricate detailing",
    count: 3,
  },
  {
    id: "2",
    name: "Co-ord Sets",
    slug: "coord-sets",
    image: "/images/categories/coord-sets.jpg",
    description: "Perfectly matched sets for effortless style",
    count: 3,
  },
  {
    id: "3",
    name: "Festive Wear",
    slug: "festive-wear",
    image: "/images/categories/festive.jpg",
    description: "Statement pieces for celebrations and occasions",
    count: 3,
  },
  {
    id: "4",
    name: "Indo-Western",
    slug: "indo-western",
    image: "/images/categories/indo-western.jpg",
    description: "Contemporary fusion of tradition and trend",
    count: 3,
  },
]

export const products: Product[] = [
  {
    id: "kurti-1",
    name: "Azure Chikankari Kurti",
    price: 2499,
    originalPrice: 3299,
    images: ["/images/products/kurti-1.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Pure Cotton with Chikankari Embroidery",
    category: "kurtis",
    description:
      "A timeless powder blue kurti featuring exquisite hand-done Chikankari embroidery from Lucknow. The delicate white thread work on soft cotton creates an effortlessly elegant look perfect for both office and casual outings.",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 124,
    careInstructions: [
      "Hand wash or gentle machine wash in cold water",
      "Use mild detergent",
      "Dry in shade",
      "Iron on medium heat",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "kurti-2",
    name: "Rosewood Embroidered Kurti",
    price: 1899,
    originalPrice: 2499,
    images: ["/images/products/kurti-2.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Cotton Blend with Gold Thread Work",
    category: "kurtis",
    description:
      "A stunning dusty rose A-line kurti adorned with golden thread work at the neckline and hemline. The flattering silhouette and warm tones make it a versatile addition to any wardrobe.",
    badge: "Sale",
    rating: 4.6,
    reviews: 89,
    careInstructions: [
      "Hand wash recommended",
      "Do not bleach",
      "Dry in shade",
      "Iron inside out on low heat",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "kurti-3",
    name: "Olive Block Print Kurti",
    price: 1699,
    images: ["/images/products/kurti-3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Pure Cotton with Hand Block Print",
    category: "kurtis",
    description:
      "A refreshing olive green straight-cut kurti featuring traditional Rajasthani hand block print patterns. The earthy tones and artisanal craftsmanship bring a touch of heritage to your everyday style.",
    badge: "New",
    rating: 4.5,
    reviews: 42,
    careInstructions: [
      "Hand wash separately in cold water",
      "Block prints may bleed slightly on first wash",
      "Dry in shade",
      "Iron on medium heat",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "coord-1",
    name: "Ivory Palazzo Set",
    price: 3299,
    originalPrice: 4199,
    images: ["/images/products/coord-1.jpg"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Chanderi Silk with Gold Embroidery",
    category: "coord-sets",
    description:
      "An elegant beige and cream co-ord set featuring a beautifully embroidered cropped top paired with flowing wide-leg palazzos. Subtle golden embroidery adds a touch of luxury to this versatile ensemble.",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 156,
    careInstructions: [
      "Dry clean recommended for best results",
      "Store on padded hangers",
      "Steam to remove wrinkles",
      "Keep away from direct sunlight",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "coord-2",
    name: "Lavender Cape Set",
    price: 2899,
    images: ["/images/products/coord-2.jpg"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Georgette with Silver Thread Work",
    category: "coord-sets",
    description:
      "A contemporary lavender co-ord set with a flowing short cape top and sleek cigarette pants. The silver thread work adds shimmer and sophistication to this modern ethnic ensemble.",
    badge: "New",
    rating: 4.7,
    reviews: 67,
    careInstructions: [
      "Dry clean only",
      "Store flat or on padded hanger",
      "Do not wring",
      "Steam gently to remove creases",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "coord-3",
    name: "Sage Peplum Set",
    price: 3499,
    originalPrice: 4499,
    images: ["/images/products/coord-3.jpg"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton Silk with Mirror Work",
    category: "coord-sets",
    description:
      "A charming sage green co-ord featuring a peplum top with intricate mirror work paired with a graceful flared skirt. The traditional mirror embroidery meets contemporary design for a festive yet modern look.",
    badge: "Sale",
    rating: 4.6,
    reviews: 93,
    careInstructions: [
      "Dry clean recommended",
      "Handle mirror work with care",
      "Store in garment bag",
      "Iron on reverse side",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "festive-1",
    name: "Royal Crimson Lehenga",
    price: 8999,
    originalPrice: 11999,
    images: ["/images/products/festive-1.jpg"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Pure Silk with Gold Zari Embroidery",
    category: "festive-wear",
    description:
      "A breathtaking deep red silk lehenga with opulent gold zari embroidery and a flowing dupatta. Perfect for weddings and festive celebrations, this piece is a testament to traditional Indian craftsmanship at its finest.",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 201,
    careInstructions: [
      "Dry clean only",
      "Store in muslin cloth",
      "Avoid folding on embroidery",
      "Keep away from moisture",
    ],
    deliveryInfo:
      "Free delivery in Pune within 3-5 days. Pan-India delivery in 7-10 days. Custom stitching available.",
  },
  {
    id: "festive-2",
    name: "Teal Anarkali Suit",
    price: 5999,
    images: ["/images/products/festive-2.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Georgette with Silver Thread Embroidery",
    category: "festive-wear",
    description:
      "A regal teal blue Anarkali suit with stunning silver thread embroidery and a flowing dupatta. The floor-length silhouette creates a dramatic, elegant look that makes a statement at any festive gathering.",
    badge: "New",
    rating: 4.8,
    reviews: 78,
    careInstructions: [
      "Dry clean only",
      "Store on padded hanger",
      "Steam to refresh",
      "Avoid direct contact with perfume",
    ],
    deliveryInfo:
      "Free delivery in Pune within 3-5 days. Pan-India delivery in 7-10 days.",
  },
  {
    id: "festive-3",
    name: "Champagne Sharara Set",
    price: 7499,
    originalPrice: 9999,
    images: ["/images/products/festive-3.jpg"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Organza with Sequin Work",
    category: "festive-wear",
    description:
      "An ethereal champagne gold and peach sharara set with intricate sequin work and a delicate organza dupatta. This stunning ensemble catches the light beautifully, making you shine at every celebration.",
    badge: "Sale",
    rating: 4.7,
    reviews: 112,
    careInstructions: [
      "Dry clean only",
      "Handle sequins with care",
      "Store in garment bag",
      "Do not iron directly on sequins",
    ],
    deliveryInfo:
      "Free delivery in Pune within 3-5 days. Pan-India delivery in 7-10 days.",
  },
  {
    id: "indo-1",
    name: "Blush Fusion Dress",
    price: 3799,
    images: ["/images/products/indo-1.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "Crepe with Traditional Embroidery",
    category: "indo-western",
    description:
      "A modern indo-western fusion dress in blush pink featuring an asymmetric hemline with traditional Indian embroidery on a contemporary silhouette. Where heritage meets haute couture.",
    badge: "New",
    rating: 4.6,
    reviews: 54,
    careInstructions: [
      "Dry clean recommended",
      "Iron on low heat",
      "Store on hanger",
      "Avoid prolonged sunlight exposure",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "indo-2",
    name: "Ivory Cape Jumpsuit",
    price: 4299,
    originalPrice: 5499,
    images: ["/images/products/indo-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Silk Blend with Gold Detailing",
    category: "indo-western",
    description:
      "A stunning ivory indo-western jumpsuit with dramatic cape sleeves and an elegant gold belt. This statement piece effortlessly blends Indian elegance with modern sophistication for the contemporary woman.",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 143,
    careInstructions: [
      "Dry clean only",
      "Store on padded hanger",
      "Steam to remove wrinkles",
      "Handle cape sleeves with care",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
  {
    id: "indo-3",
    name: "Navy Dhoti Ensemble",
    price: 3999,
    images: ["/images/products/indo-3.jpg"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Twill with Zardozi Work",
    category: "indo-western",
    description:
      "A bold navy blue indo-western ensemble featuring dhoti-style pants paired with a structured crop jacket. The golden Zardozi work adds traditional grandeur to this avant-garde silhouette.",
    rating: 4.5,
    reviews: 38,
    careInstructions: [
      "Dry clean only",
      "Store flat",
      "Handle Zardozi work with care",
      "Iron on reverse side on low heat",
    ],
    deliveryInfo:
      "Free delivery in Pune within 2-3 days. Pan-India delivery in 5-7 days.",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    text: "Kay Designs has completely transformed my wardrobe. Every piece I've purchased feels like it was made just for me. The quality of the fabrics and the attention to detail in the embroidery is unmatched.",
    rating: 5,
    location: "Pune",
    avatar: "PS",
  },
  {
    id: "2",
    name: "Ananya Deshmukh",
    text: "I got my wedding lehenga customized from Kay Designs, and I couldn't have been happier. The team understood my vision perfectly and delivered a masterpiece. Truly the best boutique experience!",
    rating: 5,
    location: "Mumbai",
    avatar: "AD",
  },
  {
    id: "3",
    name: "Meera Kulkarni",
    text: "The co-ord sets are absolutely gorgeous! I always get compliments whenever I wear them. The fitting is perfect and the fabrics are so comfortable. Kay Designs is my go-to for every occasion.",
    rating: 5,
    location: "Pune",
    avatar: "MK",
  },
  {
    id: "4",
    name: "Sneha Patil",
    text: "What I love most about Kay Designs is their custom stitching service. They take your measurements so carefully and the final product always fits like a dream. Highly recommended!",
    rating: 4,
    location: "Nashik",
    avatar: "SP",
  },
  {
    id: "5",
    name: "Riya Joshi",
    text: "The indo-western collection is just wow! Modern yet rooted in tradition. I wore the cape jumpsuit to a cocktail party and was the talk of the evening. Thank you Kay Designs!",
    rating: 5,
    location: "Pune",
    avatar: "RJ",
  },
]

export const instagramImages = [
  { id: "1", src: "/images/instagram/insta-1.jpg", alt: "Kay Designs fashion look 1" },
  { id: "2", src: "/images/instagram/insta-2.jpg", alt: "Kay Designs embroidery detail" },
  { id: "3", src: "/images/instagram/insta-3.jpg", alt: "Kay Designs festive collection" },
  { id: "4", src: "/images/instagram/insta-4.jpg", alt: "Kay Designs fabric flatlay" },
  { id: "5", src: "/images/instagram/insta-5.jpg", alt: "Kay Designs craftsmanship" },
  { id: "6", src: "/images/instagram/insta-6.jpg", alt: "Kay Designs indo-western style" },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "Bestseller" || p.badge === "New").slice(0, 6)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price)
}
