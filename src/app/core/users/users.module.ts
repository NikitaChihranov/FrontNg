import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserPageAdminComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UserModule {
}
