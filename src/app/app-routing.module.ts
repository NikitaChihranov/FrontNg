import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

const routes: Routes = [
  {path: '',  component: IndexComponent},
  {path: 'mainmenu', component: MainMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
