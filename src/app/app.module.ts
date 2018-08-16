import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavSideModule } from './nav-side/nav-side.module';
import { AscFileStatusComponent } from './asc/asc-file-status/asc-file-status.component';
import { AscDailyAlertHistoryComponent } from './asc/asc-daily-alert-history/asc-daily-alert-history.component';
import { AscRecoveryJobComponent } from './asc/asc-recovery-job/asc-recovery-job.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AscModule } from './asc/asc.module';
import { AscComponent } from './asc/asc/asc.component';
import { TtxComponent } from './ttx/ttx/ttx.component';
import { RandComponent } from './rand/rand/rand.component';
import { ReportComponent } from './rand/report/report.component';

export const appRoutes: Routes = [
  { path: '*', component: AppComponent },
  {
    path: 'asc',
    component: AscComponent,
    children: [
      { path: 'file', component: AscFileStatusComponent },
      { path: 'recovery', component: AscRecoveryJobComponent },
      { path: 'history', component: AscDailyAlertHistoryComponent }

    ]
  },
  {
    path: 'ttx',
    component: TtxComponent,
    children: [
      { path: 'file', component: AscFileStatusComponent },
      { path: 'recovery', component: AscRecoveryJobComponent },
      { path: 'history', component: AscDailyAlertHistoryComponent }

    ]
  },
  {
    path: 'rand',
    children: [
      {path:'report/:id', component:ReportComponent}
    ]
  },
  {
    path: 'cieceres',
    children: [
      {path:'report/:id', component:ReportComponent}
     
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AscFileStatusComponent,
    AscDailyAlertHistoryComponent,
    AscRecoveryJobComponent,
    AscComponent,
    TtxComponent,
    FilterPipe,
    RandComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavSideModule,
    BrowserModule,
    RouterModule,
    // AscModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

