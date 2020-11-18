import Layout from "../layouts";
import Head from 'next/head'
import Contact from '../components/contact'
import { Context } from '../context'

export default function ContactPage() {
  return (
    <Context.Provider value={{title:"Contact", image: '/images/4.jpeg'}}>
     <Head>
        <title>FG Masonry - Contact</title>
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </Context.Provider>
  );
}