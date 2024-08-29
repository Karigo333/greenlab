import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private topbarHeight = new BehaviorSubject<number>(0);
  private isTopbarVisible = new BehaviorSubject<boolean>(true);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  getTopbarHeight() {
    return this.topbarHeight.asObservable();
  }

  getIsTopbarVisible() {
    return this.isTopbarVisible.asObservable();
  }

  setTopbarHeight(height: number) {
    this.topbarHeight.next(height);
  }

  private onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollTop = window.scrollY;
    const topbarHeight = this.topbarHeight.value;
    
    console.log('Scroll Top:', scrollTop, 'Topbar Height:', topbarHeight);

    // Скрываем топбар, когда прокрутка превышает высоту топбара
    if (scrollTop > topbarHeight) {
      console.log('Скрытие топбара');
      this.isTopbarVisible.next(false);
    } else {
      console.log('Показ топбара');
      this.isTopbarVisible.next(true);
    }
  }
}
