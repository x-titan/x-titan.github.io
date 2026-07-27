import Heading from "./heading";
import NavPanel from "./navpanel";
import Link from "./Link";
import Newsletter from "./newsletter";

const { a } = Link;

const SiteMapLinks = [
  a("Home", "/"),
  a("About", "/about"),
  a("Projects", "/projects"),
  a("Contact", "/contact"),
];

const SocialLinks = [a("Github", "#"), a("Whatsapp", "#"), a("Telegram", "#")];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-links">
          <NavPanel title="Sitemap" links={SiteMapLinks} />
          <NavPanel
            className="external-links"
            title="Social"
            links={SocialLinks}
          />
        </div>
        <div className="site-footer-form">
          <Newsletter />
        </div>
      </div>
      <div className="site-footer-brand">
        <span>XTitan</span>
      </div>
    </footer>
  );
}
