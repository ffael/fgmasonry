import Layout from "../layouts";
import Head from 'next/head'
import { ServiceContent } from '../components/services'
import { Context } from '../context'

export default function AboutPage() {
  return (
    <Context.Provider value={{title:"Services"}}>
     <Head>
        <title>FG Masonry - Services</title>
      </Head>
      <Layout>
        <ServiceContent />
      </Layout>
    </Context.Provider>
  );
}
