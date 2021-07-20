import Router from 'next/router';
import NProgress from 'nprogress';

import { DefaultSeo } from 'next-seo';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SEO from 'next-seo.config';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/styles';
import '@/styles/css/nprogress.css';

import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />

      <GlobalStyle>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            key={router.route}
            animate="enter"
            as="main"
            exit="exit"
            flexGrow={1}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: -8 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 8 },
            }}
          >
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
