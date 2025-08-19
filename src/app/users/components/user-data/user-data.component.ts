import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})

export class UserDataComponent implements OnInit {
  @Input() userId!: number;
  user?: User;

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    if (this.userId) {
      this.loadUser();
    }
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

}
