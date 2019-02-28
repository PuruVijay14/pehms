import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "./modules/material/material.module";
import { NavComponent } from "./nav/nav.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from "@angular/fire/firestore";

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
    AngularFirestoreModule.enablePersistence(),
    MaterialModule,
    FlexLayoutModule,
    FormsModule
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
