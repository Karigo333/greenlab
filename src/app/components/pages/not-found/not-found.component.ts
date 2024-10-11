import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  title = "404"

  constructor(private titleService: Title) {}

  ngOnInit() {
      this.setTitle(this.title + ' - GreenLab');
  }

  setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
  }
}
