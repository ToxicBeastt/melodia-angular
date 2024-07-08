import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() isActive: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() type: 'primary' | 'secondary' = 'primary';
  constructor() {}
}
