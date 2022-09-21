import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFamiliaresComponent } from './listar-familiares.component';

describe('ListarFamiliaresComponent', () => {
  let component: ListarFamiliaresComponent;
  let fixture: ComponentFixture<ListarFamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFamiliaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
