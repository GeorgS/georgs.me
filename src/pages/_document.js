import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={'#000'} />
          <meta name="msapplication-TileColor" content={'#000'} />
          {/* SEO */}
          <meta name="description" content={'Georg Schelkshorn - Entrepreneur, Developer and Design Enthusiast. Working @TouchLay.'} />
          <meta property="og:title" content={'Georg Schelkshorn'} />
          <meta property="og:description" content={'Georg Schelkshorn - Entrepreneur, Developer and Design Enthusiast. Working @TouchLay."'} />
          <meta property="og:image" content={'/me.png'} />
          <meta property="og:url" content={'https://georgs.me'} />
          <meta name="twitter:card" content="summary_large_image" />
          {/* Favicon and PWA icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Stylesheets */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}