import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.lightBeige};
  color: ${(props) => props.theme.colors.black};
  button {
    background: transparent;
    outline: none;
    border: 0;
  }
`;

export const Content = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    margin-bottom: 50px;
  }

  .carousel{
    margin-bottom: 40px;
  }

  .controlButton {
    svg:hover {
      fill: ${(props) => props.theme.colors.orange};
      cursor: pointer;
    }
  }

  @media (min-width: 900px) {
    header {
      width: 80%;
    }
  }
  @media (min-width: 1200px) {
    header {
      width: 70%;
    }
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.orange};
  font-size: 2rem;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 3.4375rem;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  line-height: 2rem;
  margin-bottom: 30px;

  @media (min-width: 700px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.colors.darkBeige};
  display: flex;
  flex-direction: column;
  width: 95% !important;
  padding: 20px;
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background: ${(props) => props.theme.colors.darkBeige};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  h4 {
    color: ${(props) => props.theme.colors.orange};
    margin: 0;
    font-size: 1.5625rem;
    display: flex;
    align-items: center;
    svg {
      transform: rotate(45deg);
      margin-right: 10px;
    }
  }
  p {
    font-size: 0.8125rem;
    line-height: 1.5rem;
  }
`;

export const List = styled.div`
  display: flex;
  .carousel-xl{
    display: none !important;
  }

  @media(min-width: 880px){
    .carousel-xl{
      display: block !important;
    }
    .carousel-xs{
      display: none !important;
    }
  }
`;

export const RequestButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.colors.black} !important;
  padding: 15px;
  color: #fff;
  width: 200px;
  border-radius: 5px;

  svg {
    margin-right: 10px;
  }

  @media (min-width: 700px) {
    &:hover {
      background: ${(props) => props.theme.colors.orange} !important;
      color: ${(props) => props.theme.colors.black};

      svg {
        fill: ${(props) => props.theme.colors.black};
      }
    }
  }
`;
