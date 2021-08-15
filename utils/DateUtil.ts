import dayjs from "dayjs";

export default class DateUtil {
  static getDateString(date: string | Date, format: string): string {
    return dayjs(date).format(format);
  }

  static getDateStringMthB4(
    date: string | Date,
    value: number,
    format: string
  ): string {
    const dt = dayjs(date);
    return dt.subtract(value, "month").format(format);
  }

  static getDateStringYrB4(
    date: string | Date,
    value: number,
    format: string
  ): string {
    const dt = dayjs(date);
    return dt.subtract(value, "year").format(format);
  }

  static getDateStringRange(
    start: string | Date,
    end: string | Date,
    interval: number,
    unit: "year" | "month",
    format: string
  ): string[] {
    let dt = dayjs(start);
    const range: string[] = [];

    while (dt.isBefore(end)) {
      range.push(dt.format(format));
      dt = dt.add(interval, unit);
    }

    return range;
  }
}
