import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateUrlComponent } from './create-url/create-url.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, CreateUrlComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
