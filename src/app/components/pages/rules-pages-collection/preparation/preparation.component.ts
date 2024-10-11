import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-preparation-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './preparation.component.html'
})

export class PreparationComponent {
    title = 'Підготовка тварини до аналізів';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}