import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Beneficio } from "../model/beneficio.model";


@Injectable({
  providedIn: 'root'
})
export class BeneficioService {
  
  private url: string;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  // private options = new RequestOptions({ headers: this.headers });

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8080/Beneficio";
  }

  getBeneficios() {
    return this.httpClient.get(this.url, this.httpOptions);
  }

  // upload(beneficio: Beneficio): Observable<any> {
  //   return this.http.post(this.url, beneficio, this.options);
  // }
}
