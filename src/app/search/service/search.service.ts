import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/shared/model/data-response';
import { DataService } from 'src/shared/service/data.service';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  search(query: string) : Observable<DataResponse<Search>> {
      return this.dataService.get<Search>('search?query='+query);
  }
}
