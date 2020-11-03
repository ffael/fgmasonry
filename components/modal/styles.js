import styled from "styled-components";

export const Container = styled.section`
  background: rgba(0, 0, 0, .3);
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
export const Content = styled.section`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: ${props => props.theme.colors.lightBeige};
`;
