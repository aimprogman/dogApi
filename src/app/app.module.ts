import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './apm-components/dropdown/dropdown.component';
import { ImageComponent } from './apm-components/image/image.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import appRoutes from './app.routes';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CustomReuseStrategy } from 'app/app-route-reuse.strategy';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    appRoutes

  ],
  providers: [
    { provide: 'api', useValue: 'https://dog.ceo/api/' },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
