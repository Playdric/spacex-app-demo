import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Launch } from '../Models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLastestLaunch(): Observable<Launch> {
    const requestEndpoint = this.apiBaseUrl + 'launches/latest';
    return this.http.get<Launch>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(launch => {
        return launch;
      })
    );
  }
}
