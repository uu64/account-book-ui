import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { Box } from "@chakra-ui/react";
import TransitionViewService, {
  TransitionViewDataSet,
} from "../services/TransitionViewService";
import styles from "../styles/LoadingOverlay.module.css";

interface Props {
  year: number;
  month: number;
  item: string;
}

const createChartData = (
  values: (number | null)[],
  xticks: string[],
  label: string
): ChartData => {
  return {
    labels: xticks,
    datasets: [
      {
        label: `# ${label}`,
        data: values,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
};

const TransitionViewGraph: React.FC<Props> = ({ year, month, item }) => {
  const [data, setData] = useState<ChartData>(createChartData([], [], ""));
  const [dataSet, setDataSet] = useState<TransitionViewDataSet>({
    monthStr: "",
    xticks: [],
    data: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    TransitionViewService.getData(year, month).then((res) => {
      setDataSet(res);
      setIsLoading(false);
    });
  }, [year, month]);

  useEffect(() => {
    const data = dataSet.data.find((d) => d.label === item);
    const values = data ? data.values : [];
    const label = data ? data.label : "";
    setData(createChartData(values, dataSet.xticks, label));
  }, [item, dataSet]);

  return (
    <Box className={isLoading ? styles.loading : ""}>
      <Line data={data} />
    </Box>
  );
};

export default TransitionViewGraph;
