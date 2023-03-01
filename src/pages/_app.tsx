import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';

import { defineStyleConfig } from '@chakra-ui/react';

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'none',
  },
  defaultProps: {
    colorScheme: 'brand',
  },
});

import '@fontsource/spartan/400.css';
import '@fontsource/spartan/700.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#2a2a2a',
      900: '#121212',
    },
  },
  fonts: {
    heading: `"Spartan", sans-serif`,
    body: `"Spartan", sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Container: {
      baseStyle: {
        maxW: '71.375rem',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
