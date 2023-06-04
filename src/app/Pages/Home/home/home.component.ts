
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CredoInterface,  } from 'src/app/Interfaces/item.model';
import { HomePgService } from 'src/app/Services/home-pg.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
 
  
})
export class HomeComponent implements OnInit {
  
  images = [
    'assets/HomeImage/1.png',
    'assets/HomeImage/2.png',
    'assets/HomeImage/3.png',
    'assets/HomeImage/4.png',
    'assets/HomeImage/5.png'
  ];
  

  mainPageData$!: Observable <CredoInterface>
  

  constructor(private _homePgService: HomePgService, config: NgbCarouselConfig){
    config.interval = 5000;
    
  }

  ngOnInit(): void {
      this.mainPageData$=this._homePgService.getMain();

    };
    
  
  }
  

  




