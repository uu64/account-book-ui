import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import { HStack, Spacer, Stack } from "@chakra-ui/react";
import EditLink from "../components/EditLink";
import MonthSelector from "../components/MonthSelector";
import MonthlyViewTable from "../components/MonthlyViewTable";

const Home: NextPage = () => {
  const today = new Date();
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth());

  const onYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };
  const onMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <Stack spacing={6}>
      <MonthSelector
        year={year}
        month={month}
        onYearChange={onYearChange}
        onMonthChange={onMonthChange}
      />
      <MonthlyViewTable year={year} month={month} />
      <HStack>
        <Spacer />
        <EditLink />
      </HStack>
    </Stack>
  );
};

export default Home;
