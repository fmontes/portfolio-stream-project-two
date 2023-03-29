import { HeaderSecondary } from '@/components/HeaderSecondary';
import { ProductsGrid } from '@/components/ProductsGrid';
import { getPriceFilterRanges } from '@/utils/getPriceFilterRanges';
import { Container } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';

import { GetServerSideProps } from 'next';
import { ChangeEvent, useState } from 'react';
import { Product } from '..';

type Props = {
  products: Product[];
  category: string;
};

type FilteredProducts = {
  products: Product[];
  filtered: 'IDLE' | 'FILTERED';
};

export default function Category({ products, category }: Props) {
  const [filteredProducts, setFilteredProducts] = useState<FilteredProducts>({
    products: [],
    filtered: 'IDLE',
  });

  const rangeOptions = getPriceFilterRanges(products.map((p) => p.price));

  function onFilterSelected(e: ChangeEvent<HTMLSelectElement>) {
    const [min, max] = e.target.value.split('-');

    const filtered = products.filter((p) => p.price >= parseFloat(min) && p.price <= parseFloat(max));

    setFilteredProducts({
      products: filtered,
      filtered: 'IDLE',
    });
  }

  const emptyFilter = filteredProducts.filtered === 'FILTERED' && !filteredProducts.products.length;
  const data = filteredProducts.products.length ? filteredProducts.products : products;

  return (
    <>
      <HeaderSecondary
        breadcrumb={[
          {
            href: '/',
            text: category,
          },
        ]}
      />
      <Container mt={'3rem'}>
        <Select onChange={onFilterSelected} placeholder="Select option" w="200px" mb={'2rem'}>
          {rangeOptions.map(({ label, value: { max, min } }, key) => (
            <option value={`${min}-${max}`} key={key}>
              {label}
            </option>
          ))}
        </Select>
        {emptyFilter ? <h3>No products in this filter</h3> : <ProductsGrid products={data} />}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.query.category;
  const url = `https://fakestoreapi.com/products/category/${category}`;
  const products = await fetch(url).then((res) => res.json());

  if (!products.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
      category,
    },
  };
};
