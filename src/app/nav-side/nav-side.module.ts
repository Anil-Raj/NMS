import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSideBarItemsComponent } from './nav-side-bar-items/nav-side-bar-items.component';
import { NavSideBarItemComponent } from './nav-side-bar-item/nav-side-bar-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NavSideBarItemComponent ,NavSideBarItemsComponent, SideNavComponent],
  exports: [NavSideBarItemsComponent, NavSideBarItemComponent, SideNavComponent]
})
export class NavSideModule { }
