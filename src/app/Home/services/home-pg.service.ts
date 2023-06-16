import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredoInterface } from '../models/item.model';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomePgService {

  

  constructor(private _http: HttpClient) { }
  
  getMain(): Observable<CredoInterface >{
    return this._http.get<CredoInterface>(`assets/main.json`)
  }; 
/*
  getNew(): Observable<CredoInterface>{
    return this._http.get<CredoInterface[]>(`assets/main.json`).pipe(
      map((res: any ) =>{
        console.log('this is map operator',res['help']);
        return res['help'];
      })
    )
  } */
}
