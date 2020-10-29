import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  // defines the components/directive/pipes that belong to this module
  // every one component, directive, and pipe must belong to one, and only one, angular module.
  // only delcare components, directives, and pipes and never re-declare them if they belong to another module.
  // all of these are private by default.
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  // allows us to import supporting modules so we can use their exported components, directives, and pipes.
  // only import modules who's abilities this module needs
  // importing a module does NOT give you access to that module's imported modules. 
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule
  ],
  // defines the component which is the starting point of the application
  // every application must bootstrap at least one component, the root application module
  // the bootstrap array should only be used in the root application module, AppModule
  bootstrap: [AppComponent] 
})
export class AppModule { }
