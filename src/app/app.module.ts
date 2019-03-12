import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MainMenuRoutingModule} from './main-menu/main-menu-routing.module';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import { AllOrdersComponent } from './core/order/all-orders/all-orders.component';
import {MenuComponent} from './main-menu/menu/menu.component';
import {ProfileComponent} from './main-menu/profile/profile.component';
import {GlobalSearchComponent} from './main-menu/global-search/global-search.component';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './i18n', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AllOrdersComponent,
    MenuComponent,
    ProfileComponent,
    GlobalSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainMenuRoutingModule,
    TranslateModule.forRoot
      ({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      })
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
