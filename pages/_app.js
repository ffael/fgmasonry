import Router from 'next/router'
import * as gtag from '../libs/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
