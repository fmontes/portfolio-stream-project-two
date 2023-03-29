export type Range = {
  label: string;
  value: {
    min: number;
    max: number;
  };
};

export function getPriceFilterRanges(prices: number[]): Range[] {
  // Step 1: Get an array of all the prices
  const sortedPrices = prices.sort((a, b) => a - b);

  // Step 2: Sort the array in ascending order
  const minPrice = sortedPrices[0];
  const maxPrice = sortedPrices[sortedPrices.length - 1];

  // Step 3: Calculate the minimum and maximum prices
  const range = maxPrice - minPrice;

  // Step 4: Divide the price range into equal parts
  const numRanges = 3;
  const rangeSize = range / numRanges;

  // Step 6: Generate an array of price range options
  const rangeOptions = [];
  
  for (let i = 0; i < numRanges; i++) {
    const start = minPrice + i * rangeSize;
    const end = start + rangeSize;
    const label = `$${start.toFixed(2)} - $${end.toFixed(2)}`;
    rangeOptions.push({ label, value: { min: start, max: end } });
  }

  return rangeOptions;
}