import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {CreatedUserComponent} from './created-user/created-user.component';
import {CreatedAdminComponent} from './created-admin/created-admin.component';
import {DeletedUserComponent} from './deleted-user/deleted-user.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {SuperAllUsersComponent} from './super-all-users/super-all-users.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {UpdatedUserComponentComponent} from './updated-user-component/updated-user-component.component';

const routes: Routes = [
  {path: '', component: UserPageAdminComponent},
  {path: 'createdUser', component: CreatedUserComponent},
  {path: 'createdAdmin', component: CreatedAdminComponent},
  {path: 'deletedUser', component: DeletedUserComponent},
  {path: 'allUsers', component: AllUsersComponent},
  {path: 'superAllUsers', component: SuperAllUsersComponent},
  {path: 'superAllUsers/update', component: UpdateUserComponent},
  {path: 'superAllUsers/updated', component: UpdatedUserComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{
}
