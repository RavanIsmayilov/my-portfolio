import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../../api/about/about.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: SafeHtml = ''; 

  constructor(private aboutService: AboutService, private sanitizer: DomSanitizer) {} 

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data => {
      this.aboutContent = this.sanitizer.bypassSecurityTrustHtml(this.highlightWords(data.content)); 
    });
  }

  highlightWords(text: string): string {
    const keywords = ['Front-End Developer', 'JavaScript', 'React', 'Angular', 'Tailwind', 'Material UI', 'backend development with Java and mobile development with Flutter.'];

    keywords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi'); 
      text = text.replace(regex, `<span style="color: #ffbd39; font-weight: bold;">$1</span>`);
    });

    return text;
  }
}
