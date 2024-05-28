import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UrlRedirectComponent } from './components/url-redirect/url-redirect.component';

@NgModule({
  declarations: [
    HeroComponent,
    AppComponent,
    CreateUrlComponent,
    UrlRedirectComponent,
    ErrorComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
