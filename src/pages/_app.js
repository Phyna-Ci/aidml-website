import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { initGA, logPageView } from 'analytics';
import Layout from 'components/layout';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('391078046196812')
        ReactPixel.pageView()

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [])

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <meta name="facebook-domain-verification" content="6zr6acpantk7qc5yenwwwkrneie3s9" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D68E06G801" />
        <noscript>
          <img height="1" width="1" style={{ "display": "none" }}
            src="https://www.facebook.com/tr?id=391078046196812&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
