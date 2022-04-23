import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpModule } from 'src/shared/http.module';
import { DataService } from 'src/shared/service/data.service';
import { environment } from '../../../environments/environment';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule.forRoot({ environment }), HttpClientTestingModule ], 
      providers: [ DataService ]
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
