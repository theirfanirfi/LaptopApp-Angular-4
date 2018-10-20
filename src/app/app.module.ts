import { InfyLaptopService } from './infy-laptop/infy-laptop.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//import { AppRoutingModule, routes } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InfyLaptopComponent } from './infy-laptop/infy-laptop.component';
import { HttpModule } from "@angular/http";
import { SuccessMessagePipe } from "./infy-laptop/success-message.pipe";
import { ApplylaptopComponent } from './applylaptop/applylaptop.component';

const appRoutes: Routes = [
 {
   path: 'apply',
   component: InfyLaptopComponent
 },
 {
   path: '',
   component: ApplylaptopComponent
 }
];
@NgModule({
  declarations: [
    AppComponent,
    InfyLaptopComponent,
    SuccessMessagePipe,
    ApplylaptopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [InfyLaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
