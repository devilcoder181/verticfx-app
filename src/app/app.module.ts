import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view-frontend/header/header.component';
import { BannerComponent } from './view-frontend/banner/banner.component';
import { WelcomeComponent } from './view-frontend/welcome/welcome.component';
import { WidgetsComponent } from './view-frontend/widgets/widgets.component';
import { FooterComponent } from './view-frontend/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    WelcomeComponent,
    WidgetsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
