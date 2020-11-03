import { Context } from "../context";
import { useState } from "react";

import Head from "next/head";
import Header from "../components/header";
import Projects from "../components/projects";
import Services from "../components/services";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "../styles/theme";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Context.Provider value={{ isModalOpen, setIsModalOpen }}>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyles />
        <Head>
          <title>FG Masonry - Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Oswald:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <Header />
          <Projects />
          <Services />
        </main>
      </ThemeProvider>
    </Context.Provider>
  );
}
