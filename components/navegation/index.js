import Link from "next/link";
import { useRouter } from "next/router";
import { MainNav, MobileNav, Button } from "./styles";
import { FaTimes } from "react-icons/fa";
import { themeConfig } from "../../styles/theme";

export function Navegation() {
  const router = useRouter();
  return (
    <MainNav>
      <ul>
        <li>
          <Link href="/">
            <a className={`${router.route === "/" ? "link-active" : ""}`}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a className={`${router.route === "/about" ? "link-active" : ""}`}>
              About Us
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <a
              className={`${router.route === "/projects" ? "link-active" : ""}`}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/services"}>
            <a
              className={`${router.route === "/services" ? "link-active" : ""}`}
            >
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a
              className={`${router.route === "/contact" ? "link-active" : ""}`}
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/testimonials"}>
            <a
              className={`${
                router.route === "/testimonials" ? "link-active" : ""
              }`}
            >
              Testimonials
            </a>
          </Link>
        </li>
      </ul>
    </MainNav>
  );
}

export function MobileNavegation({ handleVisible }) {
  return (
    <MobileNav>
      <button onClick={() => handleVisible(false)}>
        <FaTimes size={25} fill={themeConfig.colors.orange} />
      </button>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href={"/services"}>
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href={"/testimonials"}>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Button href="/estimate">Get a Free Estimate</Button>
        </li>
      </ul>
    </MobileNav>
  );
}
