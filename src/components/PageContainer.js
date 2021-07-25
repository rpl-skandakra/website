import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';

const PageContainer = ({ children, pt, title }) => (
  <Stack
    justify="center"
    mx="auto"
    pt={pt || [20, 0]}
    px={[4, 8]}
    minH="100vh"
    maxW="container.lg"
    bg={useColorModeValue('gray.50', 'gray.800')}
    transition="background 200ms"
  >
    <Heading as="h1" size="2xl" my={6} textAlign="center">
      {title}
    </Heading>
    {children}
  </Stack>
);

export default PageContainer;
