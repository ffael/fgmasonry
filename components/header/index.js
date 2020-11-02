import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBuffer, FaTimes } from "react-icons/fa";
import {
  Container,
  HeroContainer,
  Logo,
  Content,
  Navegation,
  Filter,
  Button,
  MenuButton,
  MobileNavegation,
} from "./styles";
import { themeConfig } from "../../styles/theme";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <MobileNavegation onClick={() => setIsMenuOpen(false)}>
         <button><FaTimes size={25} fill={themeConfig.colors.orange}/></button>
          <ul>
            <li><Link href={"/"}><a>Home</a></Link></li>
            <li><Link href={"/about"}><a>About Us</a></Link></li>
            <li><Link href={"/projects"}><a>Projects</a></Link></li>
            <li><Link href={"/services"}><a>Services</a></Link></li>
            <li><Link href={"/contact"}><a>Contact</a></Link></li>
            <li><Button type="button">Get a Free Estimate</Button></li>
          </ul>
        </MobileNavegation>
      )}
      <Container>
        <Content>
          <Logo>
            <Image src={"/images/logo.png"} width={175} height={150} />
          </Logo>
          <Navegation>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </Navegation>
          <MenuButton onClick={() => setIsMenuOpen(true)}>
            <FaBuffer size={30} color={"#fff"} /> <span>Menu</span>
          </MenuButton>
          <Button type="button">Get a Free Estimate</Button>
        </Content>
        <HeroContainer>
          <h1>Focused on Quality</h1>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
        </HeroContainer>
        <Filter />
      </Container>
    </>
  );
}
