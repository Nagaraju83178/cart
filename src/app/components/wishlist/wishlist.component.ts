import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
