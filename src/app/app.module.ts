import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './apm-components/dropdown/dropdown.component';
import { ImageComponent } from './apm-components/image/image.component';
import { HttpModule } from '@angular/http';
import { LoadingDirective } from './utils/loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ImageComponent,
    LoadingDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide: 'api', useValue: 'https://dog.ceo/api/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
