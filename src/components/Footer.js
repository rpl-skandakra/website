import { Text, useColorModeValue, VStack } from '@chakra-ui/react';

const Footer = () => (
  <VStack
    py={8}
    bg={useColorModeValue('gray.50', 'gray.800')}
    fontSize="sm"
    fontWeight="600"
    transition="background 200ms"
  >
    <Text>RPL Skandakra Dev &copy; {new Date().getFullYear()}</Text>
  </VStack>
);

export default Footer;
