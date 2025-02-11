import { AfterViewInit, Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ScrollService } from './pages/home/scrool_service/scrool.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})

export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollService.observeSections();
  }
}
