import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Головна сторінка';

  constructor(private titleService: Title) {}

  ngOnInit() {
      this.setTitle(this.title + ' - GreenLab');
  }

  setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
  }

  modalOpen = false;
  modalImageUrl = '';
  modalCaption = '';
  

  openModal(imageUrl: string, caption: string) {
    this.modalOpen = true;
    this.modalImageUrl = imageUrl;
    this.modalCaption = caption;
  }

  closeModal() {
    this.modalOpen = false;
  }
  
}
