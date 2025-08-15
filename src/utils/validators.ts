export function required(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value !== ''
}

export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

export function minLength(value: string, min: number): boolean {
  return value.length >= min
}

export function maxLength(value: string, max: number): boolean {
  return value.length <= max
}

export function isNumber(value: string | number): boolean {
  return !isNaN(Number(value))
}

export function isPositiveNumber(value: string | number): boolean {
  return isNumber(value) && Number(value) > 0
}

export function matchesPattern(value: string, pattern: RegExp): boolean {
  return pattern.test(value)
}

export function isEqual(value: string, other: string): boolean {
  return value === other
}
