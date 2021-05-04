import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ClickableButtonDirective } from "./clickable-button.directive";
import { HighlightStudentDirective } from "./highlight-student.directive";
import { StudentFormModule } from "./student-form/student-form.module";
import { TableComponent } from "./table/table.component";
import { AveragePipePipe } from './table/average-pipe.pipe';
import { ScholarshipPipePipe } from './table/scholarship-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HighlightStudentDirective,
    ClickableButtonDirective,
    AveragePipePipe,
    ScholarshipPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StudentFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
