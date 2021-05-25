import { Injectable } from "@angular/core";
import { LocalTableService } from "../table/local.table.service";
import { ServerTableService } from "../table/server.table.service";
import { Student } from "./student.model";
import { StudentsStore } from "./students.store";

@Injectable({ providedIn: "root" })
export class StudentsService {
  constructor(private studentsStore: StudentsStore, private localTableService: LocalTableService, private serverTableService: ServerTableService) {}

    add(student: Student): void {
        this.studentsStore.add(student);
    }

    delete(id: number): void {
        this.studentsStore.remove(id);
    }

    update({id, lastName, firstName, midName, birthDate, averageScore}: Student): void {
        this.studentsStore.update(id, { lastName, firstName, midName, birthDate, averageScore });
    }

    load(loadType: string): Student[] {
        let students: Student[] = [];
        if (loadType === "localStore") {
            students = this.localTableService.loadStudents();
        }
        if (loadType === "serverStore") {
            students = this.serverTableService.loadStudents();
        }
        this.studentsStore.add(students);
        return students;
    }
}
