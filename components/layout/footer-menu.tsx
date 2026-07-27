export function FooterMenuItem({ title, href, ...props }: FooterMenuItemProps) {
  return (
    <li>
      <a href={href} {...props}>
        {title}
      </a>
    </li>
  );
}

export function FooterMenu({ as: Component = "div",...menuProp }: FooterMenuProps) {
  if (!menuProp.items || !menuProp.items.length) {
    return null;
  }
  return (
    <Component>
      {menuProp.title && <h6>{menuProp.title}</h6>}
      <ul>
        {menuProp.items.map((itemProp, index) => (
          <FooterMenuItem key={index} {...itemProp} />
        ))}
      </ul>
    </Component>
  );
}

export interface FooterMenuProps {
  title?: string;
  as?: React.ElementType;
  items?: FooterMenuItemProps[];
}

export interface FooterMenuItemProps {
  title?: string;
  href?: string;
  target?: string;
  rel?: string;
}
