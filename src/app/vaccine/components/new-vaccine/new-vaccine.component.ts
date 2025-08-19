import { Component } from '@angular/core';
import { Vaccine } from '../../interfaces/vaccine';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-new-vaccine',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-vaccine.component.html',
  styleUrl: './new-vaccine.component.scss'
})

export class NewVaccineComponent implements OnInit {
  vaccineForm!: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.vaccineForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      doses: [1, [Validators.required, Validators.min(1)]]
    });
  }

  registerVaccine(): void {
    if (this.vaccineForm.valid) {
      const vaccine: Vaccine = this.vaccineForm.value;

      this.vaccineService.registerNewVaccine(vaccine).subscribe({
        next: () => {
          this.vaccineForm.reset({ name: '', doses: 1 });
          this.successMessage = 'Vacina cadastrada com sucesso!';
          setTimeout(() => {
          this.successMessage = null;
        }, 4000);
        }
      });
    }
  }
}
