import { getRecordAttributeById, recordAttributeIds } from "../models/IRecord";
import RecordRepository from "../repositories/RecordRepository";
import DateUtil from "../utils/DateUtil";

export interface TransitionViewData {
  label: string;
  values: (number | null)[];
}

export interface TransitionViewDataSet {
  monthStr: string;
  xticks: string[];
  data: TransitionViewData[];
}

export const ItemIds = [
  recordAttributeIds.housing,
  recordAttributeIds.electric,
  recordAttributeIds.gas,
  recordAttributeIds.hydro,
  recordAttributeIds.grocery,
  recordAttributeIds.misc,
  recordAttributeIds.others,
  recordAttributeIds.sum,
];

export default class TransitionViewService {
  static async getData(
    year: number,
    month: number
  ): Promise<TransitionViewDataSet> {
    const fmt = "YYYY-MM";
    const curDt = new Date(year, month - 1);
    const curMthStr = DateUtil.getDateString(curDt, fmt);
    const threeYrB4Str = DateUtil.getDateStringYrB4(curDt, 3, fmt);

    const target = DateUtil.getDateStringRange(
      threeYrB4Str,
      curMthStr,
      1,
      "month",
      fmt
    );
    const records = await RecordRepository.get(target);

    const dataset: TransitionViewDataSet = {
      monthStr: curMthStr,
      xticks: target,
      data: [],
    };
    for (let l of ItemIds) {
      const data: TransitionViewData = {
        label: l,
        values: [],
      };

      for (let t of target) {
        const r = records.find((r) => r.month === t);
        if (r) {
          data.values.push(getRecordAttributeById(r, l) as number | null);
        } else {
          data.values.push(null);
        }
      }

      dataset.data.push(data);
    }
    return dataset;
  }
}
