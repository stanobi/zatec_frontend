import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataResponse } from 'src/shared/model/data-response';
import { People } from './model/people';
import { PeopleService } from './service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnDestroy, OnInit {

  people : People[] = [];
  person : People = new People("", "", "", "", "", "", "", "", "", [], [], [], [], "", "", "");

  isLoading : boolean = false;
  isExceptionThrown : boolean = false;
  errorMessage : string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.dtOptions = {
      autoWidth: false,
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], 
      pagingType: "simple"
    }

    this.isLoading = true;
    this.peopleService.getPeople().subscribe({
      next: (response : DataResponse<People[]>) => {
      this.people = response.data;
      this.dtTrigger.next(this.dtOptions);
      this.isLoading = false;
    }, 
    error: (e) => {
      this.isExceptionThrown = true;
      this.errorMessage = e;
      this.isLoading = false;
    }
  });

  }

  getPerson(person: People) {
    this.person = person;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
