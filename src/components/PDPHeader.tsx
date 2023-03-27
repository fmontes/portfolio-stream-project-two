import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Text, Box, Flex, Button, Heading } from '@chakra-ui/react';

import { Product } from '@/pages';
import { Rating } from './Rating';
import { ShareIcon } from '@/icons/Share';

type Props = {
  product: Product;
};

export function PDPHeader({ product: { category, title, rating, id } }: Props) {
  return (
    <Box bg="gray.100" padding="1rem">
      <Container>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Breadcrumb textTransform={'capitalize'} fontSize={'sm'} separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={`/category/${category}`}>{category}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage isLastChild>
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

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
