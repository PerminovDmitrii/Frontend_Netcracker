import { HttpClient } from "@angular/common/http";
import { Injectable, InjectionToken, Provider } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { LocalTableService, Student } from "./local.table.service";
import { ServerTableService } from "./server.table.service";

export const GET_STUDENTS_DATA = new InjectionToken<Provider>("GET_STUDENTS_DATA");

export const TABLE_PROVIDERS: Provider[] = [
    {
        provide: GET_STUDENTS_DATA,
        deps: [LocalTableService, ServerTableService, ActivatedRoute, HttpClient],
        useFactory: studentsFactory,
    },
];

export function studentsFactory(activatedRoute: ActivatedRoute, localTableService: LocalTableService,
     http: HttpClient): LocalTableService | ServerTableService | undefined {
    if (activatedRoute.snapshot.params["param"] === "localStore") {
        return new LocalTableService;
    }
    if (activatedRoute.snapshot.params["param"] === "serverStore") {
        return new ServerTableService(http, localTableService);
    }
    return undefined;
}
