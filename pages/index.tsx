import type { NextPage, GetServerSideProps } from "next";
import { Stack, Box, Button } from "@chakra-ui/react";
import MonthlyViewService, {
  MonthlyViewData,
} from "../services/MonthlyViewService";
import MonthlyViewTable from "../components/MonthlyViewTable";

interface Props {
  data: MonthlyViewData;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Stack>
      <Box>
        <MonthlyViewTable data={data} />
      </Box>
      <Box>
        <Button
          onClick={() => {
            MonthlyViewService.getData(2021, 3).then((res) => {
              console.log(res);
            });
          }}
        >
          Button
        </Button>
      </Box>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const today = new Date();
  const data = await MonthlyViewService.getData(
    today.getFullYear(),
    today.getMonth()
  );
  console.log(data);
  return {
    props: { data },
  };
};

export default Home;
