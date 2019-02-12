import {UserPageAdminComponent} from '../users/user-page-admin/user-page-admin.component';
import {CreatedAdminComponent} from '../users/created-admin/created-admin.component';
import {CommonModule} from '@angular/common';
import {DeletedUserComponent} from '../users/deleted-user/deleted-user.component';
import {CreatedUserComponent} from '../users/created-user/created-user.component';
import {NgModule} from '@angular/core';
import {StatsRoutingModule} from './stats.routing.module';
import {SigninComponent} from '../users/user-page-admin/signin/signin.component';
import {StatsComponent} from './stats.component';
import {StatsOrdersComponent} from './stats-orders/stats-orders.component';
import {StatsUsersComponent} from './stats-users/stats-users.component';
import {UserGetStatsComponent} from './user-get-stats/user-get-stats.component';

@NgModule({
  declarations: [
    StatsComponent,
    StatsOrdersComponent,
    StatsUsersComponent,
    UserGetStatsComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule {
}
