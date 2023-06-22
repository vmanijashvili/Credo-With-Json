import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/components/home/home.component';
import { HeaderComponent } from './Header/components/header/header.component';
import { RightNavContainerComponent } from './Right-nav-container/components/right-nav-container/right-nav-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Footer/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    RightNavContainerComponent,
    HomeComponent,
    FooterComponent
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
