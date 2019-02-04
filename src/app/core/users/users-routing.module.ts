import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {CreatedUserComponent} from './created-user/created-user.component';

const routes: Routes = [
  {path: '', component: UserPageAdminComponent},
  {path: 'createdUser', component: CreatedUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{
}
