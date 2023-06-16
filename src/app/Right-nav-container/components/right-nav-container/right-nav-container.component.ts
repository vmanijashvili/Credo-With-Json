import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RightContainerInterface  } from 'src/app/Home/models/item.model';
import { RightNavService } from 'src/app/Right-nav-container/Services/right-nav.service';


@Component({
  selector: 'app-right-nav-container',
  templateUrl: './right-nav-container.component.html',
  styleUrls: ['./right-nav-container.component.scss']
})
export class RightNavContainerComponent implements OnInit, OnDestroy {

  public rightNavigation!: RightContainerInterface;

  private _subscription!: Subscription
  
  constructor(private  _rightNavService: RightNavService ){}


  
  ngOnInit(): void {
    this._subscription=this._rightNavService.getMain().subscribe(
      res => {
        this.rightNavigation=res
      }
    );
  }


  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
