import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function formatCurrency(amount: number, locale: string, currency: string = 'USD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount);
}