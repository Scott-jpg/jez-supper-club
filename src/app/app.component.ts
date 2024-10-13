import {Component} from '@angular/core';
import {ActivatedRoute, ChildrenOutletContexts, RouterOutlet} from '@angular/router';
import {Backgrounds, BackgroundService} from "./services/background.service";
import {slideInAnimation} from "./animations/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private backgroundService: BackgroundService, protected route: ActivatedRoute ) {
    this.backgroundService.setBackground(Backgrounds.Flowers);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
