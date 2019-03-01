import { AfterViewInit, Component } from "@angular/core";
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  title = "pehms";
  async ngAfterViewInit() {
    // document.body.requestFullscreen();
  }
  constructor(private auth: AuthService) {
    // this.auth.user.then(console.log);
  }
}
