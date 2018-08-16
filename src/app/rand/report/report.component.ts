import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  data = "";

  ngOnInit() {
    this.route.params.subscribe(param =>{
      let id = param.id;
    switch(id){
      case '1': this.data = " Rand Report 1";break;
      case '2': this.data = " Rand Report 2";break;
      case '3': this.data = " Rand Report 3";break;
      case '4': this.data = " Cieceres Report 1";break;
      case '5': this.data = " Cieceres Report 2";break;
      case '6': this.data = " Cieceres Report 3";break;
    }
  }
  }

}
