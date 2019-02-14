import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {FormsModule} from '@angular/forms';
import {CreatedUserComponent} from './created-user/created-user.component';
import {CreatedAdminComponent} from './created-admin/created-admin.component';
import {DeletedUserComponent} from './deleted-user/deleted-user.component';
import {SigninComponent} from './user-page-admin/signin/signin.component';
import {GetAllUsersComponent} from './user-page-admin/get-all-users/get-all-users.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {SuperAllUsersComponent} from './super-all-users/super-all-users.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {UpdatedUserComponentComponent} from './updated-user-component/updated-user-component.component';
import {GlobalSearchComponent} from '../../main-menu/global-search/global-search.component';
import {SearchUserComponent} from './user-page-admin/search-user/search-user.component';
import {SearchUserByLoginComponent} from './search-user-by-login/search-user-by-login.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {CreateAdmiComponent} from './create-admi/create-admi.component';
import {UserInfoComponent} from './user-page-admin/user-info/user-info.component';

@NgModule({
  declarations: [
    UserPageAdminComponent,
    CreatedUserComponent,
    CreatedAdminComponent,
    DeletedUserComponent,
    SigninComponent,
    GetAllUsersComponent,
    AllUsersComponent,
    SuperAllUsersComponent,
    UpdateUserComponent,
    UpdatedUserComponentComponent,
    SearchUserComponent,
    SearchUserByLoginComponent,
    CreateUserComponent,
    CreateAdmiComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UserModule {
}
