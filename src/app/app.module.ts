import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponentsModule } from './app-components/app-components.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
