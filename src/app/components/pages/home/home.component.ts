import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  title = 'home';

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
