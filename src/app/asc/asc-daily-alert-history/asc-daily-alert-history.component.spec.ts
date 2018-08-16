import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscDailyAlertHistoryComponent } from './asc-daily-alert-history.component';

describe('AscDailyAlertHistoryComponent', () => {
  let component: AscDailyAlertHistoryComponent;
  let fixture: ComponentFixture<AscDailyAlertHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscDailyAlertHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscDailyAlertHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
