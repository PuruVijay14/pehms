export class Patient {
  readonly name: string;
  readonly relative: string;
  readonly dob: string;
  readonly gender: string = "M" || "F";
  readonly phone: string;
  readonly consultation?: number;
  readonly discountPercent: number;
  readonly finalAmount: number;
}
