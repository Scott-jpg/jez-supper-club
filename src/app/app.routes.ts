import {Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {BookingComponent} from "./booking/booking.component";
import {BookingSuccessComponent} from "./booking/booking-success/booking-success.component";
import {BookingFailureComponent} from "./booking/booking-failure/booking-failure.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Welcome',
  },
  {
    path: 'booking',
    component: BookingComponent,
    title: 'Book',
  },
  {
    path: 'booking/success',
    title: 'Success',
    component: BookingSuccessComponent
  },
  {
    path: 'booking/failure',
    title: 'Failure',
    component: BookingFailureComponent
  }
];
