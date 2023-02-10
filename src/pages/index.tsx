import { GetServerSidePropsContext } from "next";
import Head from "next/head"

import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";

import { HomeHeroCategories } from "@/components/HomeHeroCategories";
import { Categories } from "@/models/Categories";
import { Box, Container } from "@chakra-ui/react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}


type Props = {
  products: Product[],
  categories: Categories[]
}

export default function Home({ products, categories }: Props) {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopBar />
        <Box marginBottom="2rem">
          <Header />
        </Box>
        <Container size="lg">
          <HomeHeroCategories categories={categories}></HomeHeroCategories>
        </Container>

        {/* <ol>
          {products.map(product => {
            return <li key={product.id}><strong>{product.title}</strong></li>
          })}
        </ol> */}
      </main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
  const categories = await fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())


  return {
    props: {
      products,
      categories
    }
  }
}
