import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {ViComponent} from '../../vi/vi.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'viewAll', component: ViComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
