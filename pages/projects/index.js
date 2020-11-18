import Layout from "../../layouts";
import Head from 'next/head'
import { ProjectContent } from '../../components/projects'
import { Context } from '../../context'

export default function ProjectsPage() {
  return (
    <Context.Provider value={{title:"Projects", image: '/images/2.jpeg'}}>
     <Head>
        <title>FG Masonry - Projects</title>
      </Head>
      <Layout>
        <ProjectContent />
      </Layout>
    </Context.Provider>
  );
}
