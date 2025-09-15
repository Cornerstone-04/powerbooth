import { site } from "@/lib/site";
import { Clock, Truck, Users, MapPin } from "lucide-react";

export const businessInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: site.address,
    subtext: "Showroom / pickup by appointment",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 8AM–6PM",
    subtext: "Saturday: 9AM–3PM",
  },
  {
    icon: Truck,
    label: "Delivery",
    value: "Fast dispatch",
    subtext: "Same-day available in select cities",
  },
  {
    icon: Users,
    label: "Bulk Orders",
    value: "10+ pairs minimum",
    subtext: "Corporate accounts available",
  },
] as const;
