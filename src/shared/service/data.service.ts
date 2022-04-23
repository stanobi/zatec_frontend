import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from '../environment-config';
import { DataResponse } from '../model/data-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string;

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig, private http: HttpClient) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  get<T>(path: string): Observable<DataResponse<T>> {
    return this.http.get<DataResponse<T>>(`${this.apiUrl}/${path}`)
    .pipe(catchError( error  => {
      console.error(error);
      if (error.error instanceof Error) {
        throw new Error(error.message);
      }

      if (error.error.message != undefined) {
        throw new Error(error.error.message);
      }
      
      throw new Error(error.statusText);
    }));
  }


}
