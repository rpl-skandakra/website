import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => (
  <Stack
    justify="center"
    mx="auto"
    px={8}
    h="100vh"
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
