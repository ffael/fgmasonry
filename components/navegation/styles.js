import styled from "styled-components";

export const MainNav = styled.nav`
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

export const MobileNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100vw !important;
  height: 100vh !important;
  background: ${(props) => props.theme.colors.lightBeige};
  > button {
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
      &:last-child {
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

export const Button = styled.a`
  background: ${(props) => props.theme.colors.orange};
  color: #fff !important;
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

  @media (min-width: 700px) {
    margin: 0;
  }
`;
