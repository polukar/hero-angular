import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompComponent } from "./pages/comp/comp.component";
import { FormComponent } from "./pages/form/form.component";
import { HttpComponent } from "./pages/http/http.component";
import { DiComponent } from "./pages/di/di.component";



const routes: Routes = [
  {path: '', redirectTo: 'comp', pathMatch: 'full' },
  {path: "comp", component: CompComponent},
  {path: "form", component: FormComponent},
  {path: "http", component: HttpComponent},
  {path: "di", component: DiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
