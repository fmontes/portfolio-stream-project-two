import { Container, Grid } from '@chakra-ui/react';
import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';
import { PhoneIcon } from '@/icons/Phone';
import { LocationIcon } from '@/icons/Location';
import { ClockIcon } from '@/icons/Clock';
import { MailIcon } from '@/icons/Mail';


import { SocialIcons } from '@/components/SocialIcons';
import { FooterLinkList, SectionInfo } from '@/components/FooterLinkList';

export function Footer() {
  const information: SectionInfo = {
    title: 'Infomation',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'FAQs', href: '#' },
    ],
  };

  const usefulLinks: SectionInfo = {
    title: 'Useful Links',
    links: [
      { title: 'Terms & Conditions', href: '#' },
      { title: 'Returns & Exchanges', href: '#' },
      { title: 'Shipping & Delivery', href: '#' },
      { title: 'Privacy Policy', href: '#' },
    ],
  };

  const contactsLinks: SectionInfo = {
    title: 'Contact Us',
    links: [
      { title: 'Ukraine, Kyiv,Khreshchatyk 1', href: '#', icon: PhoneIcon},
      { title: '+38 (050) 12 34 567', href: '#', icon: LocationIcon },
      { title: 'All week 24/7', href: '#', icon: ClockIcon },
      { title: 'mail@company.com', href: '#', icon: MailIcon },
    ],
  };

  return (
    <Box w="100%" as="footer">
      <Box bgColor="black">
        <Container
          py="1rem"
          as={Grid}
          justifyContent="space-between"
          gridTemplateColumns="180px 520px 180px"
          alignItems="center"
        >
          <Text color="white" textTransform="uppercase" fontSize="sm">
            Be in touch with us:
          </Text>
          <Flex gap="1rem">
            <Input placeholder="Enter your email" border="0" bgColor="gray.700" borderRadius="0" />
            <Button variant="outline">Join Us</Button>
          </Flex>
          <SocialIcons justifyContent="flex-end" />
        </Container>
      </Box>

      <Container as={Grid} gridTemplateColumns="repeat(4, 1fr)">
        <Box py="1rem" fontSize="sm">
          <FooterLinkList data={information} />
        </Box>
        <Box py="1rem" fontSize="sm">
          <FooterLinkList data={usefulLinks} />
        </Box>
        <Box py="1rem" fontSize="sm">
          <FooterLinkList data={contactsLinks} />
        </Box>
      </Container>
    </Box>
  );
}
