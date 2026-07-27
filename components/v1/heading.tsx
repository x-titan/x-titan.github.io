import type { IHeading } from "@/types/heading";

export default function Heading({ title, description }: Readonly<IHeading>) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      {description ?? <p>{description}</p>}
    </div>
  );
}
