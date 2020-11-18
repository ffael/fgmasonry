import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: top;
  flex-direction: column;
  background: ${props => props.image ? `url(${props.image})` : `url('/images/bg-page.jpeg')`};
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  position: relative;
  height: 60vh;
  border-bottom: 10px solid ${props=> props.theme.colors.orange};

  @media (min-width: 700px) {
    height: 50vh;
    border-bottom: none;
  }
`;

export const MenuButton = styled.button`
  outline: none;
  border: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 10px;
  }
  @media (min-width: 700px) {
    order: 3;
    margin: 0;
  }

  @media (min-width: 925px) {
    display: none;
  }
`;

export const HeroContainer = styled.div`
  user-select: none;
  align-self: center;
  position: relative;
  z-index: 2;
  margin: auto 0;

  h1 {
    line-height: 4rem;
    font-size: 4.125rem;
    color: ${(props) => props.theme.colors.orange};
  }

  p {
    color: #fff;
    padding: 0 10%;
    margin: 0;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 300;
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 4.687rem;
      margin: 0 0 30px 0;
    }
    p {
      font-size: 1.5625rem;
      line-height: 3.4375rem;
    }
  }
`;

export const Logo = styled.h1`
  margin: 20px 0;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

export const Filter = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  @media (min-width: 700px) {
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 200px;
  z-index: 5;

  @media (min-width: 700px) {
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Button = styled.a`
  display: none;
  @media (min-width: 700px) {
    display: block;
    background: ${(props) => props.theme.colors.orange};
    color: #fff;
    font-size: 0.975rem;
    font-family: Oswald;
    border: 0;
    outline: none;
    padding: 10px 35px;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      background: ${(props) => props.theme.colors.black};
      cursor: pointer;
    }
  }
`;
