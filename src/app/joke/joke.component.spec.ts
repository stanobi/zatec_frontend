import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpModule } from 'src/shared/http.module';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JokeComponent } from './joke.component';
import { environment } from '../../environments/environment';
import { DataService } from 'src/shared/service/data.service';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeComponent ],
      imports: [ HttpModule.forRoot({ environment }), HttpClientTestingModule ], 
      providers: [ DataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    service = TestBed.inject(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
