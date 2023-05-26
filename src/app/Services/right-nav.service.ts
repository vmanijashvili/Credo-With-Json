import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RightContainerInterface } from '../Interfaces/item.model';
import { RightNavInterface } from '../Interfaces/right-nav-interface';

@Injectable({
  providedIn: 'root'
})
export class RightNavService {
  
  constructor(private _http: HttpClient) { }

  getMain(): Observable <RightContainerInterface>{
    return this._http.get<RightContainerInterface>(`assets/main.json`)
  };
}
