import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-asc-daily-alert-history',
  templateUrl: './asc-daily-alert-history.component.html',
  styleUrls: ['./asc-daily-alert-history.component.css']
})
export class AscDailyAlertHistoryComponent implements OnInit {

  list = [
    {
      alert_name: "p-ecomm-InvOrdDrillData-la-frm",
      description: "RunsFailed GreaterThanOrEqual 1 ([]) in the last 5 minutes' has been resolved for workflows: asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la (asc-prd-cus-ecomm-rg)",
      resource_name: "asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la",
      time: "08/09/2018 19:25:50 ",
      level:"Informational"
    },
    {
      alert_name: "p-ecomm-InvOrdDrillData-la-frm",
      description: "RunsFailed GreaterThanOrEqual 1 ([]) in the last 5 minutes' has been resolved for workflows: asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la (asc-prd-cus-ecomm-rg)",
      resource_name: "asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la",
      time: "08/09/2018 19:25:50 ",
      level:"Informational"
    },
    {
      alert_name: "p-ecomm-InvOrdDrillData-la-frm",
      description: "RunsFailed GreaterThanOrEqual 1 ([]) in the last 5 minutes' has been resolved for workflows: asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la (asc-prd-cus-ecomm-rg)",
      resource_name: "asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la",
      time: "08/09/2018 19:25:50 ",
      level:"Informational"
    },
    {
      alert_name: "p-ecomm-InvOrdDrillData-la-frm",
      description: "RunsFailed GreaterThanOrEqual 1 ([]) in the last 5 minutes' has been resolved for workflows: asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la (asc-prd-cus-ecomm-rg)",
      resource_name: "asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la",
      time: "08/09/2018 19:25:50 ",
      level:"Informational"
    },
    {
      alert_name: "p-ecomm-InvOrdDrillData-la-frm",
      description: "RunsFailed GreaterThanOrEqual 1 ([]) in the last 5 minutes' has been resolved for workflows: asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la (asc-prd-cus-ecomm-rg)",
      resource_name: "asc-prd-cus-ecomm-invoices-getorderdrilldowndata-la",
      time: "08/09/2018 19:25:50 ",
      level:"Informational"
    },

  ];
  selectOption = [
    {
      id: 1,
      label: "ALL",
      value: ""
    }, {
      id: 2,
      label: "Informational",
      value: "Informational"
    }, {
      id: 3,
      label: "Warning",
      value: "Warning"
    }
  ]
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
