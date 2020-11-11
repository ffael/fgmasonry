import { useState } from "react";
import Image from "next/image";
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

export default function Header({
  title = "Focused on Quality",
  slogan = "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <MobileNavegation
          onClick={() => setIsMenuOpen(false)}
          handleVisible={setIsMenuOpen}
        />
      )}
      <Container>
        <Content>
          <Logo>
            <Image src={"/images/logo.png"} width={175} height={150} />
          </Logo>
          <Navegation />
          <MenuButton onClick={() => setIsMenuOpen(true)}>
            <FaBuffer size={30} color={"#fff"} /> <span>Menu</span>
          </MenuButton>
          <Button type="button">Get a Free Estimate</Button>
        </Content>
        <HeroContainer>
          <h1>{title}</h1>
          <p>{slogan}</p>
        </HeroContainer>
        <Filter />
      </Container>
    </>
  );
}
