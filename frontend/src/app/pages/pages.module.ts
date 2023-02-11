import { ComponentsModule } from "./../components/components.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PagesRoutingModule } from "./pages.routing.module";
import { NgZorroModule } from "../NgZorro.module";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';

@NgModule({
  declarations: [BaseLayoutComponent, ListAttendanceComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    ComponentsModule,
    NgZorroModule,
  ],
})
export class PagesModule {}
