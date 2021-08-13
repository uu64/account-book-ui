export default interface IRecord {
  month: string;
  housing: number | null;
  electric: number | null;
  gas: number | null;
  hydro: number | null;
  grocery: number | null;
  others: number | null;
  settled: boolean;
  comment: string;
}
