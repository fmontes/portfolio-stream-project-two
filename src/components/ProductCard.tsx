import { Product } from '@/pages';
import { StarIcon } from '@chakra-ui/icons';
import { AspectRatio, Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function ProductCard({ image, title, price, rating }: Product) {
  return (
    <Box width={'100%'}>
      <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom={'1rem'}>
        <Image
          src={image}
          alt=""
          fill={true}
          style={{
            objectFit: 'contain',
          }}
        />
      </AspectRatio>
      <Text noOfLines={2} color={'gray.500'} marginBottom="0.75rem">
        {title}
      </Text>
      <Flex alignItems={'center'} justifyContent="space-between">
        <Text fontWeight={'bold'}>$ {price}</Text>
        <Flex>
          <StarIcon color={'orange'} />
          <StarIcon color={'orange'} />
          <StarIcon color={'orange'} />
          <StarIcon color={'orange'} />
          <StarIcon color={'gray.300'} />
        </Flex>
      </Flex>
    </Box>
  );
}
