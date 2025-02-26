import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Portfolio of Hassan Iftikhar, a Full Stack Developer specializing in MERN and MEVN stacks."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN, MEVN, Portfolio, Web Development"
        />
        <meta name="author" content="Hassan Iftikhar" />
        <meta property="og:title" content="Hassan Iftikhar's Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Hassan Iftikhar, a Full Stack Developer specializing in MERN and MEVN stacks."
        />
        <meta property="og:image" content="/default-avatar.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hassan Iftikhar's Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of Hassan Iftikhar, a Full Stack Developer specializing in MERN and MEVN stacks."
        />
        <meta name="twitter:image" content="/default-avatar.png" />
        <title>Hassan Iftikhar&apos;s Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
