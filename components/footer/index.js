import serviceData from "../../data/services.json";

import { Container, Content, Copyright } from "./styles";
import {
  FaYelp,
  FaFacebookF,
  FaWhatsapp,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Container className={"grid section-xl"}>
        <Content>
          <section className={"info-section"}>
            <h3>Information</h3>
            <address>
              <p>144 Dalton Street, Lowell, Massachusetts, 01850</p>
              <p>
                <a href="mailto:fgmasonry@gmail.com">fgmasonry@gmail.com</a>
              </p>
              <p>
                <a href="tel:+8607788207">(860) 778-8207</a>
              </p>
            </address>
          </section>
          <section className={"info-social"}>
            <nav className={"nav-services"}>
              <h4>Services</h4>
              <ul>
                {serviceData.map((service, key) => {
                  return (
                    <li key={key}>
                      <a href={'/services'}>{service.title}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav className={"nav-social"}>
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaYelp size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWhatsapp size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookMessenger size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookF size={25} />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </Content>
      </Container>
      <Copyright> Copyright ® 2020 - FG Masonry</Copyright>
    </footer>
  );
}
