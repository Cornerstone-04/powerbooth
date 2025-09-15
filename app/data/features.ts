import { Clock, Shield, Wrench } from "lucide-react";

export const features = [
  {
    icon: Shield,
    title: "Maximum Durability",
    desc: "Oil-resistant leather withstands chemical spills, extreme heat, and heavy-duty use.",
    highlight: "200J Impact Protection",
  },
  {
    icon: Clock,
    title: "All-Day Comfort",
    desc: "24-hour shift approved: moisture-wicking lining and shock-absorbing midsole keep teams productive.",
    highlight: "Breathable Mesh Lining",
  },
  {
    icon: Wrench,
    title: "Comprehensive Safety",
    desc: "Steel toe (200J), slip-resistant outsole (oil/wet tested), and electrical hazard protection up to 18kV.",
    highlight: "18kV Electrical Protection",
  },
] as const;