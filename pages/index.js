import Head from "next/head";
import Header from "../components/header";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from 'styled-components'
import { themeConfig } from '../styles/theme'

export default function Home() {
  return (
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
        <Header/>
      </main>
    </ThemeProvider>
  );
}
