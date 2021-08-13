export default class Record {
  constructor(
    readonly month: string,
    readonly housing: number | null,
    readonly electric: number | null,
    readonly gas: number | null,
    readonly hydro: number | null,
    readonly grocery: number | null,
    readonly others: number | null,
    readonly settled: boolean,
    readonly comment: string
  ) {}
}
