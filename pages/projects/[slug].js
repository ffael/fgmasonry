import Layout from "../../layouts";
import Head from "next/head";
import { Context } from "../../context";
import projectsData from "../../data/projects.json";

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
  const { title, description, images } = projects[0];
  return {
    props: {
      title,
      description,
      images,
    },
  };
}
export default function ProjectPage({ title, description, images }) {
  return (
    <Context.Provider value={{ title: title, image: images[0] }}>
      <Head>
        <title>FG Masonry - Project</title>
      </Head>
      <Layout>
        <div className="grid section-xl">
          {/* <h1>{title}</h1> */}
          <p>{description}</p>
        </div>
      </Layout>
    </Context.Provider>
  );
}
