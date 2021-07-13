import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { Student } from "./student.model";
import { StudentsState, StudentsStore } from "./students.store";

@Injectable({
  providedIn: "root"
})
export class StudentsQuery extends QueryEntity<StudentsState, Student> {

  constructor(protected store: StudentsStore) {
    super(store);
  }
}
