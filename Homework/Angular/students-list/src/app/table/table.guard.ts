import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Student } from "./local.table.service";
import { TableComponent } from "./table.component";

@Injectable({providedIn: "root"})

export class TableGuard implements CanActivate {

    constructor(private activatedRoute: ActivatedRoute, private tableComponent: TableComponent) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {

        function findStudentByID (value: Student, index: number, array: Array<object>): boolean {
            if (value.id === findID) {
                return true;
            }
            return false;
        }

        const findID = this.activatedRoute.snapshot.params["param"];
        const findStudent: Student | undefined = this.tableComponent.filteredStudents.find(findStudentByID);
        if (findStudent?.averageScore === 5) {
            return false;
        }
        return true;
    }

}
