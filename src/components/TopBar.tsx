import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Flex } from '@chakra-ui/react';

import { SocialIcons } from '@/components/SocialIcons';


export function TopBar() {
  return (
    <Box bg="black" w="100%" p={2}>
      <Container as={Flex} color="white" justifyContent="space-between" fontSize="xs">
        <Flex gap="1.5rem">
          <Flex as={Link} href="#" alignItems="center" gap="0.5rem">
            <Image src="/ico-small-phone.svg" width={24} height="24" alt="" /> +38 (050) 12 34 567
          </Flex>

          <Flex as={Link} display={{ base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem">
            <Image src="/ico-small-location.svg" width={24} height="24" alt="" /> Ukraine, Kyiv,Khreshchatyk 1
          </Flex>

          <Flex as={Link} display={{ base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem">
            <Image src="/ico-small-clock.svg" width={24} height="24" alt="" /> All week 24/7
          </Flex>
        </Flex>

        <SocialIcons />
      </Container>
    </Box>
  );
}
