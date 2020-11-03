import { Container, Content, Title, Description, Box } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      slug: "project-1",
      shorDescription: "Lorem Ipsum Dolar Sit",
      image: "/images/1.jpeg",
    },
    {
      title: "Project 2",
      slug: "project-2",
      shorDescription: "Lorem Ipsum Dolar Sit",
      image: "/images/2.jpeg",
    },
    {
      title: "Project 3",
      slug: "project-3",
      shorDescription: "Lorem Ipsum Dolar Sit",
      image: "/images/3.jpeg",
    },
    {
      title: "Project 4",
      slug: "project-4",
      shorDescription: "Lorem Ipsum Dolar Sit",
      image: "/images/4.jpeg",
    },
    {
      title: "Project 5",
      slug: "project-5",
      shorDescription: "Lorem Ipsum Dolar Sit",
      image: "/images/5.jpeg",
    },
  ];

  return (
    <Container>
      <Content>
        <Box>
          <Title>Recent Projects</Title>
          <Description>
            Donec id elit non mi porta gravida at eget metus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget
            risus varius blandit sit amet non magna.
          </Description>
        </Box>

        {projects.map((project, key) => {
          return (
            <Box key={key} image={project.image}>
              <div className={"projectInfo"}>
                <h3>
                  <Link href={"/"}>
                    <a>
                      <FaLink /> {project.title}
                    </a>
                  </Link>
                </h3>
                <p>{project.shorDescription}</p>
              </div>
              <Image src={project.image} width={350} height={350} />
            </Box>
          );
        })}
        <Box>
          <Link href="/">
            <a className={"button-seeMore"}>See More</a>
          </Link>
        </Box>
      </Content>
    </Container>
  );
}
