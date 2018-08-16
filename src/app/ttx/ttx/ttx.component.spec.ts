import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtxComponent } from './ttx.component';

describe('TtxComponent', () => {
  let component: TtxComponent;
  let fixture: ComponentFixture<TtxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
