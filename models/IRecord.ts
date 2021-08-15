export default interface IRecord {
  month: string;
  housing: number | null;
  electric: number | null;
  gas: number | null;
  hydro: number | null;
  grocery: number | null;
  misc: number | null;
  others: number | null;
  sum: number | null;
  comment: string;
}

export const recordAttributeIds = {
  month: "month",
  housing: "housing",
  electric: "electric",
  gas: "gas",
  hydro: "hydro",
  grocery: "grocery",
  misc: "misc",
  others: "others",
  sum: "sum",
  comment: "comment",
};

export const getRecordAttributeById = (
  record: IRecord,
  id: string
): string | number | null => {
  switch (id) {
    case "month":
      return record.month;
    case "housing":
      return record.housing;
    case "electric":
      return record.electric;
    case "gas":
      return record.gas;
    case "hydro":
      return record.hydro;
    case "grocery":
      return record.grocery;
    case "misc":
      return record.misc;
    case "others":
      return record.others;
    case "sum":
      return record.sum;
    case "comment":
      return record.comment;
    default:
      // TODO: error handling
      throw new Error("id is not valid");
  }
};
