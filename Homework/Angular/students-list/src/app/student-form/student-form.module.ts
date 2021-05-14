import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TableGuard } from "../table/table.guard";
import { StudentFormComponent } from "./student-form/student-form.component";



@NgModule({
  declarations: [StudentFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TableGuard],
  exports: [StudentFormComponent]
})
export class StudentFormModule { }
