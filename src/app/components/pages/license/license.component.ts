import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SlideshowComponent } from '../../slideshow/slideshow.component';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-license-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        SlideshowComponent
    ],
    templateUrl: './license.component.html',
})

export class LicenseComponent {
    title = 'Дозвільні документи';

    constructor(private titleService: Title) {}
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}