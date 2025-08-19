import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVaccineComponent } from './new-vaccine.component';

describe('NewVaccineComponent', () => {
  let component: NewVaccineComponent;
  let fixture: ComponentFixture<NewVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVaccineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
