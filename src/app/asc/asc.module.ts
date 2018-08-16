import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AscFileStatusComponent } from './asc-file-status/asc-file-status.component';
import { AscRecoveryJobComponent } from './asc-recovery-job/asc-recovery-job.component';
import { AscDailyAlertHistoryComponent } from './asc-daily-alert-history/asc-daily-alert-history.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AscComponent } from './asc/asc.component';


const routes: Routes = [

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AscModule { }
