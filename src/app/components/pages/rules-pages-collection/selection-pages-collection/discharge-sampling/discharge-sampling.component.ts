import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-discharge-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './discharge-sampling.component.html'
})

export class DischargeSamplingComponent {
    title = 'Відбір випоту (грудного, черевного)';
    
    constructor(private titleService: Title) {}

    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}