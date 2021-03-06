import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import MonthlyViewService, {
  MonthlyViewData,
} from "../services/MonthlyViewService";
import DateUtil from "../utils/DateUtil";
import LocaleUtil from "../utils/LocaleUtil";
import styles from "../styles/LoadingOverlay.module.css";

const NODATA_LABEL = "-";
const oneYrB4ColDisplay = [
  "none",
  "none",
  "table-cell",
  "table-cell",
  "table-cell",
];
const tableCellPadX = ["0.5em", "2em", "2em", "2em", "2em"];

interface Props {
  year: number;
  month: number;
}

function toYenString(value: number | null): string {
  return value ? `￥ ${value.toLocaleString("ja-JP")}` : NODATA_LABEL;
}

function getYenDiff(
  current: number | null,
  oneYearBefore: number | null
): string {
  if (typeof current === "number" && typeof oneYearBefore === "number") {
    const d = current - oneYearBefore;
    return `( ${d > 0 ? "+" : ""}${d.toLocaleString("ja-JP")} )`;
  }
  return NODATA_LABEL;
}

function renderRow(
  label: string,
  current: number | null,
  oneYearBefore: number | null
) {
  const curStr = toYenString(current);
  const oneYrB4Str = toYenString(oneYearBefore);
  const diff = getYenDiff(current, oneYearBefore);
  const textColor = (v: string) => {
    return v === NODATA_LABEL ? "gray" : "black";
  };

  return (
    <Tr>
      <Td px={tableCellPadX}>
        <Text align="center">{label}</Text>
      </Td>
      <Td isNumeric px={tableCellPadX}>
        <Text color={textColor(curStr)}>{curStr}</Text>
      </Td>
      <Td isNumeric px={tableCellPadX} display={oneYrB4ColDisplay}>
        <Text color={textColor(oneYrB4Str)}>{oneYrB4Str}</Text>
      </Td>
      <Td isNumeric px={tableCellPadX}>
        <Text>{diff}</Text>
      </Td>
    </Tr>
  );
}

const MonthlyViewTable: React.FC<Props> = ({ year, month }) => {
  const [data, setData] = useState<MonthlyViewData>({
    current: MonthlyViewService.createEmptyRecord(),
    oneYearBefore: MonthlyViewService.createEmptyRecord(),
    monthStr: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    MonthlyViewService.getData(year, month).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [year, month]);

  const { current, oneYearBefore, monthStr } = data;
  return (
    <Table variant="simple" className={isLoading ? styles.loading : ""}>
      <Thead>
        <Tr>
          <Th px={tableCellPadX}>
            <Text align="center">{LocaleUtil.get("item")}</Text>
          </Th>
          <Th px={tableCellPadX}>
            <Text align="center">
              {LocaleUtil.get("this-month")} (
              {monthStr
                ? DateUtil.getDateString(monthStr, "YYYY / MM")
                : NODATA_LABEL}
              )
            </Text>
          </Th>
          <Th px={tableCellPadX} display={oneYrB4ColDisplay}>
            <Text align="center">
              {LocaleUtil.get("1year-before")} (
              {monthStr
                ? DateUtil.getDateStringYrB4(monthStr, 1, "YYYY / MM")
                : NODATA_LABEL}
              )
            </Text>
          </Th>
          <Th px={tableCellPadX}>
            <Text align="center">{LocaleUtil.get("diff")}</Text>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderRow(
          LocaleUtil.get("housing"),
          current.housing,
          oneYearBefore.housing
        )}
        {renderRow(
          LocaleUtil.get("electric"),
          current.electric,
          oneYearBefore.electric
        )}
        {renderRow(LocaleUtil.get("gas"), current.gas, oneYearBefore.gas)}
        {renderRow(LocaleUtil.get("hydro"), current.hydro, oneYearBefore.hydro)}
        {renderRow(
          LocaleUtil.get("grocery"),
          current.grocery,
          oneYearBefore.grocery
        )}
        {renderRow(LocaleUtil.get("misc"), current.misc, oneYearBefore.misc)}
        {renderRow(
          LocaleUtil.get("others"),
          current.others,
          oneYearBefore.others
        )}
      </Tbody>
    </Table>
  );
};

export default MonthlyViewTable;
