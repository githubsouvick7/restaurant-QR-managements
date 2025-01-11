import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "This QR menu system has completely transformed how we handle our menu updates. It's so easy to use!",
    name: "The Rustic Kitchen",
    // designation: "Owner, The Rustic Kitchen",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Our customers love the convenience, and we've seen a significant increase in order accuracy.",
    name: "Asian Fusion",
    // designation: "Manager, Asian Fusion",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "The analytics feature helps us understand our most popular items. Highly recommended!",
    name: "Café Bella",
    // designation: "Owner, Café Bella",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonials() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
