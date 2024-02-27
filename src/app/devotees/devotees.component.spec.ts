import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteesComponent } from './devotees.component';

describe('DevoteesComponent', () => {
  let component: DevoteesComponent;
  let fixture: ComponentFixture<DevoteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevoteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
