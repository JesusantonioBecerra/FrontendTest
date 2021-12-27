import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperFooterComponent } from './super-footer.component';

describe('SuperFooterComponent', () => {
  let component: SuperFooterComponent;
  let fixture: ComponentFixture<SuperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
