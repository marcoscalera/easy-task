import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type User = {
//   id: string; 
//   name: string; 
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // when working with signals inputs, you get this advantgage that angular manages these behind the scenes
  // subscriptions and updates for you pparts of UI or the values in you code, can it be more efficient 
  // so, decorators are older than signals, in evidenz i will probably use signals

  @Input({ required: true }) user!: User; 

  @Output() select = new EventEmitter<string>(); 

  get imagePath() {
    return 'assets/users/' + this.user.avatar; 
  }

  onSelectUser() {
    this.select.emit(this.user.id); 
  }
}
