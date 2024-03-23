import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* import { OursevicesComponent } from './modules/oursevices/oursevices.component';
import { OursevicessComponent } from './modules/oursevicess/oursevicess.component'; */

@NgModule({
  declarations: [
    AppComponent,
/*     OursevicesComponent,
    OursevicessComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
