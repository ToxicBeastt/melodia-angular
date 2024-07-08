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
    { product: 'Product 1', company: 'Company 1' },
    { product: 'Product 2', company: 'Company 2' },
    { product: 'Product 3', company: 'Company 3' },
    { product: 'Product 4', company: 'Company 4' },
    { product: 'Product 5', company: 'Company 5' },
  ];
  constructor() {
    console.log('FooterComponent constructor called');
  }
}
