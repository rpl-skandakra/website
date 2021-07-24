import {
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

import Avatars from './Avatars';

const EventCard = (props) => {
  const {
    dateTime,
    description,
    linkRegistration,
    place,
    speakers,
    thumbnail,
    title,
  } = props;
  const { url } = thumbnail.fields.file;

  return (
    <Stack
      direction={['column', 'column', 'row']}
      w="full"
      bg={useColorModeValue('gray.100', 'gray.700')}
      rounded="md"
      shadow="sm"
      overflow="hidden"
      transition="all 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-3px)' }}
    >
      <Image
        alt={title}
        src={`https:${url}`}
        maxW={['full', 'full', '400px']}
        objectFit="cover"
        objectPosition="center"
      />
      <Stack px={2} py={4} w="full">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Avatars speakers={speakers} />
        <Text>
          {place}, {format(new Date(dateTime), 'PPpp zzzz', { locale: id })}
        </Text>
        <Divider />
        <Text fontSize="sm">{description}</Text>
        <Stack direction="row" justify="flex-end">
          <Button
            variant="outline"
            rightIcon={<FaArrowRight />}
            as="a"
            href={linkRegistration}
            target="_blank"
            rel="noopener noreferrer"
            color="brand.blue"
            fontSize="sm"
            fontWeight="500"
            isDisabled={!linkRegistration}
            isTruncated
          >
            {linkRegistration || 'Tidak ada'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventCard;
