import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../features/feature-a/services/api.service';
import { Cart } from '../../../../features/feature-a/models/cart.models';

@Component({
  selector: 'app-travel-section',
  templateUrl: './travel-section.component.html',
  styleUrl: './travel-section.component.scss'
})
export class TravelSectionComponent implements OnInit {
  public vuelo: Cart[] = [];
  @Input() sectionTitle: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCartList()
      .subscribe(
        res => {
          this.vuelo = res;
        },
        error => {
          console.error('Error fetching cart list:', error);
        }
      );
  }
}
