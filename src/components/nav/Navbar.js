import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, HStack, useColorModeValue } from '@chakra-ui/react';

import links from '@/data/navlinks.json';
import logo from 'public/logo.png';

import NavLink from './NavLink';
import ToggleMode from './ToggleMode';

const Navbar = () => (
  <Box
    as="nav"
    pos="fixed"
    mx="auto"
    w="full"
    shadow="sm"
    transition="background 200ms"
    zIndex="docked"
    sx={{
      background: useColorModeValue(
        'rgba(247, 250, 252, 0.75)',
        'rgba(26, 32, 40, 0.75)'
      ),
      backdropFilter: 'saturate(180%) blur(20px)',
    }}
  >
    <Container maxW="container.lg">
      <HStack justify="space-between">
        <Link href="/" passHref>
          <Box boxSize="80px" cursor="pointer">
            <Image src={logo} alt="RPL Skandakra Dev's Logo" />
          </Box>
        </Link>
        <HStack spacing={10}>
          {links.map((link) => (
            <NavLink key={link.name} link={link.url} name={link.name} />
          ))}
          <ToggleMode />
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Navbar;