import Image from "next/image";

import { Grid, GridItemProps, GridItem } from "@chakra-ui/react";

import { slugify } from "@/utils/sluglify";

import { CenteredLabel } from "./CenteredLabel";
import { Categories } from "@/models/Categories";

type Props = {
  categories: Categories[]
}

export function HomeHeroCategories({ categories }: Props) {
  return (<Grid templateColumns="540px 255px 255px" templateRows="200px 260px" gap="30px">
    {categories.map((cat, key) => {
      const slug = slugify(cat);
      const imageUrl = `/pic-categories-${slug}.jpg`;

      let gridItemProps: GridItemProps = {
        position: "relative",
        w: "100%",
        h: "100%"
      };

      if (key === 0) {
        gridItemProps.rowSpan = 2;
      }

      if (key === categories.length - 1) {
        gridItemProps.colSpan = 2;
      }

      return <GridItem {...gridItemProps} key={key}><Image src={imageUrl} fill={true} alt={cat} />
        <CenteredLabel>{cat}</CenteredLabel>
      </GridItem>;
    })}
  </Grid>);
}