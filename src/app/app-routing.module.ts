import { RouterModule, Routes } from '@angular/router';

import { CreateUrlComponent } from './components/create-url/create-url.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HeroComponent } from './components/hero/hero.component';
import { NgModule } from '@angular/core';
import { UrlRedirectComponent } from './components/url-redirect/url-redirect.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'shorty/:shortUrl', component: UrlRedirectComponent },
  { path: 'error', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
