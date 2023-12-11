import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeleteComponent } from './location-delete.component';

describe('LocationDeleteComponent', () => {
  let component: LocationDeleteComponent;
  let fixture: ComponentFixture<LocationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
