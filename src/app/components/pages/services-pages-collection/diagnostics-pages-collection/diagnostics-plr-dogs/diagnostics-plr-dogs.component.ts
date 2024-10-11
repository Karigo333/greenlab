import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-diagnostics-plr-dogs-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-plr-dogs.component.html',
    styleUrl: './diagnostics-plr-dogs.component.scss'
})

export class PlrDogsComponent {
    title = 'Полімеразно - ланцюгова реакція (ПЛР) в режимі реального часу (для собак)';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle('Полімеразно - ланцюгова реакція (собаки) - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}