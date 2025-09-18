export const steelSpecs = [
  ["Toe Cap", "Steel (200J)"],
  ["Outsole", "Slip-resistant"],
  ["Toe Protection", "Steel Toe Cap"],
  ["Upper", "Full-grain leather, reinforced stitching"],
  ["Lining", "Breathable padded mesh"],
  ["Outsole", "Slip & oil-resistant, shock absorption heel"],
  ["Comfort", "Padded collar & tongue, cushioned insole"],
  ["Colour", "Black / Grey accents"],
] as const satisfies ReadonlyArray<readonly [string, string]>;

/** PVC Rain Jacket (waterproof shell) */
export const pvcSpecs = [
  ["Material", "PVC (waterproof)"],
  ["Construction", "Heat-sealed seams"],
  ["Coverage", "Full-length with hood"],
  ["Closure", "Front storm flap (snap/zip)"],
  ["Use Case", "Rain & splash protection"],
  ["Colour", "High-visibility yellow"],
  ["Care", "Wipe clean / gentle rinse"],
] as const satisfies ReadonlyArray<readonly [string, string]>;

/** Reflective Safety Jacket (Hi-Vis Vest) */
export const jacketSpecs = [
  ["Material", "100% Polyester (mesh)"],
  ["Reflective Tape", "Industrial-grade, front & back"],
  ["Visibility", "Fluorescent orange"],
  ["Sizes", "M–3XL (XL shown)"],
  ["Care", "Machine wash 40°C • Do not bleach"],
  ["Typical Use", "Road work, construction, warehouse"],
] as const satisfies ReadonlyArray<readonly [string, string]>;
