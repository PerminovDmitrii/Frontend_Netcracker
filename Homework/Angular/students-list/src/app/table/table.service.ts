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

export class SystemMessage {
    public message: object = {
        delete: "Are you sure you want to delete record from the table?",
        notCorrectValue: "Incorrect data entered in the input field!",
        noEntry: "There are no matching records in the table."
    };
}

@Injectable({providedIn: "root"})

export class TableService {

    public jsonHelper(data: typeof StudentsData ): Student[] {
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
}
