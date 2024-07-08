import { Component, Input } from '@angular/core';
import {album} from "../../../services/audio-db-service.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../../components/button/button.component";

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './discography.component.html',
  styleUrl: './discography.component.css'
})
export class DiscographyComponent {
  @Input() albums: album[] = [];
}
