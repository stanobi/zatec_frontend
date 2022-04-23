import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpModule } from 'src/shared/http.module';
import { DataService } from 'src/shared/service/data.service';
import { environment } from '../../../environments/environment';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule.forRoot({ environment }), HttpClientTestingModule ], 
      providers: [ DataService ]
    });
    service = TestBed.inject(JokeService);
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
