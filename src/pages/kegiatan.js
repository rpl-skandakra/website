import { NextSeo } from 'next-seo';

import PageContainer from '@/components/PageContainer';

const Kegiatan = () => {
  const title = 'Kegiatan';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/kegiatan`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <PageContainer title="Kegiatan" />
    </>
  );
};

export default Kegiatan;
