import { Component } from '@angular/core';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css',
})
export class LearnComponent {
  flipped = false;
  quesNumber = 1;
  quesText = 'What is capital of Great Britain?';
  toggle() {
    this.flipped = !this.flipped;
  }
}
