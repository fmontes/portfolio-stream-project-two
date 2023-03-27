import { HeaderSecondary } from '@/components/HeaderSecondary';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Container } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Product } from '..';

type Props = {
  products: Product[];
  category: string;
};

export default function Category({ products, category }: Props) {
  return (
    <>
      <HeaderSecondary breadcrumb={[{
        href: '/',
        text: category
      }]} />
      <Container mt={'3rem'}>
        <ProductsGrid products={products} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.query.category;
  const url = `https://fakestoreapi.com/products/category/${category}`;
  const products = await fetch(url).then((res) => res.json());

  return {
    props: {
      products,
      category
    },
  };
};
