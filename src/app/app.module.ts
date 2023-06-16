import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/Header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Pages/Footer/footer/footer.component';
import { HomeComponent } from './Home/components/home/home.component';
import { RightNavContainerComponent } from './Right-nav-container/components/right-nav-container/right-nav-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightNavContainerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
