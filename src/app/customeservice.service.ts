import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { data } from './interface/user';

@Injectable({ providedIn: 'root' })
export class CustomeserviceService {
  constructor(private http: HttpClient) {}

  getAPIData(): Observable<data> {
    return this.http.get<data>('https://gorest.co.in/public/v1/users').pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
