import { Avatar, AvatarGroup, useColorModeValue } from '@chakra-ui/react';

const Avatars = ({ speakers }) => {
  const border = useColorModeValue('gray.100', 'gray.700');

  return (
    <AvatarGroup size="sm" spacing={-2}>
      {speakers.map((speaker) => (
        <Avatar
          key={speaker.name}
          name={speaker.name}
          src={speaker.pict}
          borderColor={border}
        />
      ))}
    </AvatarGroup>
  );
};

export default Avatars;
