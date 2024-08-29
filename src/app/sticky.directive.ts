import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements AfterViewInit {
  @Input() offsetTop: number = 0;
  @Input() referenceElement!: HTMLElement; // Уверенность в наличии значения

  private referenceElementPosition!: number; // Уверенность в инициализации позже

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Определение позиции референсного элемента после инициализации вида
    this.referenceElementPosition = this.referenceElement.getBoundingClientRect().top + window.pageYOffset;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.referenceElementPosition - this.offsetTop) {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.el.nativeElement, 'top', `${this.offsetTop}px`);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'static');
      this.renderer.removeStyle(this.el.nativeElement, 'top');
    }
  }
}