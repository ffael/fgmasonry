import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Content = styled.section`
  padding: 50px 0;
  display: grid;
  grid-template-columns: minmax(350px, 500px);

  @media (min-width: 700px) and (max-width: 949px) {
    grid-template-columns: repeat(2, minmax(100px, 500px));
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(4, minmax(100px, 300px));
    grid-template-rows: repeat(2, 300px);
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
  padding: 0 20px;
  font-weight: 300;
  line-height: 2rem;

  @media (min-width: 700px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  .button-seeMore {
    display: block;
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
  }

  .projectInfo {
    position: absolute;
    z-index: 1;
    background: ${(props) => props.theme.colors.orange};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    color: #fff;
    padding: 0 20px;
    text-align: center;
    border-radius: 5px;
    p {
      display: none;
    }
  }

  @media (min-width: 700px) {
    align-items: flex-start;
    background: ${(props) => props.image};
    margin-bottom: 0;
    &:hover .projectInfo {
      user-select: none;
      cursor: pointer;
      opacity: 1;
    }
    .projectInfo {
      position: absolute;
      z-index: 1;
      background: ${(props) => props.theme.colors.orange};
      width: 100%;
      height: 100%;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      color: #fff;
      padding: 0 20px;
      text-align: center;
      border-radius: 0;
      h3 {
        margin-bottom: 0;
      }
      p {
        display: block;
      }
    }
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      background: none;
      padding: 0 20px;
    }
    &:last-child {
      background: none;
      align-items: center;
    }
  }
`;
