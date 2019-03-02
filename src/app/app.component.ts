import { AfterViewInit, Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "gender-male",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/gender-male.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "gender-female",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/gender-female.svg"
      )
    );
  }
}
