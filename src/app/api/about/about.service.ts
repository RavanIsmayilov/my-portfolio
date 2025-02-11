import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = `${environment.API_URL}/about`; 

  constructor(private http: HttpClient) {}

  getAbout(): Observable<{ content: string }> {
    return this.http.get<{ content: string }>(this.apiUrl);
  }
}
