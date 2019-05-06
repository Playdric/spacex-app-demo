import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Landpad } from '../Models/landpad.model';

@Injectable({
  providedIn: 'root'
})
export class LandpadService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLandpads(): Observable<Landpad[]> {
    const requestEndpoint = this.apiBaseUrl + 'landpads';
    return this.http.get<Landpad[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(landpads => {
        return landpads;
      })
    );
  }
}
