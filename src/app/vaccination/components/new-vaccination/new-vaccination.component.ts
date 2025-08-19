import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VaccineService } from '../../../vaccine/services/vaccine.service';
import { Vaccine } from '../../../vaccine/interfaces/vaccine';
import { User } from '../../../users/interfaces/user';
import { UserService } from '../../../users/services/user.service';
import { NewVaccination } from '../../interfaces/new-vaccination';
import { VaccinationService } from '../../services/vaccination.service';

@Component({
  selector: 'app-new-vaccination',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-vaccination.component.html',
  styleUrl: './new-vaccination.component.scss'
})

export class NewVaccinationComponent {

  selectedVaccine: any = null;
  selectedDose: any = null;
  selectedUser: any = null;
  dateApplied: any = null;
  availableDoses: number[] = [];
  vaccineList: Vaccine[] = [];
  userList: User[] = [];

  constructor(private vaccineService: VaccineService, private userService: UserService, private vaccinationService: VaccinationService) { }

  successMessage: string | null = null;

  ngOnInit() {
    this.getVaccinesList();
    this.getUsersList();
  }

  getVaccinesList(): void {
    this.vaccineService.listVaccines().subscribe(vaccines => {
      this.vaccineList = vaccines;
    });
  }

  getUsersList(): void {
    this.userService.getUserList().subscribe(users => {
      this.userList = users;
    });
  }

  generateDoses() {
    if (this.selectedVaccine) {
      this.availableDoses = Array.from(
        { length: this.selectedVaccine.doses },
        (_, i) => i + 1
      );
      this.selectedDose = null;
    }
  }

  registerVaccination() {
    const vaccination: NewVaccination = {
      vaccineId: this.selectedVaccine.id,
      dose: this.selectedDose,
      userId: this.selectedUser.id,
      dateApplied: new Date(this.dateApplied).toISOString()
    };

    this.vaccinationService.registerNewVaccination(vaccination).subscribe({
      next: () => {
        this.successMessage = 'Vacinação cadastrada com sucesso!';
        setTimeout(() => {
          this.successMessage = null;
        }, 4000);
      }
    });
  }
}

