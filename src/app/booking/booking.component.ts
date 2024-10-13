import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {slideInAnimation} from "../animations/animations";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  attemptBooking(){

  }
}
