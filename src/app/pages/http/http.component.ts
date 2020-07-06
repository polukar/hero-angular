import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.styl']
})
export class HttpComponent implements OnInit {

  data:Array<any>

  constructor(private HttpJson: HttpService) {
    this.data = new Array<any>()
  }

  /**
   *  getter Data json file heroes
   * */

  httpEvent(){
    this.HttpJson.getData().subscribe((data) =>{
      this.data = data;
    });
  }


  ngOnInit(): void {
  }

}
