import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.lightBeige};

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;

  h3 {
    font-size: 2rem;
    line-height: 35px;
    color: ${(props) => props.theme.colors.orange};
  }
  p {
    font-size: 0.875rem;
    line-height: 30px;
    font-weight: 300;
  }
  article {
    order: 1;
  }
  picture {
    margin-bottom: 50px;
    display: none;
    img {
      box-shadow: none;
    }
  }

  @media (min-width: 980px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    article {
      order: 0;
    }
    picture {
      margin: 0 50px;
      display: flex;
      justify-content: flex-end;

      img {
        box-shadow: 30px 30px 0 0 ${(props) => props.theme.colors.darkBeige};
      }
    }
  }
`;
