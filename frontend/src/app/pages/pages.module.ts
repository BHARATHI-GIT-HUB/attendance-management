import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { PagesRoutingModule } from './pages.routing.module';
import { SidebarComponent } from '../components/sider/sider.component';
import { AttendanceFromComponent } from '../components/attendance-from/attendance-from.component';
@NgModule({
    declarations: [BaseLayoutComponent,],
    imports: [
      CommonModule,
      PagesRoutingModule,
      RouterModule,
    ],
  })
  export class PagesModule {}