import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  
  private scrollListener!: EventListener;

  ngAfterViewInit() {
    this.setActiveLink();
    this.addSmoothScrolling();
    this.initMenuToggle();

    this.scrollListener = () => this.setActiveLink();
    window.addEventListener("scroll", this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  private setActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    let scrollPosition = window.scrollY;

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const section = document.querySelector(href);
      if (
        section &&
        section instanceof HTMLElement &&
        section.offsetTop <= scrollPosition + 100 &&
        section.offsetTop + section.offsetHeight > scrollPosition + 100
      ) {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  private addSmoothScrolling() {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const href = link.getAttribute("href");
        if (!href) return;

        const section = document.querySelector(href);
        if (!section) return;

        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 50,
          behavior: "smooth"
        });

        this.closeMenu();
      });
    });
  }

  private initMenuToggle() {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const bars = document.querySelectorAll(".bar");
    const menuItems = document.querySelectorAll(".menu-item");

    if (menuBtn && menu) {
      menuBtn.addEventListener("click", () => {
        const isOpen = menu.classList.contains("flex");

        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");

        bars[0].classList.toggle("rotate-top");
        bars[1].classList.toggle("hidden");
        bars[2].classList.toggle("rotate-bottom");

        if (!isOpen) {
          menuItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("fade-in");
            }, index * 100);
          });
        } else {
          menuItems.forEach((item) => {
            item.classList.remove("fade-in");
          });
        }
      });
    }
  }

  private closeMenu() {
    const menu = document.getElementById("menu");
    const bars = document.querySelectorAll(".bar");
    const menuItems = document.querySelectorAll(".menu-item");

    if (menu && menu.classList.contains("flex")) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");

      bars[0].classList.remove("rotate-top");
      bars[1].classList.remove("hidden");
      bars[2].classList.remove("rotate-bottom");

      menuItems.forEach((item) => {
        item.classList.remove("fade-in");
      });
    }
  }
}
