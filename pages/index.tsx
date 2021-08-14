import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import { HStack, Spacer, Stack } from "@chakra-ui/react";
import EditLink from "../components/EditLink";
import MonthSelector from "../components/MonthSelector";
import MonthlyViewTable from "../components/MonthlyViewTable";

const Home: NextPage = () => {
  const [year, setYear] = useState<number>(2021);
  const [month, setMonth] = useState<number>(7);
  const onYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("update year");
    setYear(parseInt(event.target.value));
  };
  const onMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("update month");
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
