import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent implements AfterViewInit {

  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;
  @ViewChildren('skillPercentage') skillPercentages!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  skills = [
    { name: "HTML5", percentage: 100 },
    { name: "CSS3", percentage: 100 },
    { name: "SASS/SCSS", percentage: 100 },
    { name: "JavaScript", percentage: 95 },
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 85 },
    { name: "Vue.js", percentage: 85 },
    { name: "Angular", percentage: 90 },
    { name: "Redux/Redux Toolkit", percentage: 100 },
    { name: "Git & GitHub", percentage: 90 },
    { name: "RESTful APIs / GraphQL", percentage: 95 },
    { name: "TypeScript", percentage: 95 },
    { name: "Bootstrap", percentage: 95 },
    { name: "Figma", percentage: 80 }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateSkills();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.skillsSection.nativeElement);
  }

  animateSkills() {
    this.skillBars.forEach((bar, index) => {
      const percentage = this.skills[index].percentage;
      
      this.renderer.setStyle(bar.nativeElement, 'transition', 'width 2s ease-in-out');
      this.renderer.setStyle(bar.nativeElement, 'width', `${percentage}%`);

      let count = 0;
      const interval = setInterval(() => {
        if (count >= percentage) {
          clearInterval(interval);
        } else {
          count++;
          this.skillPercentages.toArray()[index].nativeElement.textContent = `${count}%`;
        }
      }, 20);
    });
  }
}
