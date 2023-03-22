import { ShareIcon } from '@/icons/Share';
import { Product } from '@/pages';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Text, Box, Flex, UnorderedList, ListItem, ListIcon, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { Rating } from './Rating';

type Props = {
  product: Product;
};

export function PDPHeader({ product: { category, title, rating, id } }: Props) {
  return (
    <Box bg="gray.100" padding="1rem">
      <Container>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex fontSize={'sm'} as={UnorderedList} gap={'2'} listStyleType={'none'} m={'0'}>
            <ListItem whiteSpace={'nowrap'}>
              <Link href="/">Home</Link>
              <ListIcon w={18} h={18} as={ChevronRightIcon} color="gray.700" ml={'2'} mr={'0'} />
            </ListItem>
            <ListItem whiteSpace={'nowrap'} textTransform={'capitalize'}>
              <Link href={`${category}`}>{category}</Link>
              <ListIcon w={18} h={18} as={ChevronRightIcon} color="gray.700" ml={'2'} mr={'0'} />
            </ListItem>
            <ListItem>
              <Text noOfLines={1}>{title}</Text>
            </ListItem>
          </Flex>

          <Button color={'gray'} variant={'ghost'} leftIcon={<ShareIcon w={18} h={18} />}>
            Share
          </Button>
        </Flex>
        <Heading textAlign={'center'} as="h1" fontSize="2xl" my={'1.5rem'}>
          {title}
        </Heading>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap="0.5rem" alignItems={'baseline'}>
            <Rating rate={rating.rate} />
            <Text fontSize={'sm'}>2 Reviews</Text>
          </Flex>

          <Flex gap={'1rem'} fontSize={'sm'}>
            <Text>
              Sku: <b>{id}</b>
            </Text>
            <Text>
              Availability: <b>In Stock</b>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
