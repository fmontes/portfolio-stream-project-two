import { ProductsGrid } from '@/components/ProductsGrid';
import { Container } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Product } from '..';

type Props = {
  products: Product[];
};

export default function Category({ products }: Props) {
  return (
    <Container>
      <ProductsGrid products={products} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = `https://fakestoreapi.com/products/category/${context.query.category}`;
  const products = await fetch(url).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
};
