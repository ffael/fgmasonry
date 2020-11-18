import Image from "next/image";
import { Container, Content } from "./styles";

export default function About() {
  return (
    <Container className="grid section-xl">
      <Content>
        <article>
          <h3>
            Improving quality of life with an integrated unified approach.
          </h3>
          <p>
            Sed posuere consectetur est at lobortis. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
        </article>
        <picture>
          <Image
            loading={`lazy`}
            src={"/images/4.jpeg"}
            width={400}
            height={400}
            layout='intrinsic'
          />
        </picture>
      </Content>
    </Container>
  );
}
