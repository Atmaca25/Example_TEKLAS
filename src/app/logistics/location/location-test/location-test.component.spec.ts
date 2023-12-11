import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTestComponent } from './location-test.component';

describe('LocationTestComponent', () => {
  let component: LocationTestComponent;
  let fixture: ComponentFixture<LocationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
