import { Component, OnInit } from '@angular/core';
import { DivisionService } from 'src/app/services/division.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Division } from '../model/division.model';

@Component({
  selector: 'app-division-details',
  templateUrl: './division-details.component.html',
  styleUrls: ['./division-details.component.css']
})
export class DivisionDetailsComponent implements OnInit {
  currentDivision = null;
  message = '';
  division: Division = {
    name: '',
    description: '',
  };

  constructor(private divisionService: DivisionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  updateDivision(): void {
    const data = {
      name: this.division.name,
      description: this.division.description
    };

    this.divisionService.update(this.route.snapshot.paramMap.get('id'), data)
    .subscribe(
      response => {
          console.log(response);
          this.message = 'The division was updated!';
          this.router.navigate(['/divisi'])
          .then(() => {
            window.location.reload();
          });
        },
        error => {
          console.log(error);
        });
  }
}
