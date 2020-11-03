import { useContext } from 'react'
import { Container, Content } from "./styles";

export default function Modal({closeModal, serviceType}) {
  return (
    <Container>
      <Content>
        <button onClick={() => closeModal(false)}>X</button>
        {serviceType}
      </Content>
    </Container>
  );
}
