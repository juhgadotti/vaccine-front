import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../../services/vaccination.service';
import { VaccinationHistory } from '../../interfaces/vaccination-history';
import { UserDataComponent } from '../../../users/components/user-data/user-data.component';

@Component({
  selector: 'app-history-table',
  standalone: true,
  imports: [CommonModule, UserDataComponent],
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss'
})
export class HistoryTableComponent implements OnInit {
  userId!: number;
  historyList: VaccinationHistory[] = [];

  constructor(private route: ActivatedRoute, private vaccinationService: VaccinationService) { }

  ngOnInit(): void {
    this.getUserHistory();
  }

  getUserHistory(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.vaccinationService.getHistoryByUserId(this.userId).subscribe(vaccinations => {
      this.historyList = vaccinations;
    });
  }

  deleteVaccination(vaccinationId: number): void {
    this.vaccinationService.delete(vaccinationId).subscribe({
      next: () => {
        this.getUserHistory();
      }
    });
  }
}



