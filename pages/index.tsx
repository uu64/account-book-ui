import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import MonthlyView from "../components/MonthlyView";
import TransitionView from "../components/TransitionView";

const Home: NextPage = () => {
  return (
    <Stack spacing={6}>
      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <MonthlyView />
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <TransitionView />
      </Box>
    </Stack>
  );
};

export default Home;
