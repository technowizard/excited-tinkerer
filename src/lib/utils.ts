import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLongDate(dateInput: Date | string) {
  const date = new Date(dateInput);
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });

  return formatter.format(date);
}
