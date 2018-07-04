import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { StudentsService } from './students.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SubcomponentComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule 
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
