import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {ViComponent} from '../../vi/vi.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {CreatedComponent} from './created/created.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'viewAll', component: ViComponent},
  {path: 'createCategory', component: CreateCategoryComponent},
  {path: 'created', component: CreatedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
