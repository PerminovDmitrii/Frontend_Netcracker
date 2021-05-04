import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StudentFormComponent } from "./student-form/student-form.component";



@NgModule({
  declarations: [StudentFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [StudentFormComponent]
})
export class StudentFormModule { }
