import Layout from "../layouts";
import Head from "next/head";
import Estimate from "../components/estimate";
import { Context } from "../context";

export default function EstimatePage() {
  return (
    <Context.Provider value={{ title: "Estimate" }}>
      <Head>
        <title>FG Masonry - Free Estimate</title>
      </Head>
      <Layout>
        <Estimate />
      </Layout>
    </Context.Provider>
  );
}
