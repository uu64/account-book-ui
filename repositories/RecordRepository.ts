import axios from "axios";
import qs from "qs";
import Record from "../models/Record";

export default class RecordRepository {
  private static url = process.env.NEXT_PUBLIC_API_URL;
  private static spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  private static sheetId = process.env.NEXT_PUBLIC_SHEET_ID;

  static async get(month: string[]): Promise<Record[]> {
    const res = await axios({
      method: "get",
      url: this.url,
      params: {
        id: this.spreadsheetId,
        sheet_id: this.sheetId,
        month: month,
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    let records: Record[] = [];
    if (!res.data.isSuccess) {
      // TODO: error handling
      throw new Error(res.data.message);
    }
    for (let d of res.data.data.records) {
      records.push(
        new Record(
          d["month"],
          d["housing"],
          d["electric"],
          d["gas"],
          d["hydro"],
          d["grocery"],
          d["others"],
          d["settled"],
          d["comment"]
        )
      );
    }
    return records;
  }
}
