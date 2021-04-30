import { Container, Content, Title, Description, Box } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import projectData from "../../data/projects.json";

export function ProjectContent() {
  return (
    <Container className={"grid section-xl"} contentPage>
      <Content contentPage>
        {projectData.map((project, key) => {
          return (
            <Box key={key} image={project.images[0]} contentPage>
              <div className={"projectInfo"}>
                <h3>
                  <Link href={`/projects/${project.slug}`}>
                    <a>
                      <FaLink /> {project.title}
                    </a>
                  </Link>
                </h3>
              </div>
              <Image src={`${project.images[0]}`} width={650} height={650} />
            </Box>
          );
        })}
      </Content>
    </Container>
  );
}

export function Projects() {
  return (
    <Container className={"grid section-xl"}>
      <Content>
        <Box>
          <Title>Recent Projects</Title>
          <Description>
            We are proud to have collected a variety of satisfied customers.{" "}
            <br />
            These are some of our most recent projects.
          </Description>
          <Description></Description>
        </Box>
        {projectData.map((project, key) => {
          if (key <= 4 && project.featured) {
            return (
              <Box key={key} image={project.images[0]} contentPage>
                <div className={"projectInfo"}>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      <a>
                        <FaLink /> {project.title}
                      </a>
                    </Link>
                  </h3>
                </div>
                <Image src={`${project.images[0]}`} width={650} height={650} />
              </Box>
            );
          }
        })}
        {projectData.length > 4 && (
          <Box>
            <Link href="/projects">
              <a className={"button-seeMore"}>More Projects</a>
            </Link>
          </Box>
        )}
      </Content>
    </Container>
  );
}
