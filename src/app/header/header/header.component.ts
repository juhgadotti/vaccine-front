import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:  [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  buttons = [
    { label: 'Nova Vacina', icon: 'fa-plus', route: '/new-vaccine' },
    { label: 'Nova Vacinação', icon: 'fa-plus', route: '/new-vaccination' },
    { label: 'Novo Paciente', icon: 'fa-plus', route: '/new-user' },
    { label: 'Pacientes', icon: 'fa-file-medical', route: '/user-list' }
  ];

}
