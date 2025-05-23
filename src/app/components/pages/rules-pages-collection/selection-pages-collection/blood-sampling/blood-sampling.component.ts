import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-blood-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './blood-sampling.component.html'
})

export class BloodSamplingComponent {
    title = 'Забір крові';
    
    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}