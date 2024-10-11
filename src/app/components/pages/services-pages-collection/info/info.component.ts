import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-info-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './info.component.html',
    styleUrl: './info.component.scss'
})

export class InfoComponent {
    title = 'Що таке ПЛР?';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}