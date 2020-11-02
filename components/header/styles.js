import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: top;
  flex-direction: column;
  background: url("/images/background.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  height: 100vh;
`;

export const MobileNavegation = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.lightBeige};
  > button{
    border: 0;
    outline: none;
    background: transparent;
    align-self: flex-end;
    padding: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: left;

    li {
      &:last-child{
        margin-top: 40px;
        align-self: center;
      }
      a {
        font-size: 1.75rem;
        width: 100%;
        font-weight: bold;
        color: ${(props) => props.theme.colors.black};
        display: inline-block;
        padding: 20px;
      }
    }
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
  margin: 30px 0 40px 0;

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
  text-align: center;

  h1 {
    margin: 50px 0 0 0;
    line-height: 4rem;
    font-size: 3.125rem;
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
      margin: 0;
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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
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

export const Navegation = styled.nav`
  display: none;
  @media (min-width: 925px) {
    display: flex;

    ul {
      display: flex;
      width: 100%;
      li {
        padding: 20px;
        a {
          font-size: 0.9375rem;
          font-weight: bold;
          color: #fff;
          &:hover {
            color: ${(props) => props.theme.colors.orange};
          }
        }
      }
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.orange};
  color: #fff;
  font-size: 0.975rem;
  font-family: Oswald;
  border: 0;
  outline: none;
  padding: 10px 35px;
  border-radius: 5px;
  &:hover {
    background: ${(props) => props.theme.colors.black};
    cursor: pointer;
  }

  @media (min-width: 700px) {
    margin: 0;
  }
`;
