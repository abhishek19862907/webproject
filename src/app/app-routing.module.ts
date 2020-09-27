import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { CodeforinterviewComponent } from './codeforinterview/codeforinterview.component';
import { RegistersComponent } from './registers/registers.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"", redirectTo:"codeforinterview" , pathMatch:"full"
  },
   {
    path:"all-users", component:AllUsersComponent
  },
  {
    path:"search", component:SearchComponent
  },
  {
    path:"registers", component:RegistersComponent
  },
  {
    path:"codeforinterview" , component:CodeforinterviewComponent
  },
  {
    path:"**", component:CodeforinterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
