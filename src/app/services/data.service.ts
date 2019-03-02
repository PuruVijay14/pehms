import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private afStore: AngularFirestore) {}

  getPatients(date: Date) {
    const query = this.afStore
      .collection<Patient>("patients", ref =>
        ref
          .where("timestamp", ">=", date.getTime())
          .where("timestamp", "<", date.getTime() + 86400000)
      )
      .valueChanges();

    // Return the query
    return query;
  }
}
