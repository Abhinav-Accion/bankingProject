import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankLoginComponent } from './bank-login/bank-login.component';

const routes: Routes = [
  {path:'',component:BankLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
