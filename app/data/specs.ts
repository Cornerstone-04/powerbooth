import { site } from "@/lib/site";

export const specs = [
  ["Toe Cap", "Steel (200J)"],
  ["Outsole", "Slip-resistant"],
  ["Toe Protection", "Steel Toe Cap"],
  ["Upper", "Full-grain leather, reinforced stitching"],
  ["Lining", "Breathable padded mesh"],
  ["Outsole", "Slip & oil-resistant, shock absorption heel"],
  ["Comfort", "Padded collar & tongue, cushioned insole"],
  ["Colour", "Black / Grey accents"],
  ["SKU", site.sku],
] as const satisfies ReadonlyArray<readonly [string, string]>;
