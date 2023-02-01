import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

const theme = extendTheme({
  fonts: {
    heading: `"Spartan", sans-serif`,
    body: `"Spartan", sans-serif`,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}
