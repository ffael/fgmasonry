import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "../styles/theme";
import Header from "../components/headerPage";
import Footer from "../components/footer";

export default function PageLayout({ children }) {
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
