import type { AppProps } from "next/app";
import {
  ChakraProvider,
  Box,
  Container,
  Stack,
  Heading,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Stack>
          <Heading p={4} as="h1" size="md">
            &#x1f60e; お金の記録
          </Heading>
          <Box p={4}>
            <Component {...pageProps} />
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
