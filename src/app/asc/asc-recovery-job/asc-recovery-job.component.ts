import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asc-recovery-job',
  templateUrl: './asc-recovery-job.component.html',
  styleUrls: ['./asc-recovery-job.component.css']
})
export class AscRecoveryJobComponent implements OnInit {




  selectOption = [
    {
      id: 1,
      label: "ALL",
      value: ""
    }, {
      id: 2,
      label: "InProgress",
      value: "InProgress"
    }, {
      id: 3,
      label: "Completed",
      value: "Completed"
    }, {
      id: 4,
      label: "Failed",
      value: "Failed"
    }, {
      id: 5,
      label: "CompletedWithWarnings",
      value: "CompletedWithWarnings"
    }
  ];
  list = [
    {
      subscription: "User - Pay-As-You-Go",
      date: "8/10/2018 8:16:16 AM",
      recoveryVaultName: "asc-usr-cus-asr-vlt",
      vmName: "xaer9lub-fs2",
      duration:"03:20:24.9763650",
      status:"CompletedWithWarnings"
    },
    {
      subscription: "User - Pay-As-You-Go",
      date: "8/10/2018 8:16:16 AM",
      recoveryVaultName: "asc-usr-cus-asr-vlt",
      vmName: "xaer9lub-fs2",
      duration:"03:20:24.9763650",
      status:"CompletedWithWarnings"
    },
    {
      subscription: "User - Pay-As-You-Go",
      date: "8/10/2018 8:16:16 AM",
      recoveryVaultName: "asc-usr-cus-asr-vlt",
      vmName: "xaer9lub-fs2",
      duration:"03:20:24.9763650",
      status:"CompletedWithWarnings"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
