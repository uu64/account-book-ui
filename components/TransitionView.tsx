import React, { ChangeEvent, useState } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import ItemSelector from "./ItemSelector";
import TransitionViewGraph from "./TransitionViewGraph";
import { recordAttributeIds } from "../models/IRecord";

const LineChart: React.FC = () => {
  const today = new Date();
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth());
  const [item, setItem] = useState<string>(recordAttributeIds.sum);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setItem(event.target.value);
  };

  return (
    <Stack spacing={6}>
      <Heading as="h3" fontSize={["sm", "sm", "md", "md", "md"]}>
        使い方の変化
      </Heading>
      <ItemSelector item={item} onChange={onChange} />
      <TransitionViewGraph year={year} month={month} item={item} />
    </Stack>
  );
};

export default LineChart;
