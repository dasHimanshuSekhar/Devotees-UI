import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevoteeComponent } from './new-devotee.component';

describe('NewDevoteeComponent', () => {
  let component: NewDevoteeComponent;
  let fixture: ComponentFixture<NewDevoteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDevoteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
