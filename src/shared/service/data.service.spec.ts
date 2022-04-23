import { TestBed } from '@angular/core/testing';
import { HttpModule } from '../http.module';
import { environment } from '../../environments/environment';

import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule.forRoot({ environment }), HttpClientTestingModule ], 
      providers: [ DataService ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
