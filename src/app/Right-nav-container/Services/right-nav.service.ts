import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RightContainerInterface } from '../../Home/models/item.model';
import { RightNavInterface } from '../models/right-nav-interface';

@Injectable({
  providedIn: 'root'
})
export class RightNavService {
  
  constructor(private _http: HttpClient) { }

  getMain(): Observable <RightContainerInterface>{
    return this._http.get<RightContainerInterface>(`assets/main.json`)
  };
  

/*
  getMain(): Observable <RightContainerInterface>{
    return this._http.get<RightContainerInterface>(`assets/main.json`).pipe(
      map((res: any ) =>{
        console.log('this is map operator',res['rightContainer']);
        return res['rightContainer'];
      })
    )
  };
  */
}
