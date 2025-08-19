import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVaccinationComponent } from './new-vaccination.component';

describe('NewVaccinationComponent', () => {
  let component: NewVaccinationComponent;
  let fixture: ComponentFixture<NewVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVaccinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
