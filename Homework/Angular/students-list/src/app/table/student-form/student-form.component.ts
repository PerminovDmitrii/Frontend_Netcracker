import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Student } from "src/app/app.component";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"]
})
export class StudentFormComponent implements OnInit {

  @Input() addFlag: boolean = false;
  @Input() editStartFlag: boolean = false;
  @Input() editedStudent!: Student;

  entity = {
    lastName: "",
    firstName: "",
    midName: "",
    date: "",
    month: "",
    year: "",
    averageScore: ""
  };

  public stydentForm: FormGroup = new FormGroup({
    name: new FormGroup({
      lastName: new FormControl(this.entity.lastName),
      firstName: new FormControl(this.entity.firstName),
      midName: new FormControl(this.entity.midName)
    }),
    birthDate: new FormGroup({
      date: new FormControl(this.entity.date),
      month: new FormControl(this.entity.month),
      year: new FormControl(this.entity.year)
    }),
    averageScore: new FormControl(this.entity.averageScore)
  });

  ngOnInit(): void {
    if (this.editStartFlag === true) {
      this.entity.lastName = this.editedStudent.lastName;
      this.entity.firstName = this.editedStudent.firstName;
      this.entity.midName = this.editedStudent.midName;
      this.entity.date = this.editedStudent.birthDate.getDate().toString();
      this.entity.month = this.editedStudent.birthDate.getMonth().toString();
      this.entity.year = this.editedStudent.birthDate.getFullYear().toString();
      this.entity.averageScore = this.editedStudent.averageScore.toString();
    }
  }

  onSubmit(): void {

  }
}
