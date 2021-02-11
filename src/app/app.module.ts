import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppComponentsModule } from './app-components/app-components.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
