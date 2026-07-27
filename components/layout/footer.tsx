import Newsletter from "../app/newsletter";
import { FooterMenu } from "./footer-menu";

const a = (title: string, href: string) => ({
  title,
  href,
  target: "_blank",
  rel: "noopener noreferrer",
});

const siteMapLinks = [
  a("Home", "#"),
  a("About", "#"),
  a("Works", "#"),
  a("Contacts", "#"),
];

const socialLinks = [a("Github", "#"), a("Whatsapp", "#"), a("Telegram", "#")];

export function Footer() {
  return (
    <footer>
      <FooterMenu title="SiteMap" items={siteMapLinks} />
      <FooterMenu title="Socials" items={socialLinks} />
      <Newsletter />
      <div>Studio</div>
    </footer>
  );
}
