import { Box, Stack, Text } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';
import Typical from 'react-typical';

import PageContainer from '@/components/PageContainer';
import SocialButton from '@/components/SocialButton';

export default function Home() {
  const types = [
    'Tempat Untuk Belajar',
    2500,
    'Tempat Untuk Mabar',
    2500,
    'Tempat Untuk Berbagi',
    2500,
    'Tempat Untuk Diskusi',
    2500,
  ];

  const socials = [
    {
      color: '#5865F2',
      icon: <FaDiscord />,
      label: 'Discord Server',
      link: '/discord',
    },
    { color: '#171515', icon: <FaGithub />, label: 'GitHub', link: '/github' },
    {
      color: '#E1306C',
      icon: <FaInstagram />,
      label: 'Instagram',
      link: '/instagram',
    },
  ];

  return (
    <PageContainer title="RPL Skandakra Dev">
      <Box fontSize="xl" fontWeight="700" textAlign="center">
        <Typical steps={types} loop={Infinity} wrapper="p" />
      </Box>
      <Text py={6} textAlign="center">
        <strong>RPL Skandakra Dev</strong> adalah sebuah komunitas sebagai
        tempat untuk mendiskusikan berbagai hal terkait teknologi (desain,
        pengembang, dan sebagainya) yang berbasis di SMK Negeri 2 Karanganyar.
      </Text>
      <Stack direction={['column', 'row']} w="full" justify="center">
        {socials.map((social) => (
          <SocialButton
            key={social.color}
            color={social.color}
            icon={social.icon}
            label={social.label}
            link={social.link}
          />
        ))}
      </Stack>
    </PageContainer>
  );
}
