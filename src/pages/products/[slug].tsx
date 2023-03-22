import Image from 'next/image';

import { slugify } from '@/utils/sluglify';
import { AspectRatio, Box, Button, Container, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { Product as ProductModel } from '../index';
import { PDPHeader } from '@/components/PDPHeader';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import icoTruck from '/public/ico-truck.svg';
import icoReturn from '/public/ico-return.svg';
import icoMail from '/public/ico-mail.svg';

import logo_aes256 from '/public/logo_aes256.png';
import logo_amex from '/public/logo_amex.png';
import logo_discover from '/public/logo_discover.png';
import logo_mastercard from '/public/logo_mastercard.png';
import logo_paypal from '/public/logo_paypal.png';
import logo_stripe from '/public/logo_stripe.png';
import logo_visa from '/public/logo_visa.png';

type Props = {
  product: ProductModel;
};

function Price({ price }: { price: number }) {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  return (
    <Text fontSize="xl" fontWeight={'bold'}>
      {currency}
    </Text>
  );
}

export default function Product({ product }: Props) {
  const { price, category, description, image } = product;
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    setShowPrice(true);
  }, []);

  return (
    <>
      <PDPHeader product={product}></PDPHeader>
      <Container as={Grid} gridTemplateColumns={'34.88rem 1fr'} mt="2rem" gap="2rem">
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

        <Box>
          <Heading as="h3" textTransform={'uppercase'} fontSize="md" color="gray.500" mb="0.5rem">
            Description
          </Heading>
          <Text>{description}</Text>

          <Divider my={'2rem'} variant="bold" />

          <Flex alignItems={'center'} gap="1.5rem">
            {showPrice && <Price price={price} />} <Button>Add to Cart</Button>
            <Link href="#">
              <Image src="/ico-like.svg" alt="" width="24" height="24" />
            </Link>
            <Link href="#">
              <Image src="/ico-legal.svg" alt="" width="24" height="24" />
            </Link>
          </Flex>

          <Divider my={'2rem'} variant="bold" />

          <Flex gap="1.75rem" fontSize={'sm'} mb="2rem">
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src={icoTruck} width="24" alt="Icon of a truck" /> Shipping & Delivery
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src={icoReturn} width="24" alt="Icon of two curve arrows" />
              Returns & Exchanges
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src={icoMail} width="24" alt="Icon of an envelope" /> Ask a question
            </Flex>
          </Flex>

          <Flex alignItems={'center'} gap="1.5rem">
            <Heading as="h3" whiteSpace={'nowrap'} textTransform={'uppercase'} fontSize="md" color="gray.500">
              Guaranteed Safe Checkout
            </Heading>
            <Divider variant="bold" />
          </Flex>

          <Flex justifyContent={'space-between'} mt="1.5rem" mb="2rem">
            <Image src={logo_stripe} alt="" />
            <Image src={logo_aes256} alt="" />
            <Image src={logo_paypal} alt="" />
            <Image src={logo_visa} alt="" />
            <Image src={logo_mastercard} alt="" />
            <Image src={logo_discover} alt="" />
            <Image src={logo_amex} alt="" />
          </Flex>

          <Divider variant="bold" />

        </Box>
      </Container>
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
