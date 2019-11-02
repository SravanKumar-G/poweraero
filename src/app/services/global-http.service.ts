import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpService {

  apiUrl: string = 'http://localhost:4200';

  constructor(private http: HttpClient) {
    
   }

  /* getJson() {
      return this.http.get("../json_data/items.json");
  } */

  /* obGet(relativeUrl: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${relativeUrl}`)
      .pipe(tap(this.extractData.bind(this)),
      catchError(this.obHandleError.bind(this)));
  }

  obPost(relativeUrl: string, params: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${relativeUrl}`, params)
      .pipe(tap(this.extractData.bind(this)),
      catchError(this.obHandleError.bind(this)));
  }

  private extractData(res: any) {
    return res || {};
  }

  private obHandleError(error: HttpErrorResponse | any) {
    console.log(error);
    return throwError('We are unable process your request at this time. please try again later.');
  } */

}
