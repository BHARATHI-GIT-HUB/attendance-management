import { TimeTableComponent } from "./time-table/time-table.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ChartComponent } from "../components/chart/chart.component";

import { BaseLayoutComponent } from "./base-layout/base-layout.component";
import { DayAttendanceComponent } from "./day-attendance/day-attendance.component";
import { HourlyAttendanceComponent } from "./hourly-attendance/hourly-attendance.component";
import { SectionsComponent } from "./sections/sections.component";
import { StudentsComponent } from "./students/students.component";
import { SubjectSectionHoursComponent } from "./subject-section-hours/subject-section-hours.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AuthGuard } from "../helpers/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "day-attendance",
        component: DayAttendanceComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "hourly-attendance",
        component: HourlyAttendanceComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: "dashboard",
      //   component: ChartComponent,
      // },
      {
        path: "sections",
        component: SectionsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "subjects",
        component: SubjectsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "students",
        component: StudentsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "total-hours",
        component: SubjectSectionHoursComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "time-tables",
        component: TimeTableComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
