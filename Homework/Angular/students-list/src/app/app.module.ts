import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { routes } from "./app.routing";
import { ClickableButtonDirective } from "./clickable-button.directive";
import { HighlightStudentDirective } from "./highlight-student.directive";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StudentsService } from "./state/students.service";
import { StudentFormModule } from "./student-form/student-form.module";
import { AveragePipePipe } from "./table/average-pipe.pipe";
import { LocalTableService } from "./table/local.table.service";
import { ScholarshipPipePipe } from "./table/scholarship-pipe.pipe";
import { ServerTableService } from "./table/server.table.service";
import { TableComponent } from "./table/table.component";
import { TableGuard } from "./table/table.guard";
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
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [LocalTableService, ServerTableService, TableGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
