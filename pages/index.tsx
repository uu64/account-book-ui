import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import { Stack } from "@chakra-ui/react";
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
    <Stack>
      <MonthSelector
        year={year}
        month={month}
        onYearChange={onYearChange}
        onMonthChange={onMonthChange}
      />
      <MonthlyViewTable year={year} month={month} />
    </Stack>
  );
};

export default Home;
