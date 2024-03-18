import { Component } from '@angular/core';
import { UserageComponent } from './userage/userage.component';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [UserageComponent],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {

}
