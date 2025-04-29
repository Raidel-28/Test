import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css',
  template: `<p>Message : {{ message }}</p>`
})
export class ChildComponent {
  @Input() message: string = '';
}