import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AboutRoutingModule} from './about.routing.module';
import {CreateAboutComponent} from './create-about/create-about.component';
import {RouterModule} from '@angular/router';
import {UpdateAboutComponent} from './update-about/update-about.component';
import {AboutItselfComponent} from './about-itself/about-itself.component';
import {CreateAComponent} from './create-a/create-a.component';
import {UpdateComponent} from './update/update.component';

@NgModule({
  declarations: [
    AboutComponent,
    CreateAboutComponent,
    UpdateAboutComponent,
    AboutItselfComponent,
    CreateAComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    AboutRoutingModule,
    RouterModule
  ]
})
export class AboutModule { }
