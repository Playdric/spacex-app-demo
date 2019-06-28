import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { History } from '../Models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly apiBaseUrl: string;
  constructor(private http: HttpClient) { 
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getHistory(): Observable<History[]> {
    const requestEndpoint = this.apiBaseUrl + 'history';
    return this.http.get<History[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(history => {
        return history;
      })
    );
  }
}
