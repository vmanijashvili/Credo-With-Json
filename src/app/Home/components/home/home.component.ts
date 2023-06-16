
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CredoInterface,  } from 'src/app/Home/models/item.model';
import { HomePgService } from 'src/app/Home/services/home-pg.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
 
  
})
export class HomeComponent implements OnInit, OnDestroy {
  
  images = [
    'assets/HomeImage/1.png',
    'assets/HomeImage/2.png',
    'assets/HomeImage/3.png',
    'assets/HomeImage/4.png',
    'assets/HomeImage/5.png',
    'assets/HomeImage/6.png',
    'assets/HomeImage/7.png',
    'assets/HomeImage/8.png',
  ] 
  

  public homePageData!: CredoInterface;
  private _subscription!: Subscription;

  constructor(private _homePgService: HomePgService, config: NgbCarouselConfig){
    config.interval = 4000;
    config.wrap = false;
    config.showNavigationArrows = false;
    config.wrap = true;
    config.animation = true
  }
  isMenuOpened: boolean = false;

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;}

  
  ngOnInit(): void {
      this._subscription=this._homePgService.getMain().subscribe(
        res => {
          this.homePageData=res
        }
      );

    };
    
    ngOnDestroy(): void {
      this._subscription.unsubscribe();
    }
  }
  

  




