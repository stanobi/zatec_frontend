import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DataResponse } from 'src/shared/model/data-response';
import { Joke } from '../joke/model/joke';
import { People } from '../people/model/people';
import { Search } from './model/search';
import { SearchService } from './service/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnDestroy, OnInit {

  people : People[] = [];
  jokes : Joke[] = [];
  person : People = new People("", "", "", "", "", "", "", "", "", [], [], [], [], "", "", "");
  isLoading : boolean = false;
  isExceptionThrown : boolean = false;
  errorMessage : string;

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  dtTrigger: Subject<any>[] = [new Subject<any>(), new Subject<any>()];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.dtOptions[0] = {
      autoWidth: false,
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], 
      pagingType: "simple"
    }

    this.dtOptions[1] = {
      autoWidth: false,
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], 
      pagingType: "simple"
    }

  }

  search(query: string) : void {
    this.isLoading = true;
    this.searchService.search(query).subscribe({
      next: (response : DataResponse<Search>) => {

        this.people = response.data.people;
        this.jokes = response.data.jokes;

        this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
          dtElement.dtInstance.then((dtInstance: any) => {
            console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
            dtInstance.destroy();
            this.dtTrigger[index].next(this.dtOptions[index]);
          });
        });

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

  ngAfterViewInit(): void {
    this.dtTrigger[0].next(this.dtOptions[0]);
    this.dtTrigger[1].next(this.dtOptions[1]);
  }

  ngOnDestroy(): void {
    this.dtTrigger[0].unsubscribe();
    this.dtTrigger[1].unsubscribe();
  }
}
