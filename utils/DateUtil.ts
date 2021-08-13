import dayjs from "dayjs";

export default class DateUtil {
  static getDateString(date: string | Date, format: string): string {
    return dayjs(date).format(format);
  }

  static getDateStringOneMthB4(date: string | Date, format: string): string {
    const dt = dayjs(date);
    return dt.subtract(1, "month").format(format);
  }

  static getDateStringOneYrB4(date: string | Date, format: string): string {
    const dt = dayjs(date);
    return dt.subtract(1, "year").format(format);
  }
}
