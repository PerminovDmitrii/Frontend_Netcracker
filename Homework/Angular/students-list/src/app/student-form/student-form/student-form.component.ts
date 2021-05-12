import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Student } from "src/app/table/local.table.service";

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"]
})
export class StudentFormComponent implements OnInit {

  @Input() addFlag: boolean = false;
  @Input() editFlag: boolean = false;
  @Input() editedStudent!: Student;
  @Input() filteredStudents: Student[] = [];
  @Input() loadType: string = "";
  @Output() editFlagChange = new EventEmitter<boolean>();
  @Output() addFlagChange = new EventEmitter<boolean>();
  @Output() filteredStudentsChange = new EventEmitter<Student[]>();

  editStudentData: Student = {
    id: 0,
    lastName: "",
    firstName: "",
    midName: "",
    birthDate: new Date("2000-01-01"),
    averageScore: 0,
  };

  studentForm!: FormGroup;

  constructor( private router: Router) { }

  ngOnInit(): void {
    if (this.editFlag === true) {
      this.studentForm = new FormGroup({
        name: new FormGroup({
          lastName: new FormControl(this.editedStudent.lastName),
          firstName: new FormControl(this.editedStudent.firstName),
          midName: new FormControl(this.editedStudent.midName)
        }, [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
        birthDate: new FormGroup({
          date: new FormControl(this.editedStudent.birthDate.getDate(), [Validators.maxLength(2), Validators.max(31), Validators.min(0)]),
          month: new FormControl(this.editedStudent.birthDate.getMonth(), [Validators.maxLength(2), Validators.max(12), Validators.min(1)]),
          year: new FormControl(this.editedStudent.birthDate.getFullYear(), [Validators.maxLength(4), Validators.minLength(4),
            Validators.max(2021), Validators.min(1990)])
        }, [Validators.required]),
        averageScore: new FormControl(this.editedStudent.averageScore, [Validators.required, Validators.maxLength(1), Validators.min(2),
        Validators.max(5)])
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
    this.addFlag === true ? this.editStudentData.id = this.filteredStudents.length : this.editStudentData.id = this.editedStudent.id;
    this.editStudentData.lastName = value.name.lastName;
    this.editStudentData.firstName = value.name.firstName;
    this.editStudentData.midName = value.name.midName;
    this.editStudentData.birthDate = new Date(value.birthDate.year + "-" + value.birthDate.month + "-" + value.birthDate.date);
    this.editStudentData.averageScore = Number(value.averageScore);

    if (this.addFlag === false) {
      this.filteredStudents[this.editedStudent.id].lastName = value.name.lastName;
      this.filteredStudents[this.editedStudent.id].firstName = value.name.firstName;
      this.filteredStudents[this.editedStudent.id].midName = value.name.midName;
      this.filteredStudents[this.editedStudent.id].birthDate = new Date(value.birthDate.year + "-" + value.birthDate.month + "-" + value.birthDate.date);
      this.filteredStudents[this.editedStudent.id].averageScore = Number(value.averageScore);
    } else {
      this.editStudentData.id = this.filteredStudents.length;
      this.editStudentData.lastName = value.name.lastName;
      this.editStudentData.firstName = value.name.firstName;
      this.editStudentData.midName = value.name.midName;
      this.editStudentData.birthDate = new Date(value.birthDate.year + "-" + value.birthDate.month + "-" + value.birthDate.date);
      this.editStudentData.averageScore = Number(value.averageScore);
      this.filteredStudents.push(this.editStudentData);
    }
  }

  onSubmit(): void {
    this.editedStudentHelper(this.studentForm.value);
    this.filteredStudentsChange.emit(this.filteredStudents);
    this.onClose();
  }


  onClose(): void {
    this.addFlagChange.emit(false);
    this.editFlagChange.emit(false);
    this.router.navigate([`/students-table/${this.loadType}`]);
  }
}

function birthDate(formGroup: FormGroup): {[key: string]: boolean} | null {
  const now = new Date();
  if ( now.getFullYear() - Number(formGroup.value.birthDate.year < 10) ) {
    return {"Date of birth later than 10 years ago": true};
  }
  if (now.getFullYear() - Number(formGroup.value.birthDate.year) === 10) {
    if ( now.getMonth() < Number(formGroup.value.birthDate.month) ) {
      return {"Date of birth later than 10 years ago": true};
    }
  }
  if (now.getFullYear() - Number(formGroup.value.birthDate.year) === 10) {
    if ( now.getMonth() === Number(formGroup.value.birthDate.month) ) {
      if ( now.getDate() < Number(formGroup.value.birthDate.date) ) {
        return {"Date of birth later than 10 years ago": true};
      }
    }
  }
  return null;
}

function lsFsMidName(control: AbstractControl): ValidationErrors | null {
  if (control.value.name.lastName === control.value.name.first.name || control.value.name.firstName === control.value.name.midName) {
    return { lsFsMidName: {
      valid: false
      }
    };
    // return {"Тame that matches the last name or mid name": true};
  }
  return null;
}
