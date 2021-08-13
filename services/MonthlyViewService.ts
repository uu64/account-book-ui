import Record from "../models/Record";
import RecordRepository from "../repositories/RecordRepository";
import DateUtil from "../utils/DateUtil";

export interface MonthlyViewData {
  current: Record;
  oneYearBefore: Record;
}

export default class MonthlyViewService {
  static async getData(year: number, month: number): Promise<MonthlyViewData> {
    const fmt = "YYYY-MM";
    const curMthStr = DateUtil.getDateString(new Date(year, month - 1), fmt);
    const oneYrB4Str = DateUtil.getDateStringOneYrB4(curMthStr, fmt);

    const records = await RecordRepository.get([curMthStr, oneYrB4Str]);
    const curRecord = records.find((r) => r.month === curMthStr);
    const oneYrB4Record = records.find((r) => r.month === oneYrB4Str);

    return {
      current: curRecord ? curRecord : this.createDefaultRecord(curMthStr),
      oneYearBefore: oneYrB4Record
        ? oneYrB4Record
        : this.createDefaultRecord(oneYrB4Str),
    };
  }

  private static createDefaultRecord(month: string) {
    return new Record(month, null, null, null, null, null, null, false, "");
  }
}
