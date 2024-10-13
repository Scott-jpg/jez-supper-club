import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimation', [
    transition('* => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
        })
      ], { optional: true }),
      query(':enter', [
        style({opacity: 0})
      ], {optional: true}),
      query(':leave', [
        animate('0.5s', style({opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        animate('0.5s', style({opacity: 1}))
      ], {optional: true})
    ])
  ]);
