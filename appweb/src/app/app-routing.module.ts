import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';

const routes: Routes = [
  {path: 'balance-general', component: BalanceGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
