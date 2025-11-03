import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopcard',
  standalone: true,
  templateUrl: './shopcard.html',
  styleUrls: ['./shopcard.css']
})
export class Shopcard {
  @Input() title = '';
  @Input() image = '';
  @Input() price = 0;
  @Input() description = '';
}
