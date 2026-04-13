export const ATANA_IMAGES = [
  "/0-atana.jpeg",
  "/1-atana.jpeg",
  "/2-atana.jpeg",
  "/3-atana.jpeg",
  "/4-atana.jpeg",
  "/05-atana.jpeg",
  "/6-atana.jpeg"
];

export interface Property {
  id: number;
  image: string;
  images?: string[];
  title: string;
  location: string;
  price: string;
  beds: number | string;
  baths: number | string;
  sqft: string;
  type: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: 4,
    image: "/0-atana.jpeg",
    images: ATANA_IMAGES,
    title: "Atana Terraces",
    location: "Gikambura, Nairobi",
    price: "KES 22.5M",
    beds: 3,
    baths: 3,
    sqft: "223",
    type: "Townhouse",
    featured: true
  }
];
