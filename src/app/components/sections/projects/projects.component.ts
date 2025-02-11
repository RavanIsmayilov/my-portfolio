import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule] 
})

export class ProjectsComponent {
  projects = [
    { image: 'assets/projects_images/cart.png', title: 'Branding & Illustration Design', category: 'Web Design', link: 'https://github.com/yourproject1' },
    { image: 'assets/projects_images/project2.jpg', title: 'UI/UX Design', category: 'App Development', link: 'https://vercel.com/yourproject2' },
    { image: 'assets/projects_images/project3.jpg', title: 'Graphic Design', category: 'Creative', link: 'https://yourwebsite.com/project3' },
    { image: 'assets/projects_images/project4.jpg', title: 'Web Development', category: 'Coding', link: 'https://github.com/yourproject4' },
    { image: 'assets/projects_images/project5.jpg', title: 'SEO Optimization', category: 'Marketing', link: 'https://yourwebsite.com/project5' },
    { image: 'assets/projects_images/project6.jpg', title: 'WordPress Design', category: 'Development', link: 'https://yourwebsite.com/project6' }
  ];
}





