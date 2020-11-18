import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from '../libs/gtag';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // TODO
      // gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
