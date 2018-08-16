import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideBarItemsComponent } from './nav-side-bar-items.component';

describe('NavSideBarItemsComponent', () => {
  let component: NavSideBarItemsComponent;
  let fixture: ComponentFixture<NavSideBarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideBarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
