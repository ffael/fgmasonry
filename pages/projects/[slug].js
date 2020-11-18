import Layout from "../../layouts";
import Head from "next/head";
import { Context } from "../../context";
import projectsData from "../../data/projects.json";
import Carousel from "nuka-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import Image from "next/image";
import { themeConfig } from "../../styles/theme";

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.colors.darkBeige};
  display: flex;
  flex-direction: column;
  width: 95% !important;
  padding: 20px;
  transition: all 0.3s ease;
  user-select: none;
  background: ${(props) => props.dark && props.theme.colors.darkBeige};

  &:hover {
    background: ${(props) => props.theme.colors.darkBeige};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  h4 {
    color: ${(props) => props.theme.colors.orange};
    margin: 0;
    font-size: 1.5625rem;
    display: flex;
    align-items: center;
    svg {
      transform: rotate(45deg);
      margin-right: 10px;
    }
  }
  p {
    font-size: 0.8125rem;
    line-height: 1.5rem;
  }
`;
export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  h3 {
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 5px;
  }
  p {
    font-size: 1rem;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 80px;
    color: ${(props) => props.theme.colors.black};
  }
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      padding: 10px;
      margin: 5px 10px 5px 0;
      color: #fff;
      font-size: 0.8125rem;
      border-radius: 10px;
      user-select: none;
      background: ${(props) => props.theme.colors.orange};
    }

    @media (min-width: 700px) {
      flex-direction: row;
      li {
        margin: 10px 10px 20px 0;
      }
    }
  }
`;

export async function getStaticPaths() {
  return {
    paths: projectsData.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const projects = projectsData.filter((item) => item.slug === slug);
  const { title, description, images, tags } = projects[0];
  return {
    props: {
      title,
      description,
      images,
      tags,
    },
  };
}
export default function ProjectPage({ title, description, images, tags }) {
  return (
    <Context.Provider value={{ title: title, image: images[0] }}>
      <Head>
        <title>FG Masonry - Project</title>
      </Head>
      <Layout>
        <Container className="grid section-xl">
          <p>{description}</p>
          <Carousel
            className={"carousel carousel-xl"}
            slidesToShow={1}
            autoplay={true}
            wrapAround
            transitionMode={"fade"}
            initialSlideHeight={500}
            initialSlideWidth={500}
            dragging={false}
            pauseOnHover
            renderBottomCenterControls={null}
            renderCenterLeftControls={({ previousSlide }) => (
              <button className={"controlButton"} onClick={previousSlide}>
                <FaAngleLeft size={30} fill={themeConfig.colors.black} />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button className={"controlButton"} onClick={nextSlide}>
                <FaAngleRight size={30} fill={themeConfig.colors.black} />
              </button>
            )}
          >
            {images.map((image, key) => {
              return (
                <Image key={key} layout="responsive" unsized src={image} />
              );
            })}
          </Carousel>
          <h3>Services Performed:</h3>
          <ul className="tags">
            {tags.map((tag, key) => {
              return <li key={key}>{tag}</li>;
            })}
          </ul>
        </Container>
      </Layout>
    </Context.Provider>
  );
}
