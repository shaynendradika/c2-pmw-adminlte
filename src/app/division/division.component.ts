import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';

  constructor(private divisionService:DivisionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveDivision()
  }

  retrieveDivision():void{
    this.divisionService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )
  }

  deleteDivision(division_id:any): void {
    this.divisionService.delete(division_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
        });
  }

  detailsDivision(division_id:any): void {
    this.router.navigate(['/divisi/' + division_id]);
  }
}