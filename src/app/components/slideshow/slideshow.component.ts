import { Component, Input, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';  // Импортируйте нужные модули для standalone компонента

@Component({
  selector: 'app-slideshow',
  standalone: true,  // Это делает компонент автономным
  imports: [CommonModule],  // Импортируйте общие модули, если необходимо (например, ngFor, ngIf)
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];
  slideIndex = 1;

  @ViewChildren('mySlides') slideElements!: QueryList<ElementRef>;
  @ViewChildren('dot') dotElements!: QueryList<ElementRef>;

  ngOnInit() {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = this.slideElements.toArray();
    const dots = this.dotElements.toArray();

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    slides.forEach((slide, index) => {
      slide.nativeElement.style.display = 'none';
    });

    dots.forEach((dot, index) => {
      dot.nativeElement.className = dot.nativeElement.className.replace(' active', '');
    });

    slides[this.slideIndex - 1].nativeElement.style.display = 'block';
    dots[this.slideIndex - 1].nativeElement.className += ' active';
  }
}
