import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => (
  <Stack
    mx="auto"
    pt={20}
    maxW="container.lg"
    bg={useColorModeValue('gray.50', 'gray.800')}
  >
    <Heading as="h1" size="2xl" my={6} textAlign="center">
      {title}
    </Heading>
    {children}
  </Stack>
);

export default PageContainer;
