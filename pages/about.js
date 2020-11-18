import Layout from "../layouts";
import Head from 'next/head'
import About from '../components/about'
import { Context } from '../context'

export default function AboutPage() {
  return (
    <Context.Provider value={{title:"About Us", image: '/images/3.jpeg'}}>
     <Head>
        <title>FG Masonry - About</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </Context.Provider>
  );
}
