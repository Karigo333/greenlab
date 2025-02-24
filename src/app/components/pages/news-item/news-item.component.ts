import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../news.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

    title = 'Цистоізоспороз';

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
  
}
