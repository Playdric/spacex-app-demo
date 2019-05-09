import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { About } from '../Models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getAbout(): Observable<About> {
    const requestEndpoint = this.apiBaseUrl + 'info';
    return this.http.get<About>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(about => {
        return about;
      })
    );
  }
}
