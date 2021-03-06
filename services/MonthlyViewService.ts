import IRecord from "../models/IRecord";
import RecordRepository from "../repositories/RecordRepository";
import DateUtil from "../utils/DateUtil";

export interface MonthlyViewData {
  monthStr: string;
  current: IRecord;
  oneYearBefore: IRecord;
}

export default class MonthlyViewService {
  static async getData(year: number, month: number): Promise<MonthlyViewData> {
    const fmt = "YYYY-MM";
    const curDt = new Date(year, month - 1);
    const curMthStr = DateUtil.getDateString(curDt, fmt);
    const oneYrB4Str = DateUtil.getDateStringYrB4(curDt, 1, fmt);

    const records = await RecordRepository.get([curMthStr, oneYrB4Str]);
    const curRecord = records.find((r) => r.month === curMthStr);
    const oneYrB4Record = records.find((r) => r.month === oneYrB4Str);

    return {
      monthStr: curMthStr,
      current: curRecord ? curRecord : this.createEmptyRecord(),
      oneYearBefore: oneYrB4Record ? oneYrB4Record : this.createEmptyRecord(),
    };
  }

  static createEmptyRecord(): IRecord {
    return {
      month: "",
      housing: null,
      electric: null,
      gas: null,
      hydro: null,
      grocery: null,
      misc: null,
      others: null,
      sum: null,
      comment: "",
    };
  }
}
