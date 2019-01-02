import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';

const routes: Routes = [
  {path: '', component: UserPageAdminComponent},
  {path: 'admin', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{
}
