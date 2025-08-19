import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  userName: string = '';
  successMessage: string | null = null;

  constructor(private userService: UserService) { }

  registerUser(form: NgForm) {
    if (form.valid) {
      const newUser = form.value;
      this.userService.registerNewUser(newUser).subscribe({
        next: () => {
          form.resetForm();
          this.successMessage = 'Paciente cadastrado com sucesso!';
          setTimeout(() => {
          this.successMessage = null;
        }, 4000);
        }
      });
    }
  }

}
