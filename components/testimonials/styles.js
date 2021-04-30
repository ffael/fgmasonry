import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.lightBeige};
  color: ${(props) => props.theme.colors.black};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

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
    width: 100%;
    order: 1;
  }

  form {
    padding: 20px 0;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 15px 0;
  }

  label {
    font-size: 0.8125rem;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.black};
  }

  input,
  select,
  option,
  textarea {
    padding-left: 10px;
    font-size: 12px;
    border-radius: 5px;
    background: #fff;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.darkBeige};
    outline: 0;
  }
  textarea {
    padding: 10px;
    width: 100%;
    height: 100px;
    resize: none;
  }

  @media (min-width: 980px) {
    flex-direction: column;
    width: 70%;
    justify-content: center;

    article {
      width: unset;
      order: 0;
      justify-content: center;
      display: flex;

      form {
        width: 700px;
      }
    }
  }

  header {
    width: 100%;
    margin-top: 50px;
  }

  .carousel {
    margin-bottom: 40px;
  }

  .controlButton {
    background: transparent;
    outline: none;
    border: 0;
    svg:hover {
      fill: ${(props) => props.theme.colors.orange};
      cursor: pointer;
    }
  }

  @media (min-width: 980px) {
    width: 100%;
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
  padding: 50px;
  transition: all 0.3s ease;
  user-select: none;
  background: ${(props) => props.dark && props.theme.colors.darkBeige};

  &:hover {
    background: ${(props) => props.theme.colors.darkBeige};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  p {
    &::before,
    ::after {
      content: ' " ';
    }
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.5rem;
  }
  .testimonial-detail {
    display: flex;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h4 {
      color: ${(props) => props.theme.colors.orange};
      margin: 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      svg {
        transform: rotate(45deg);
        margin-right: 10px;
      }
    }
  }
`;

export const List = styled.div`
  display: flex;
  min-width: 400px;

  .carousel-xl {
    display: none !important;
  }

  @media (min-width: 880px) {
    min-width: 200px;
    .carousel-xl {
      display: block !important;
    }
    .carousel-xs {
      display: none !important;
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
