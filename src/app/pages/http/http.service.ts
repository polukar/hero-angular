import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getData() :Observable<any> {

    const url = "../../assets/json/hero.json";

    return this.http.get<any>(url)
  }
}
