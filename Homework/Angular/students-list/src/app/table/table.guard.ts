import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import StudentsData from "src/assets/students-list.json";
import { LocalTableService, Student } from "./local.table.service";

@Injectable({providedIn: "root"})

export class TableGuard implements CanActivate {

    constructor (private localTableService: LocalTableService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {

        function findStudentByID (value: Student): boolean {
            const findID: number = Number( route.params["param"] );
            if (value.id === findID) {
                return true;
            }
            return false;
        }

        const findStudent: Student | undefined = this.localTableService.jsonHelper(StudentsData).find(findStudentByID);

        if (findStudent?.averageScore === 5) {
            return false;
        }
        return true;
    }
}
