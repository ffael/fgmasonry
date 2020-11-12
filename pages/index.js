import Head from "next/head";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "../styles/theme";
import Header from "../components/header";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Services from "../components/services";

export default function Home() {
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <Head>
        <title>FG Masonry - Home</title>
      </Head>
      <Header />
      <Projects />
      <Services />
      <Footer />
    </ThemeProvider>
  );
}
