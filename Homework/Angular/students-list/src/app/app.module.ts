import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routing";
import { ClickableButtonDirective } from "./clickable-button.directive";
import { HighlightStudentDirective } from "./highlight-student.directive";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudentFormModule } from "./student-form/student-form.module";
import { StudentService } from "./student.service";
import { AveragePipePipe } from "./table/average-pipe.pipe";
import { LocalTableService } from "./table/local.table.service";
import { ScholarshipPipePipe } from "./table/scholarship-pipe.pipe";
import { ServerTableService } from "./table/server.table.service";
import { TableComponent } from "./table/table.component";
import { TableGuard } from "./table/table.guard";
import { GET_STUDENTS_DATA, TABLE_PROVIDERS } from "./table/table.providers";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HighlightStudentDirective,
    ClickableButtonDirective,
    AveragePipePipe,
    ScholarshipPipePipe,
    PageNotFoundComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StudentFormModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [LocalTableService, ServerTableService, TableGuard,
    /*
    {
      provide: StudentService,
      deps: [LocalTableService, ServerTableService, ActivatedRoute, HttpClient],
      useFactory: (activatedRoute: ActivatedRoute, http: HttpClient) => {
        if (activatedRoute.snapshot.params["param"] === "localStore") {
          return new LocalTableService();
        }
        if (activatedRoute.snapshot.params["param"] === "serverStore") {
          return new ServerTableService(http, new LocalTableService);
        }
        return null;
      }
    },
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
