import { Flex, HStack, Select, Spacer, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { ChangeEventHandler } from "react";
import { ItemIds } from "../services/TransitionViewService";

interface Props {
  item: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const ItemSelector: React.FC<Props> = (props) => {
  const { item, onChange } = props;
  const itemOptions = [];
  for (let id of ItemIds) {
    itemOptions.push(
      <option key={id} value={id}>
        {id}
      </option>
    );
  }

  return (
    <Flex>
      <Spacer />
      <Select w="8em" value={item} onChange={onChange}>
        {itemOptions}
      </Select>
    </Flex>
  );
};
export default ItemSelector;
