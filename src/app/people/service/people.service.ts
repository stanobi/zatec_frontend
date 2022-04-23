import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/shared/model/data-response';
import { DataService } from 'src/shared/service/data.service';
import { People } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private dataService: DataService) {}

  getPeople() : Observable<DataResponse<People[]>> {
    return this.dataService.get<People[]>('swapi/people');
  }
}
