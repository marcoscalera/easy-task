import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]); // i will use signals only here in this code to train all angular concepts
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // when working with signals inputs, you get this advantgage that angular manages these behind the scenes
  // subscriptions and updates for you pparts of UI or the values in you code, can it be more efficient 
  // so, decorators are older than signals, in evidenz i will probably use signals
   
  // avatar = input.required<string>(); // signals
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar(); // signals
  // })

  @Input({required: true}) id!: string; // decorator
  @Input({required: true}) avatar!: string; // decorator
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>(); 
  //select = output<string>(); // signal

  get imagePath() {
    return 'assets/users/' + this.avatar; // decorator
  }

  onSelectUser() {
    this.select.emit(this.id); 
  }
}
