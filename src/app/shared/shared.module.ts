import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RecentWorkComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecentWorkComponent,
    BannerComponent,
  ]
})
export class SharedModule { }
