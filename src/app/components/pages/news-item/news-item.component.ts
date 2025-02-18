import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../news.service';  // Путь к вашему сервису
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  post: any;  // Для хранения данных поста
  postId: number = 0;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Получаем id из маршрута
    this.route.params.subscribe(params => {
      this.postId = +params['id'];  // Преобразуем id в число
      this.getPost();  // Получаем данные поста
    });
  }

  // Метод для получения данных поста
  getPost(): void {
    this.newsService.getPostById(this.postId).subscribe((data) => {
      this.post = data;  // Сохраняем полученные данные в переменную
    });
  }
}
