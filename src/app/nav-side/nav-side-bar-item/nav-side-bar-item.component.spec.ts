import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideBarItemComponent } from './nav-side-bar-item.component';

describe('NavSideBarItemComponent', () => {
  let component: NavSideBarItemComponent;
  let fixture: ComponentFixture<NavSideBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
