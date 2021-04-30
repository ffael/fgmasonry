import Image from "next/image";
import { Container, Content } from "./styles";

export default function About() {
  return (
    <Container className="grid section-xl">
      <Content>
        <article>
          <h3>Customer satisfaction is our core!</h3>
          <p>
            FG Masonry has been serving the New England community for over 5
            years. The reason for our longevity is simple – our unparalleled
            commitment to providing the finest service, value, and quality in
            the industry. Whether you require quality masonry services,
            cobblestone specialties or asphalt paving, FG Masonry has the
            resources and expertise to get the job done right … the first time,
            every time.
          </p>
        </article>
        <picture>
          <Image
            loading={`lazy`}
            src={"/images/4.jpeg"}
            width={400}
            height={400}
            layout="intrinsic"
          />
        </picture>
      </Content>
    </Container>
  );
}
