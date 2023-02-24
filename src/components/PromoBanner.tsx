import Image, { StaticImageData } from 'next/image';

import { Box, Text } from '@chakra-ui/react';
import { CenteredLabel } from './CenteredLabel';

type Props = {
  image: StaticImageData;
  children: React.ReactNode;
};

export function PromoBanner({ image, children }: Props) {
  return (
    <Box position={'relative'}>
      <Image src={image} alt="" />

      <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
        <CenteredLabel>{children}</CenteredLabel>
      </Box>
    </Box>
  );
}
