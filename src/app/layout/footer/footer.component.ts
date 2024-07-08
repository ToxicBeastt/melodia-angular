import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  products: { product: string, company:string }[] = [
    { product: 'Cheer Up Lip Balm', company: 'TWICE Beauty' },
    { product: 'Fancy Fashion T-Shirt', company: 'ONCE Merch' },
    { product: 'Likey Lifestyle Pillow', company: 'Likey Home' },
    { product: 'Signal Stationery Set', company: 'TWICE School' },
    { product: 'TT Tech Earbuds', company: 'TWICE Audio' },
  ];
  constructor() {
    console.log('FooterComponent constructor called');
  }
}
