import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {FormsModule} from '@angular/forms';
import {CreatedUserComponent} from './created-user/created-user.component';
import {CreatedAdminComponent} from './created-admin/created-admin.component';

@NgModule({
  declarations: [UserPageAdminComponent, CreatedUserComponent, CreatedAdminComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UserModule {
}
