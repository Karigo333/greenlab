import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-image-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image-modal.component.html',
    styleUrl: './image-modal.component.scss',
})
export class ImageModalComponent {
    @Input() open = false;
    @Input() imageUrl = '';
    @Input() caption = '';
    @Input() topOffset = '0px';

    @Output() modalClose = new EventEmitter<void>();
}
