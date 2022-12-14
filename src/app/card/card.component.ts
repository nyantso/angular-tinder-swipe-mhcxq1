import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import User from 'user';
import data from './users.json';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
    ]),
  ],
})
export class CardComponent {
  public users: User[] = data;
  public index = 0;
  @Input()
  parentSubject: Subject<any>;

  animationState: string;
  constructor() {}

  ngOnInit() {
    this.parentSubject.subscribe((event) => {
      this.startAnimation(event);
    });
  }

  startAnimation(state) {
    if (!this.animationState) {
      console.log(state);
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
