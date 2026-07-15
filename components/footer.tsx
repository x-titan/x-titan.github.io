import Heading from "./heading";

export default function Footer() {
  return (
    <footer>
      <div>
        <h6>Website</h6>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h6>Socials</h6>
        <div>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Whatsapp</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#">Email me</a>
      </div>
      <Heading title="Studio"/>
    </footer>
  );
}
