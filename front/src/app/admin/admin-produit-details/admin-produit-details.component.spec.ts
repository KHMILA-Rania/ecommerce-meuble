import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduitDetailsComponent } from './admin-produit-details.component';

describe('AdminProduitDetailsComponent', () => {
  let component: AdminProduitDetailsComponent;
  let fixture: ComponentFixture<AdminProduitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProduitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
