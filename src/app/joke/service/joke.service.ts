import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/shared/service/data.service';
import { DataResponse } from 'src/shared/model/data-response';
import { Joke } from '../model/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private dataService: DataService) {
  }

  getCategories() : Observable<DataResponse<string[]>> {
      return this.dataService.get<string[]>('chuck/categories');
  }

  getRandomJoke(category: string) : Observable<DataResponse<Joke>> {
    return this.dataService.get<Joke>('chuck/random?category='+category);
  }
}
