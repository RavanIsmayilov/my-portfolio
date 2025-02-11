import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root',
    })
    export class ResumeService {
    private apiUrl = `${environment.API_URL}/resume`; 

    constructor(private http: HttpClient) {}

    getResumes(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    addResume(resumeData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, resumeData);
    }
}
