import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { CompModule } from './pages/comp/comp.module';
import { FormComponent } from './pages/form/form.component';
import { HttpComponent } from './pages/http/http.component';
import { DiComponent } from './pages/di/di.component'
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    HttpComponent,
    DiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
