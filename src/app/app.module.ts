import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index/index.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MainMenuRoutingModule} from './main-menu/main-menu-routing.module';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import { CreatedUserComponent } from './core/users/created-user/created-user.component';
import { CreatedAdminComponent } from './core/users/created-admin/created-admin.component';
import { DeletedUserComponent } from './core/users/deleted-user/deleted-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainMenuRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
