import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-guide-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './guide.component.html',
})

export class GuideComponent {
    title = 'Інструкція взяття проб';

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}