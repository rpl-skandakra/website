import Link from 'next/link';
import { Text } from '@chakra-ui/react';

const NavLink = ({ link, name, onClose }) => (
  <Link href={link} passHref>
    <Text
      as="a"
      onClick={onClose}
      fontWeight="700"
      textAlign="center"
      transition="all 0.2s ease-in-out"
      _hover={{
        cursor: 'pointer',
        textDecor: 'underline',
        color: 'brand.blue',
      }}
    >
      {name}
    </Text>
  </Link>
);

export default NavLink;
