import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  returned: any;
  constructor(private data: DataService) {}

  date = new Date("March 1, 2019");
  ngOnInit() {
    this.data.getPatients(this.date).subscribe(console.log);
  }
}
