import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helperul shadcn combina clase conditionale si elimina conflictele Tailwind pentru ca variantele componentelor sa ramana predictibile.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
