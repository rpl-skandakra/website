const title = 'RPL Skandakra Dev';
const description =
  'RPL Skandakra Dev adalah sebuah komunitas untuk mendiskusikan berbagai hal terkait teknologi (desain, pemrograman dan sebagainya).';
const url = 'https://rplskandakra.netlify.app';

const SEO = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: `${url}/logo.png`,
        alt: title,
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    cardType: 'summary',
    handle: '@rplskandakra',
    site: '@rplskandakra',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'apple-mobile-web-app-title', content: 'RPL Skandakra Dev' },
    { name: 'application-name', content: 'RPL Skandakra Dev' },
    { name: 'msapplication-TileColor', content: '#2b5797' },
    { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
};

export default SEO;
