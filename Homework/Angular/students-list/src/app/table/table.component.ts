import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Student } from "../app.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {

  @Input() students: Student[] = [];

  public threeScoreFlag: boolean = false;
  public highlightString: string = "";
  public filterString: string = "";
  public filteredStudents: Student[] = [];
  public filterDate: string = "";
  public filterMonth: string = "";
  public filterYear: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public sortedStudents: Student[] = this.filteredStudents;
  private reverseSortFlags: boolean[] = [];
  public deletedStudentId: number = 0;
  public systemMessage = {
    message: "",
    type: ""
  };
  public popupVisibility: boolean = false;
  public confirmDelete: boolean = false;
  public addFlag: boolean = false;
  public editStartFlag: boolean = false;
  public editEndFlag: boolean = false;
  public editedStudent: Student = this.students[0];

  ngOnInit(): void {
    this.filteredStudents = this.students;
  }

  public getBirthdate(date: Date): string {
    let month: string = (date.getMonth() + 1).toString();
    let dayDate: string = date.getDate().toString();
    if (dayDate.length === 1) {
      dayDate = "0" + dayDate;
    }
    if (month.length === 1) {
      month = "0" + month;
    }
    return `${dayDate}.${month}.${date.getFullYear()}`;
  }

  public isThreeScore(student: Student): boolean {
    if (student.averageScore <= 3 ) {
      return true;
    }
    return false;
  }

  private filterByAverage(): void {
    this.filteredStudents = [];
    for (const student of this.students) {
      console.log(this.filteredStudents);
      if (Number(this.filterString) === student.averageScore) {
        this.filteredStudents.push(student);
      }
    }
  }

  private filterByDate(): void {
    this.filteredStudents = [];
    const filterYear = Number(this.filterYear);
    const filterMonth = Number(this.filterMonth);
    const filterDate = Number(this.filterDate);

    for (const student of this.students) {
      if (filterYear !== 0 && filterMonth !== 0 && filterDate !== 0) {
        if (filterYear !== student.birthDate.getFullYear() || filterMonth !== student.birthDate.getMonth() + 1
        || filterDate !== student.birthDate.getDate()) {
          continue;
        }
        this.filteredStudents.push(student);
        continue;
      }
      if (filterYear !== 0 && filterMonth !== 0) {
        if (filterYear !== student.birthDate.getFullYear() || filterMonth !== student.birthDate.getMonth() + 1) {
          continue;
        }
        this.filteredStudents.push(student);
        continue;
      }
      if (filterYear !== 0) {
        if (filterYear !== student.birthDate.getFullYear()) {
          continue;
        }
        this.filteredStudents.push(student);
        continue;
      }
    }
  }

  public filterStudents(): void {
    this.filteredStudents = [];
    if (this.filterString !== "") {
      this.filterByAverage();
    }
    if (this.filterYear !== "" || this.filterMonth !== "" || this.filterDate !== "") {
      this.filterByAverage();
      this.filterByDate();
    }
  }

  public resetFilters(): void {
    this.filterYear = "";
    this.filterMonth = "";
    this.filterDate = "";
    this.filterString = "";
    this.filteredStudents = this.students;
  }

  public highlightStudentsBy(student: Student): boolean {
    if (this.firstName !== "" && this.lastName !== "" && this.firstName === student.firstName && this.lastName === student.lastName) {
      return true;
    }
    if (this.firstName !== "" && this.firstName === student.firstName) {
      return true;
    }
    if (this.lastName !== "" && this.lastName === student.lastName) {
      return true;
    }
    return false;
  }

  public sortBy(by: string): void {
    switch (by) {
      case "lastName": {
        if (this.reverseSortFlags[1] === true) {
          this.students.reverse();
          this.reverseSortFlags[1] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.lastName > b.lastName ? 1 : -1 );
        this.reverseSortFlags[1] = true;
        break;
      }
      case "firstName": {
        if (this.reverseSortFlags[2] === true) {
          this.students.reverse();
          this.reverseSortFlags[2] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.firstName > b.firstName ? 1 : -1) ;
        this.reverseSortFlags[2] = true;
        break;
      }
      case "midName": {
        if (this.reverseSortFlags[3] === true) {
          this.students.reverse();
          this.reverseSortFlags[3] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.midName > b.midName ? 1 : -1) ;
        this.reverseSortFlags[3] = true;
        break;
      }
      case "birthDate": {
        if (this.reverseSortFlags[4] === true) {
          this.students.reverse();
          this.reverseSortFlags[4] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.birthDate > b.birthDate ? 1 : -1) ;
        this.reverseSortFlags[4] = true;
        break;
      }
      case "averageScore": {
        if (this.reverseSortFlags[5] === true) {
          this.students.reverse();
          this.reverseSortFlags[5] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.averageScore > b.averageScore ? 1 : -1) ;
        this.reverseSortFlags[5] = true;
        break;
      }
    }
  }

  public deleteStudent(deletedStudentId: number): void {
    if (this.confirmDelete === true) {
      this.filteredStudents.splice(deletedStudentId, 1);
    }
  }

  public popupAction(): void {
    if (this.systemMessage.type === "delete") {
      this.confirmDelete = true;
      this.deleteStudent(this.deletedStudentId);
      this.popupVisibility = false;
    }
  }

  public deleteClick(i: number): void {
    this.deletedStudentId = i;
    this.popupVisibility = true;
    this.systemMessage.type = "delete";
    this.systemMessage.message = "Are you sure you want to delete record from the table?";
  }

  public onStudentClick(id: number): void {
    this.editStartFlag = true;
    this.editedStudent = this.filteredStudents[id];
  }

  public addStudentClick(): void {
    console.log(this.filteredStudents);
    this.addFlag = true;
  }
}
