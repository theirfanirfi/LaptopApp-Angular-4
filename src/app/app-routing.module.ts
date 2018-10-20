import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfyLaptopComponent } from './infy-laptop/infy-laptop.component';
import { ApplylaptopComponent } from './applylaptop/applylaptop.component';

//add the path specifying object
export const routes: Routes = [
  {
    path: "apply",
    component: ApplylaptopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
