export function rgba(r: number, g: number, b: number, a: number) {
  return `rgba(${r}, ${g}, ${b}, ${a ?? 1})`;
}

export function rgb(r: number, g: number, b: number) {
  return `rgb(${r}, ${g}, ${b})`;
}

export function hsla(h: number, s: number, l: number, a: number) {
  return `hsla(${h}, ${s}%, ${l}%, ${a ?? 1})`;
}

export function hsl(h: number, s: number, l: number) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function hex(hex: string) {
  hex = hex.replace("#", "")

  if (hex.length === 3)
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;

  if (hex.length === 4)
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;

  return `#${hex}`;
}