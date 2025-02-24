import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './contact.component.html',
})

export class ContactComponent {
    title = 'Контакти';

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}