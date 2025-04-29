import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MapComponent } from "../../map/map.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
    CommonModule,
    MapComponent,
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