import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';

const routes: Routes = [
  {path: '', component: UserPageAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{
}
