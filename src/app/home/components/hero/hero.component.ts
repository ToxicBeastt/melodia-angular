import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../../components/button/button.component";
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

}
