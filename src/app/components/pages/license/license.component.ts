import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SlideshowComponent } from '../../slideshow/slideshow.component';
import { Title } from '@angular/platform-browser';
import { ImageModalComponent } from '../../image-modal/image-modal.component';

@Component({
    selector: 'app-license-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        SlideshowComponent,
        ImageModalComponent
    ],
    templateUrl: './license.component.html',
    styleUrl: './license.component.scss',
})
export class LicenseComponent {
    title = 'Дозвільні документи';
    sanitaryActCaption = 'Акт санітарно-епідеміологічного обстеження об\'єкта';
    measurementListCaption = 'Перелік вимірювальних можливостей';

    modalOpen = false;
    modalImageUrl = '';
    modalCaption = '';
    modalTopOffset = '0px';

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

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
}
