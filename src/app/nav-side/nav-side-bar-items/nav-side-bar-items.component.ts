import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-side-bar-items',
  templateUrl: './nav-side-bar-items.component.html',
  styleUrls: ['./nav-side-bar-items.component.css']
})
export class NavSideBarItemsComponent implements OnInit {
  home = {
    name: "HOME",
    url: '',
  }
  links = [
    {
      name: "Animal Supply Company",
      url: 'asc',
      children: [
        { name: "ASC File Status", url: "asc/file" },
        { name: "ASC Recovery Job", url: "asc/recovery" },
        { name: "ASC Daily History", url: "asc/history" }
      ]
    },
    {
      name: "TTX",
      url: 'ttx',
      children: [
        { name: "TTX File Status", url: "ttx/file" },
        { name: "TTX Recovery Job", url: "ttx/recovery" },
        { name: "TTX Daily History", url: "ttx/history" }
      ]
    },
    {
      name: "Rand Financials",
      url: 'rand',
      children: [
        { name: "Rand File Status", url: "rand/report/1" },
        { name: "Rand Recovery Job", url: "rand/report/2" },
        { name: "Rand Daily History", url: "rand/report/3" }
      ]
    },
    {
      name: "Cieceres",
      url: 'cieceres',
      children: [
        { name: "Cieceres File Status", url: "cieceres/report/4" },
        { name: "Cieceres Recovery Job", url: "cieceres/report/5" },
        { name: "Cieceres Daily History", url: "cieceres/report/6" }
      ]
    }
  ]
  currentLinks = [];
  constructor(private router: Router) {
    this.currentLinks = this.links;
  }

  ngOnInit() {
  }
  navigate(link) {
    if (link.url == '') {
      this.currentLinks = this.links;
    }
    if (link.children) {
      this.router.navigate([link.url]);
      this.currentLinks = link.children;
    } else {
      this.router.navigate([link.url]);

    }

  }

}
