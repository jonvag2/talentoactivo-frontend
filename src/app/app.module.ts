import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* import { OursevicesComponent } from './modules/oursevices/oursevices.component'; estos los administra el modulo home
import { OursevicessComponent } from './modules/oursevicess/oursevicess.component'; */

@NgModule({
  declarations: [
    AppComponent,
/*     OursevicesComponent, estos los administra el modulo home
    OursevicessComponent */
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
