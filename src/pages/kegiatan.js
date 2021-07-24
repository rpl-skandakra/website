import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { VStack } from '@chakra-ui/react';

import PageContainer from '@/components/PageContainer';
import EventCard from '@/components/EventCard';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'events' });

  return { props: { events: res.items } };
};

const Kegiatan = ({ events }) => {
  const title = 'Kegiatan';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/kegiatan`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <PageContainer title="Kegiatan" pt={20}>
        <VStack spacing={4}>
          {events.map((event) => {
            const {
              dateTime,
              description,
              linkRegistration,
              place,
              speakers,
              thumbnail,
              title: eventTitle,
            } = event.fields;
            const { id } = event.sys;

            return (
              <EventCard
                key={id}
                dateTime={dateTime}
                description={description}
                linkRegistration={linkRegistration}
                place={place}
                speakers={speakers}
                thumbnail={thumbnail}
                title={eventTitle}
              />
            );
          })}
        </VStack>
      </PageContainer>
    </>
  );
};

export default Kegiatan;
