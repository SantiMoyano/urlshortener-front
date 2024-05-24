import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, CreateUrlComponent, HeroComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
