import Head from "next/head";

export default function Seo() {
  const title = "Anmol Punj | Full Stack Developer";
  const description =
    "Explore Anmol Punj's portfolio — a Full Stack Developer building modern web applications with React, Next.js, Node.js, Express.js, and MongoDB.";

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Anmol Punj, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, MERN Stack Developer, Portfolio"
      />
      <meta name="author" content="Anmol Punj" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://YOUR-DOMAIN.com" />
      <meta property="og:site_name" content="Anmol Punj Portfolio" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="theme-color" content="#050706" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
