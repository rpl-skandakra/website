import { Button, useColorModeValue } from '@chakra-ui/react';

const SocialButton = ({ color, icon, label, link }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Button
      p={6}
      bg={color}
      color="gray.50"
      leftIcon={icon}
      onClick={() => window.open(link, '_blank', 'noopener, noreferrer')}
      fontWeight="600"
      transition="all 0.2s ease-in-out"
      _focus={{
        bg: bgColor,
        color,
        transform: 'scale(0.96)',
      }}
      _hover={{
        transform: 'scale(0.96)',
      }}
    >
      {label}
    </Button>
  );
};

export default SocialButton;
