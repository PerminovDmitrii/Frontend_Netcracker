import { Component, Input, OnInit } from "@angular/core";
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
  public filterBy: string = "";
  public filterString: string = "";
  public filteredStudents: Student[] = [];
  public filterDate: string = "";
  public filterMonth: string = "";
  public filterYear: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public sortedStudents: Student[] = this.filteredStudents;
  private reverseSortFlags: boolean[] = [];

  constructor() { }

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
    for (const student of this.students) {
      if (Number(this.filterString) === student.averageScore) {
        this.filteredStudents.push(student);
      }
    }
  }

  private filterByDate(): void {
    const filterYear = Number(this.filterYear);
    const filterMonth = Number(this.filterMonth);
    const filterDate = Number(this.filterDate);

    for (const student of this.students) {
      if (filterYear !== 0 && filterMonth !== 0 && filterDate !== 0) {
        if (filterYear !== student.birthDate.getFullYear() || filterMonth !== student.birthDate.getMonth() + 1
        || filterDate !== student.birthDate.getDate()) {
          continue;
        }
        console.log(student);
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
    if (this.filterBy === "birthDate") {
      this.filterByDate();
    }
    if (this.filterBy === "averageScore") {
      this.filterByAverage();
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
        if (this.reverseSortFlags[0] === true) {
          this.students.reverse();
          this.reverseSortFlags[0] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.lastName > b.lastName ? 1 : -1 );
        this.reverseSortFlags[0] = true;
        break;
      }
      case "firstName": {
        if (this.reverseSortFlags[1] === true) {
          this.students.reverse();
          this.reverseSortFlags[1] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.firstName > b.firstName ? 1 : -1) ;
        this.reverseSortFlags[1] = true;
        break;
      }
      case "midName": {
        if (this.reverseSortFlags[2] === true) {
          this.students.reverse();
          this.reverseSortFlags[2] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.midName > b.midName ? 1 : -1) ;
        this.reverseSortFlags[2] = true;
        break;
      }
      case "birthDate": {
        if (this.reverseSortFlags[3] === true) {
          this.students.reverse();
          this.reverseSortFlags[3] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.birthDate > b.birthDate ? 1 : -1) ;
        this.reverseSortFlags[3] = true;
        break;
      }
      case "averageScore": {
        if (this.reverseSortFlags[4] === true) {
          this.students.reverse();
          this.reverseSortFlags[4] = false;
          break;
        }
        this.filteredStudents.sort( (a: Student, b: Student): number => a.averageScore > b.averageScore ? 1 : -1) ;
        this.reverseSortFlags[4] = true;
        break;
      }
    }
  }
}
