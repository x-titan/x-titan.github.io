import type { IFigure } from "@/types/figure";

export default function Figure({
  img_src,
  img_alt,
  caption,
}: Readonly<IFigure>) {
  return (
    <figure>
      <img
        src={img_src ? img_src : "https://placehold.co/600x400"}
        alt={img_alt || ""}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
