import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalTableService, Student } from "./local.table.service";

@Injectable({providedIn: "root"})

export class ServerTableService {

    dataStudents: Student[] = [];

    constructor(private http: HttpClient, private localTableService: LocalTableService) { }

    public getStudents(): void {
        this.http.get("http://localhost:3000/students").subscribe((response: any) => {
            this.jsonHelper(response);
        });
    }

    private jsonHelper(response: any): void {
        this.dataStudents = [];
        for (const studentData of response) {
            const student: Student = {
                id: studentData.id,
                lastName: studentData.lastName,
                firstName: studentData.firstName,
                midName: studentData.midName,
                birthDate: new Date(studentData.birthDate),
                averageScore: Number(studentData.averageScore)
            };
            this.dataStudents.push(student);
        }
    }

    public loadStudents(): Student[] {
        this.getStudents();
        return this.dataStudents;
    }
}

