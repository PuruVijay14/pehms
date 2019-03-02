export class Patient {
  readonly nameDesig: string;
  readonly patientName: string;
  readonly relativeDesig: string;
  readonly relativeName: string;
  readonly age: number;
  readonly gender: string = "M" || "F";
  readonly phone: string;
  readonly consultationPrice?: number;
  readonly discountPercant: number;
  readonly finalAmount: number;
  readonly timestamp: number;
}
