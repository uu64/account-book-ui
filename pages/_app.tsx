import type { AppProps } from "next/app";
import Head from "next/head";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const appName = "MONEY TRACKER";
  return (
    <ChakraProvider>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="App to track household expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg">
        <Stack>
          <Heading p={4} as="h1" size="md">
            {appName}
          </Heading>
          <Box p={4}>
            <Component {...pageProps} />
          </Box>
          <Box p={4}>
            <footer>
              <Text align="center" pt={8}>
                © 2021 yusuke
              </Text>
            </footer>
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
