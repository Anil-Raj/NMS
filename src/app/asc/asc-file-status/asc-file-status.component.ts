import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-asc-file-status',
  templateUrl: './asc-file-status.component.html',
  styleUrls: ['./asc-file-status.component.css']
})
export class AscFileStatusComponent implements OnInit {
  list = [
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "aaaaustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:1
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "aaaaustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:1
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "CustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "File Succeeded",
      count:0
    },
    {
      job: "CustomerSync-West",
      name: "aaaaustomerSync-West-2018-08-10T08:45:57.1302874Z-08586677161304890397667293020CU05.json",
      time: "08/10/2018 08:45:57 +00:00",
      type: "Failed",
      count:1
    }

  ];
  selectOption = [
    {
      id: 1,
      label: "ALL",
      value: ""
    }, {
      id: 2,
      label: "Succeeded",
      value: "Succeeded"
    }, {
      id: 3,
      label: "File Failed",
      value: "Failed"
    }
  ]
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      filter: new FormControl(this.selectOption[0])
  });
  this.form.controls['filter'].setValue(this.selectOption[0], {onlySelf: true});
   }
  

  ngOnInit() {
  }

}
