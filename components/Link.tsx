import type { ILink } from "@/types/link";


export default function Link({ href, label, rel, target }: Readonly<ILink>) {
  return (
    <a href={href} target={target} rel={rel}>
      {label}
    </a>
  );
}
Link.a = function (
  label: string,
  href: string,
  target?: string,
  rel?: string
): ILink {
  return {
    label,
    href,
    target,
    rel,
  };
};
