import { Routes } from '@angular/router';
import { HistoryTableComponent } from './vaccination/components/history-table/history-table.component';
import { NewVaccinationComponent } from './vaccination/components/new-vaccination/new-vaccination.component';
import { NewVaccineComponent } from './vaccine/components/new-vaccine/new-vaccine.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { NewUserComponent } from './users/components/new-user/new-user.component';

export const routes: Routes = [
    {path: "history/:id", component: HistoryTableComponent},
    {path: "user-list", component: UserListComponent},
    {path: "new-vaccination", component: NewVaccinationComponent},
    {path: "new-vaccine", component: NewVaccineComponent},
    {path: "new-user", component: NewUserComponent},
    {path: "**", redirectTo: "user-list"}
];