import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "scholarshipPipe"
})
export class ScholarshipPipePipe implements PipeTransform {

  transform(value: string, average: number): string {
    if (average === 5) {
      return value.toUpperCase();
    }
    return value;
  }

}
