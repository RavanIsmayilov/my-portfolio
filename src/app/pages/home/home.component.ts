import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { AboutComponent } from '../../components/sections/about/about.component';
import { ServicesComponent } from '../../components/sections/services/services.component';
import { ProjectsComponent } from '../../components/sections/projects/projects.component';
import { SkillsComponent } from '../../components/sections/skills/skills.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { HeaderComponent } from "../../components/layout/header/header.component";
import { ResumeComponent } from "../../components/sections/resume/resume.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    HeaderComponent,
    ResumeComponent
]
})
export class HomeComponent { }
