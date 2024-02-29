import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteesListComponent } from './devotees-list.component';

describe('DevoteesListComponent', () => {
  let component: DevoteesListComponent;
  let fixture: ComponentFixture<DevoteesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevoteesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevoteesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
