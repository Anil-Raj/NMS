import { Component, OnInit , Input} from '@angular/core';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-side-bar-item',
  templateUrl: './nav-side-bar-item.component.html',
  styleUrls: ['./nav-side-bar-item.component.css']
})
export class NavSideBarItemComponent implements OnInit {

  @Input() data;
  // url=this.location.path().split("/").pop();
  constructor(private location:Location) { }
  
  ngOnInit() {
    
  }

}
