import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RightContainerInterface  } from 'src/app/Interfaces/item.model';
import { RightNavService } from 'src/app/Services/right-nav.service';
import { RightNavInterface } from 'src/app/Interfaces/right-nav-interface';

@Component({
  selector: 'app-right-nav-container',
  templateUrl: './right-nav-container.component.html',
  styleUrls: ['./right-nav-container.component.scss']
})
export class RightNavContainerComponent implements OnInit {
  rightNavigation$!: Observable <RightContainerInterface>
  
  constructor(private  _rightNavService: RightNavService ){}

  ngOnInit(): void {
    this.rightNavigation$=this._rightNavService.getMain();
  }
 
}
