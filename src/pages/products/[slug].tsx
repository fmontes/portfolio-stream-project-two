import Image from 'next/image';
import Link from 'next/link';

import { slugify } from '@/utils/sluglify';
import { AspectRatio, Box, Button, Container, Flex, Heading, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Product as ProductModel } from '../index';
import { Rating } from '@/components/Rating';
import { ShareIcon } from '@/icons/Share';
import { ChevronRightIcon } from '@chakra-ui/icons';

type Props = {
  product: ProductModel;
};

export default function Product({ product: { id, title, price, image, rating, category, description } }: Props) {
  return (
    <>
      <Box bg="gray.100" padding="1rem">
        <Container>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex fontSize={'sm'} as={UnorderedList} gap={'2'} listStyleType={'none'} m={'0'}>
              <ListItem>
                <Link href="/">Home</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray.700' ml={'2'} mr={'0'} />
              </ListItem>
              <ListItem textTransform={'capitalize'}>
                <Link href={`${category}`}>{category}</Link>
                <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray.700' ml={'2'} mr={'0'} />
              </ListItem>
              <ListItem>{title}</ListItem>
            </Flex>

            <Button color={'gray'} variant={'ghost'} leftIcon={<ShareIcon w={18} h={18} />}>Share</Button>
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
              <Text>Sku: <b>{id}</b></Text>
              <Text>Availability: <b>In Stock</b></Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <p>{price}</p>

      <p>{category}</p>
      <p>{description}</p>
      <Button>Add to Cart</Button>
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
    </>
  );
}

// Generates `/products/1` and `/products/2`
export async function getStaticPaths() {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

  const slugs: string[] = products.map((product: ProductModel) => {
    return `${slugify(product.title)}-${product.id}`;
  });

  return {
    // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { slug: string } }) {
  const id = context.params.slug.split('-').pop();
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

  return {
    // Passed to the page component as props
    props: {
      product,
    },
  };
}
