import {RouterModule, Routes} from '@angular/router';
import {UserPageAdminComponent} from '../users/user-page-admin/user-page-admin.component';
import {CreatedUserComponent} from '../users/created-user/created-user.component';
import {CreatedAdminComponent} from '../users/created-admin/created-admin.component';
import {DeletedUserComponent} from '../users/deleted-user/deleted-user.component';
import {NgModule} from '@angular/core';
import {StatsComponent} from './stats.component';
import {StatsOrdersComponent} from './stats-orders/stats-orders.component';
import {StatsUsersComponent} from './stats-users/stats-users.component';
import {UserGetStatsComponent} from './user-get-stats/user-get-stats.component';
import {FurtherInfoComponent} from './further-info/further-info.component';

const routes: Routes = [
  {path: '', component: StatsComponent},
  {path: 'orders', component: StatsOrdersComponent},
  {path: 'users', component: StatsUsersComponent},
  {path: 'usersStats', component: UserGetStatsComponent},
  {path: 'getFurther', component: FurtherInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule{
}
