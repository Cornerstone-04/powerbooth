import { site } from "@/lib/site";
import { Clock, Truck, Users, MapPin } from "lucide-react";

export const businessInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: site.address,
    subtext: "Serving all of Nigeria",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 8AM-6PM",
    subtext: "Saturday: 9AM-3PM",
  },
  {
    icon: Truck,
    label: "Delivery",
    value: "Same-day Lagos",
    subtext: "Nationwide 2-3 days",
  },
  {
    icon: Users,
    label: "Bulk Orders",
    value: "10+ pairs minimum",
    subtext: "Corporate accounts available",
  },
];
