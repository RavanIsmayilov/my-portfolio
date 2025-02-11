import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule]

})
export class HeroComponent implements OnInit {
  ravan = 'Ravan'.split('');
  ismayilov = 'Ismayilov'.split('');
  frontend = 'A Front-End Developer'.split('');
  visibleChars: number[] = [];

  ngOnInit() {
    let index = 0;
    const totalLength = this.ravan.length + this.ismayilov.length + this.frontend.length;
    const interval = setInterval(() => {
      if (index < totalLength) {
        this.visibleChars.push(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }

  getStyle(index: number) {
    return {
      'opacity': this.visibleChars.includes(index) ? '1' : '0',
      'transition': `opacity 0.2s ease ${index * 0.1}s`
    };
  }
}