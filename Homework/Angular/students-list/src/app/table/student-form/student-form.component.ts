import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Student } from "src/app/app.component";

export interface Value {
  name: {
    lastName: string;
    firstName: string;
    midName: string;
  };
  birthDate: {
    date: string
    month: string
    year: string
  };
  averageScore: string;
}

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"]
})
export class StudentFormComponent implements OnInit {

  @Input() addFlag: boolean = false;
  @Input() editFlag: boolean = false;
  @Input() editedStudent!: Student;
  @Output() editFlagChange = new EventEmitter<boolean>();
  @Output() addFlagChange = new EventEmitter<boolean>();
  @Output() editedStudentChange = new EventEmitter<Student>();

  editStudentData!: Student;

  studentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.editFlag === true) {
      this.studentForm = new FormGroup({
        name: new FormGroup({
          lastName: new FormControl(this.editedStudent.lastName, [Validators.required]),
          firstName: new FormControl(this.editedStudent.firstName, [Validators.required]),
          midName: new FormControl(this.editedStudent.midName, [Validators.required])
        }, [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
        birthDate: new FormGroup({
          date: new FormControl(this.editedStudent.birthDate.getDate()),
          month: new FormControl(this.editedStudent.birthDate.getMonth()),
          year: new FormControl(this.editedStudent.birthDate.getFullYear())
        }),
        averageScore: new FormControl(this.editedStudent.averageScore)
      });
    }
    if (this.addFlag === true) {
      this.studentForm = new FormGroup({
        name: new FormGroup({
          lastName: new FormControl(),
          firstName: new FormControl(),
          midName: new FormControl()
        }),
        birthDate: new FormGroup({
          date: new FormControl(),
          month: new FormControl(),
          year: new FormControl()
        }),
        averageScore: new FormControl()
      });
    }
  }

  editedStudentHelper(value: Value): void {
    this.editStudentData.id = this.editedStudent.id;
    this.editStudentData.lastName = value.name.lastName;
    this.editStudentData.firstName = value.name.firstName;
    this.editStudentData.midName = value.name.midName;
    this.editStudentData.birthDate = new Date(value.birthDate.year + "-" + value.birthDate.month + "-" + value.birthDate.date);
    this.editStudentData.averageScore = Number(value.averageScore);
  }

  onSubmit(): void {
    this.editedStudentHelper(this.studentForm.value);
    console.log(this.editStudentData);
    this.editedStudentChange.emit(this.studentForm.value);
    this.onClose();
  }

  onClose(): void {
    this.addFlagChange.emit(false);
    this.editFlagChange.emit(false);

  }
}

function birthDate(formGroup: FormGroup) {
  const now = new Date();
  if ( now.getFullYear() - Number(formGroup.value.birthDate.year < 10) ) {
    return { birthDate: { message: "Date of birth later than 10 years ago" } };
  }
  if (now.getFullYear() - Number(formGroup.value.birthDate.year) === 10) {
    if ( now.getMonth() < Number(formGroup.value.birthDate.month) ) {
      return { birthDate: { message: "Date of birth later than 10 years ago" } };
    }
  }
  if (now.getFullYear() - Number(formGroup.value.birthDate.year) === 10) {
    if ( now.getMonth() === Number(formGroup.value.birthDate.month) ) {
      if ( now.getDate() < Number(formGroup.value.birthDate.date) ) {
        return { birthDate: { message: "Date of birth later than 10 years ago" } };
      }
    }
  }
  return null;
}

function lsFsMidName(formGroup: FormGroup) {
  if (formGroup.value.lastName === formGroup.value.first.name || formGroup.value.firstName === formGroup.value.midName) {
    return { lsFsMidName: { message: "Тame that matches the last name or mid name" } };
  }
  return null;
}
