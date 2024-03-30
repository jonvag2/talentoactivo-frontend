import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RecentWorkComponent,
    WhoWeAreComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecentWorkComponent,
    BannerComponent,
    WhoWeAreComponent,

  ]
})
export class SharedModule { }
