import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import {FormsModule} from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MainMenuRoutingModule} from './main-menu/main-menu-routing.module';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import { AllOrdersComponent } from './core/order/all-orders/all-orders.component';
import {MenuComponent} from './main-menu/menu/menu.component';
import {ProfileComponent} from './main-menu/profile/profile.component';
import {GlobalSearchComponent} from './main-menu/global-search/global-search.component';
import { CreateAComponent } from './core/about/create-a/create-a.component';
import { UpdateComponent } from './core/about/update/update.component';
import { AboutItselfComponent } from './core/about/about-itself/about-itself.component';
import { EachCommentComponent } from './core/products/view-product/each-comment/each-comment.component';
import { AddCommentsComponent } from './core/products/view-product/add-comments/add-comments.component';
import { EachProductInViewComponent } from './core/products/view-product/each-product-in-view/each-product-in-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AllOrdersComponent,
    MenuComponent,
    ProfileComponent,
    GlobalSearchComponent,
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
