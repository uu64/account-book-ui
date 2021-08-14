import axios from "axios";
import qs from "qs";
import Record from "../models/IRecord";

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
      records.push({
        month: d["month"],
        housing: d["housing"],
        electric: d["electric"],
        gas: d["gas"],
        hydro: d["hydro"],
        grocery: d["grocery"],
        misc: d["misc"],
        others: d["others"],
        sum: d["sum"],
        comment: d["comment"],
      });
    }
    return records;
  }
}
