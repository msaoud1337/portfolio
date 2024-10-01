import Head from 'next/head';
import { NextSeo } from 'next-seo';

export type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="icon" href={`faviconT.png`} key="favicon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="Portfolio of my web development projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://msaoud.me/" />
        <meta property="og:image" content="/images/portfolio-cover.png" />
        <link rel="canonical" href="https://msaoud.me/" />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://msaoud.me/",
      "name": "My Portfolio",
      "description": "Portfolio showcasing my web development skills and projects.",
      "sameAs": [
        "https://www.linkedin.com/in/mohamed-amine-saoud-63ab12249/",
        "https://github.com/msaoud1337"
      ]
    }
  `}
        </script>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
        }}
      />
    </>
  );
};

export { Meta };
