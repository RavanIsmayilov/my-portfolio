import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ScrollService {
    observeSections() {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            });
        },
        { threshold: 0.2 }
        );

        sections.forEach((section) => observer.observe(section));
    }
}
