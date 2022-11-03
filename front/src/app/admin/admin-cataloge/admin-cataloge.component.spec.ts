import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogeComponent } from './admin-cataloge.component';

describe('AdminCatalogeComponent', () => {
  let component: AdminCatalogeComponent;
  let fixture: ComponentFixture<AdminCatalogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCatalogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCatalogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
