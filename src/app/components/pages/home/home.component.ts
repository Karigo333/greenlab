import { Component, Inject, PLATFORM_ID, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MapComponent } from '../../map/map.component';
import { ImageModalComponent } from '../../image-modal/image-modal.component';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    CommonModule,
    MapComponent,
    ImageModalComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  title = 'Головна сторінка';

  constructor(private titleService: Title, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
      this.setTitle(this.title + ' - GreenLab');
  }

  setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
  }

  modalOpen = false;
  modalImageUrl = '';
  modalCaption = '';
  modalTopOffset = '0px';
  

  openModal(imageUrl: string, caption: string) {
    this.setModalTopOffset();
    this.modalOpen = true;
    this.modalImageUrl = imageUrl;
    this.modalCaption = caption;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImageUrl = '';
    this.modalCaption = '';
  }

  private setModalTopOffset() {
    const stickyHeader = document.querySelector('.sticky-header');
    const headerBottom = stickyHeader?.getBoundingClientRect().bottom ?? 0;

    this.modalTopOffset = `${Math.max(headerBottom, 0)}px`;
  }

  
  isVisible = false;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      }, { threshold: 0.3 });

      observer.observe(this.el.nativeElement.querySelector('.box'));
    }
  }
}
