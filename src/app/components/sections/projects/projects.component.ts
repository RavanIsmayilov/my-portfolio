import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from '../../layout/projects-modal/projects-modal.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule, ProjectModalComponent],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any = null;
  imageFormats = ['png', 'jpg', 'jpeg']; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.http.get<any[]>(`${environment.API_URL}/projects`).subscribe(
      (data) => {
        this.projects = data.map(project => ({
          ...project,
          image: this.getImagePath(project.title) 
        }));

      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  formatImageName(title: string): string {
    return title.trim().replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
  }

  getImagePath(title: string): string {
    const formattedTitle = this.formatImageName(title);
    return `assets/images/${formattedTitle}.png`; 
  }

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
