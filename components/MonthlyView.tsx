import { ChangeEvent, useState } from "react";
import { Heading, HStack, Spacer, Stack } from "@chakra-ui/react";
import EditLink from "./EditLink";
import MonthSelector from "./MonthSelector";
import MonthlyViewTable from "./MonthlyViewTable";

const MonthlyView: React.FC = () => {
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
      <Heading as="h3" fontSize={["sm", "sm", "md", "md", "md"]}>
        使ったお金
      </Heading>
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

export default MonthlyView;
