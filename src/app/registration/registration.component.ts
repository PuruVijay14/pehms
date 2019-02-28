import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  nameDesigSelect = "Mr";
  patientName: any;
  relativeDesigSelect = "S/O";
  relativeName;
  age;
  gender = "M";
  phone;

  // Consultation
  consultationPrice = 250;

  // Discount
  discountPercant = 0;

  // Final amount
  finalAmount = this.consultationPrice * (1 - this.discountPercant / 100);

  // Loading
  loading = false;

  constructor(private afstore: AngularFirestore) {}

  ngOnInit() {}

  async register() {
    const id = this.afstore.createId();
    await this.afstore.doc(`patients/${id}`).set({
      nameDesig: this.nameDesigSelect,
      patientName: this.patientName,
      relativeDesigSelect: this.relativeDesigSelect,
      relativeName: this.relativeName,
      age: +this.age,
      gender: this.gender,
      phone: this.phone,
      consultationPrice: this.consultationPrice,
      discountPercant: this.discountPercant,
      finalAmount: this.consultationPrice * (1 - this.discountPercant / 100)
    });
  }
}
