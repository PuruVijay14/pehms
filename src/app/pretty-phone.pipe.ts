import { Pipe, PipeTransform } from "@angular/core";
import { format, ParsedNumber } from "libphonenumber-js";

@Pipe({
  name: "prettyPhone"
})
export class PrettyPhonePipe implements PipeTransform {
  transform(value: ParsedNumber, args?: string): any {
    if (!value) {
      return value;
    }
    return format(value, "International");
  }
}
