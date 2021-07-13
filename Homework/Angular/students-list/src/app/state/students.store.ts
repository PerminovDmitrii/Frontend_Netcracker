import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Student } from "./student.model";

export interface StudentsState extends EntityState<Student> {
  students: Student[];
}

const initialState = {
  student: []
};

@Injectable({
  providedIn: "root"
})
@StoreConfig({ name: "students" })
export class StudentsStore extends EntityStore<StudentsState, Student> {
  constructor() {
    super(initialState);
  }
}
