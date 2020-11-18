import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.lightBeige};

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  form{
    padding: 20px 0;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 15px 0;
  }

  label{
    font-size: 0.8125rem;
    margin-bottom: 5px;
    color: ${props=>props.theme.colors.black};
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
    border: 1px solid ${props=> props.theme.colors.darkBeige};
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

      form{
        width: 700px;
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