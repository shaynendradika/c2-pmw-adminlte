import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionDetailsComponent } from './division-details/division-details.component';
import { DivisionComponent } from './division/division.component';
import { DivisionsAddComponent } from './divisions-add/divisions-add.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"divisi/:id", component: DivisionDetailsComponent },
  {path:"divisi-tambah",component:DivisionsAddComponent},
  {path:"laporan",component:ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
