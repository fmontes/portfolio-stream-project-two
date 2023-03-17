import { StarIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

export function Rating({ rate }: { rate: number }) {
  const count = Math.round(rate);

  return (
    <Flex gap={'0.15rem'}>
      {Array(Math.round(5))
        .fill(null)
        .map((_, i) => {
          const col = i < count ? 'orange' : 'gray.300';
          return <StarIcon color={col} key={i} />;
        })}
    </Flex>
  );
}
