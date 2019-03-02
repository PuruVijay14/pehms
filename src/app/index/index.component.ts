import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Patient } from "../interfaces/patient";
import { Observable } from "rxjs";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  returned: any;

  patientsData: Observable<Patient[]>;

  displayedColumns = ["patientName", "relativeName", "phone"];

  constructor(private data: DataService) {}

  date = new Date("March 2, 2019");

  ngOnInit() {
    this.patientsData = this.data.getPatients(this.date);
  }
}
