import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/Header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Pages/Footer/footer/footer.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { RightNavContainerComponent } from './Pages/right-nav-container/right-nav-container.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RightNavContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
