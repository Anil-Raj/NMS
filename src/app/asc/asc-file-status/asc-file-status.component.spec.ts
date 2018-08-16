import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscFileStatusComponent } from './asc-file-status.component';

describe('AscFileStatusComponent', () => {
  let component: AscFileStatusComponent;
  let fixture: ComponentFixture<AscFileStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscFileStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscFileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
