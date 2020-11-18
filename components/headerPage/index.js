import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Context } from "../../context";
import { Navegation, MobileNavegation } from "../navegation";
import { FaBuffer } from "react-icons/fa";
import {
  Container,
  HeroContainer,
  Logo,
  Content,
  Filter,
  Button,
  MenuButton,
} from "./styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ctx = useContext(Context);
  return (
    <>
      {isMenuOpen && (
        <MobileNavegation
          onClick={() => setIsMenuOpen(false)}
          handleVisible={setIsMenuOpen}
        />
      )}
      <Container image={ctx.image}>
        <Content>
          <Logo>
            <Link href="/">
              <a>
                <Image src={"/images/logo.png"} width={175} height={150} />
              </a>
            </Link>
          </Logo>
          <Navegation />
          <MenuButton onClick={() => setIsMenuOpen(true)}>
            <FaBuffer size={30} color={"#fff"} /> <span>Menu</span>
          </MenuButton>
          <Button href="/estimate">Get a Free Estimate</Button>
        </Content>
        <HeroContainer>
          <h1>{ctx.title}</h1>
        </HeroContainer>
        <Filter />
      </Container>
    </>
  );
}
