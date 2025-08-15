/**
 * formatDate.ts
 * Utility function to format a Date or date string to a readable format.
 */

export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
  locale: string = "en-US"
): string {
  if (!date) return "";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  // Default formatting: e.g., "Aug 15, 2025"
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return parsedDate.toLocaleDateString(locale, options || defaultOptions);
}
