import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatalogeComponent } from './edit-cataloge.component';

describe('EditCatalogeComponent', () => {
  let component: EditCatalogeComponent;
  let fixture: ComponentFixture<EditCatalogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCatalogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatalogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
