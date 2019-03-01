import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MiscService {
  constructor() {}
  toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
