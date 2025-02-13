import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root',
    })
    export class ProjectsService {
    private apiUrl = `${environment.API_URL}/projects`; 

    constructor(private http: HttpClient) {}

    getProjects(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    addProjects(projectsData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, projectsData);
    }
}
