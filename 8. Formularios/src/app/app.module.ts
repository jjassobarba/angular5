import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
