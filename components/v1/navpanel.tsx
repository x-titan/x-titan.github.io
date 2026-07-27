import type { INavPanel } from "@/types/navpanel";
import Link from "./Link";

export default function NavPanel({ links, title, className }: Readonly<INavPanel>) {
  return (
    <div className={`navpanel ${className ?? ""}`}>
      {title && <h6>{title}</h6>}
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


