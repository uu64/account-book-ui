import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import LocaleUtil from "../utils/LocaleUtil";

const EditLink: React.FC = () => {
  const ssId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  const sheetId = process.env.NEXT_PUBLIC_SHEET_ID;
  const url = `https://docs.google.com/spreadsheets/d/${ssId}/edit#gid=${sheetId}`;
  return (
    <Link href={url} isExternal>
      {LocaleUtil.get("edit-link")} <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

export default EditLink;
