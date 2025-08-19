import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserView } from '../../interfaces/user-view';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit {

  userList$!: Observable<UserView[]>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userList$ = this.userService.getUserViewList();
  }

  deleteUser(userId: number): void {    
    this.userService.deleteUser(userId).subscribe({
      next: () => {               
        this.userList$ = this.userService.getUserViewList();
      }
    });
  }

  goToUser(userId: number): void {
     this.router.navigate(['/history', userId]);
  }

  trackById = (_: number, u: UserView) => u.id;
}
