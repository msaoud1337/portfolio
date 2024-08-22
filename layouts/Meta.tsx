import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" href="faviconT.png" key="favicon" />
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
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
