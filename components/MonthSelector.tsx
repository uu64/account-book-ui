import { Flex, HStack, Select, Spacer, Text } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { FiCalendar } from "react-icons/fi";

interface Props {
  year: number;
  month: number;
  onYearChange: ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: ChangeEventHandler<HTMLSelectElement>;
}

const MonthSelector: React.FC<Props> = (props) => {
  const { year, month, onYearChange, onMonthChange } = props;

  const yearOptions = [];
  for (let i = 2019; i <= new Date().getFullYear(); i++) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const monthOptions = [];
  for (let i = 1; i <= 12; i++) {
    monthOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <Flex>
      <Spacer />
      <HStack>
        <FiCalendar size="1.5em" />
        <Select w="8em" value={year} onChange={onYearChange}>
          {yearOptions}
        </Select>
        <Text> / </Text>
        <Select w="8em" value={month} onChange={onMonthChange}>
          {monthOptions}
        </Select>
      </HStack>
    </Flex>
  );
};
export default MonthSelector;
