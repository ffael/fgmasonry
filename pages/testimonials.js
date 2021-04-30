import Layout from "../layouts";
import Head from "next/head";
import { Testimonials } from "../components/testimonials";
import { Context } from "../context";

export default function ContactPage() {
  return (
    <Context.Provider value={{ title: "Testimonials", image: "" }}>
      <Head>
        <title>FG Masonry - Testimonials</title>
      </Head>
      <Layout>
        <Testimonials />
      </Layout>
    </Context.Provider>
  );
}
