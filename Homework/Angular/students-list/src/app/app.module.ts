import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StudentFormComponent } from "./table/student-form/student-form.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
