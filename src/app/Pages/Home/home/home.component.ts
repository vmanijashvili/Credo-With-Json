import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CredoInterface,  } from 'src/app/Interfaces/item.model';
import { HomePgService } from 'src/app/Services/home-pg.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  mainPageData$!: Observable <CredoInterface>
  

  constructor(private _homePgService: HomePgService){}

  ngOnInit(): void {
      this.mainPageData$=this._homePgService.getMain();
        }
  }

  




