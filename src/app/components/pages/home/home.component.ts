import { Component } from '@angular/core';
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

  imagePath = '../../../assets/images/main/cert1.png';
  isModalOpen = false;
  isEnlarged = false;

  toggleEnlarged(): void {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
    } else {
      this.isEnlarged = !this.isEnlarged;
    }
  }

  closeImageModal(): void {
    this.isModalOpen = false;
    this.isEnlarged = false;
  }


  
}
