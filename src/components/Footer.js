import {
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

const Footer = () => (
  <VStack py={4} bg={useColorModeValue('gray.50', 'gray.800')}>
    <HStack fontSize="sm" fontWeight="600">
      <Text>Created by</Text>
      <Link href="https://github.com/hendraaagil" isExternal>
        Hendra Agil
      </Link>
    </HStack>
  </VStack>
);

export default Footer;
