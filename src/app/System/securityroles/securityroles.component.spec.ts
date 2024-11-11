import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityrolesComponent } from './securityroles.component';

describe('SecurityrolesComponent', () => {
  let component: SecurityrolesComponent;
  let fixture: ComponentFixture<SecurityrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityrolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
