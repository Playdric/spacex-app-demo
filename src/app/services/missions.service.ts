import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mission } from '../Models/missions.model';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private readonly apiBaseUrl: string;
  constructor(private http: HttpClient) { 
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getMissions(): Observable<Mission[]> {
    const requestEndpoint = this.apiBaseUrl + 'missions';
    return this.http.get<Mission[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(missions => {
        return missions;
      })
    );
  }

  getOneMission(id: String): Observable<Mission>  {
    const requestEndpoint = this.apiBaseUrl + 'missions/'+id;
    return this.http.get<Mission>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(mission => {
        return mission;
      })
    );
  }

}
