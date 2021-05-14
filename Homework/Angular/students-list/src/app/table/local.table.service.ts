import { Injectable } from "@angular/core";
import StudentsData from "../../assets/students-list.json";

export interface Student {
    id: number;
    lastName: string;
    firstName: string;
    midName: string;
    birthDate: Date;
    averageScore: number;
}

@Injectable({providedIn: "root"})

export class LocalTableService {

    public jsonHelper(data: typeof StudentsData): Student[] {
        const students: Student[] = [];
        for (const studentData of data) {
        const student: Student = {
            id: studentData.id,
            lastName: studentData.lastName,
            firstName: studentData.firstName,
            midName: studentData.midName,
            birthDate: new Date(studentData.birthDate),
            averageScore: Number(studentData.averageScore)
        };
        students.push(student);
        }
        return students;
    }

    public loadStudents(): Student[] {
        return this.jsonHelper(StudentsData);
    }
}
