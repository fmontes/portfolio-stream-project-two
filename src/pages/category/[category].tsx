import { ProductsGrid } from '@/components/ProductsGrid';
import { Container } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

export default function Category(props) {
  return (
    <Container>
      <ProductsGrid products={props.products} />
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
