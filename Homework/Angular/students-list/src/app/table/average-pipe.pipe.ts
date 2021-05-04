import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "averagePipe"
})
export class AveragePipePipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      return value + " of 5";
    }
    return "";
  }

}
