import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  {path: 'confirmation', component: ComfirmationComponent},
  {path: 'test', component: TestComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
