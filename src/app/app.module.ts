import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { MaterialModule } from "./modules/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { IndexComponent } from "./index/index.component";
import { RegistrationComponent } from "./registration/registration.component";
import { DateAdapter } from "@angular/material";
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material";
import {
  MomentDateModule,
  MomentDateAdapter
} from "@angular/material-moment-adapter";

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD MMM, YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "DD/MMM/YYYY",
    monthYearA11yLabel: "MMM YYYY"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    IndexComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "it" }, //you can change useValue
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-GB"); // DD/MM/YYYY
  }
}
