const ja = new Map([
  ["housing", "住宅費"],
  ["electric", "電気代"],
  ["gas", "ガス代"],
  ["hydro", "水道代"],
  ["grocery", "食費"],
  ["misc", "雑費"],
  ["others", "その他"],
  ["sum", "合計"],
  ["item", "項目"],
  ["this-month", "当月"],
  ["1year-before", "１年前"],
  ["diff", "対前年"],
  ["monthly-view-title", "使ったお金"],
  ["transition-view-title", "使い方の変化"],
  ["edit-link", "スプレッドシートで編集する"],
]);

const get = (key: string): string => {
  const v = ja.get(key);
  return v ? v : key;
};

// TODO: support other language
export default {
  get: get,
};
