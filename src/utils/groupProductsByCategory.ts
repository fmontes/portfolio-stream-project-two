import { Product } from "@/pages";

export type GroupedProducts = {
  [key: string]: Product[];
};

export function groupProductsByCategory(products: Product[]) {
  return products.reduce<GroupedProducts>((groups, product) => {
    if (!product) {
      throw new Error("Product is undefined or null");
    }

    const category = product.category;

    if (!category) {
      throw new Error("Product category is undefined or null");
    }

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(product);

    return groups;
  }, {});
}