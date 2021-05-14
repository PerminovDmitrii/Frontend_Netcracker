import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudentFormComponent } from "./student-form/student-form/student-form.component";
import { TableComponent } from "./table/table.component";
import { TableGuard } from "./table/table.guard";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

export const routes: Routes = [
    { path: "", component: WelcomePageComponent },
    { path: "students-table/:param", component: TableComponent,
        children: [
            {
                path: "create", component: StudentFormComponent,
            },
            {
                path: "edit/:param", component: StudentFormComponent,
                canActivate: [TableGuard]
            },
        ],
    },
    // { path: "students-table/edit", component: StudentFormComponent, pathMatch: "full" },
    // { path: "students-table/create", component: StudentFormComponent, pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];
