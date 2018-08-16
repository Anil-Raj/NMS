import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscRecoveryJobComponent } from './asc-recovery-job.component';

describe('AscRecoveryJobComponent', () => {
  let component: AscRecoveryJobComponent;
  let fixture: ComponentFixture<AscRecoveryJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscRecoveryJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscRecoveryJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
