import Head from 'next/head';
import { useRouter } from 'next/router';
import { HeadMetaDataProps } from '@/types/layout-types';

const HeadMetaData = ({ pageTitle }: HeadMetaDataProps) => {
  const router = useRouter();
  const title = pageTitle ? `${pageTitle}` : 'Muiaa';
  const ogUrl = router.pathname ? `${router.pathname}` : '';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="muiruri & associates" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content="muiruri & associates" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/favicon.ico" />
    </Head>
  );
};

export default HeadMetaData;
