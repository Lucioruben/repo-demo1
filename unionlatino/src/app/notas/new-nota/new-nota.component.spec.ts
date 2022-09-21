import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotaComponent } from './new-nota.component';

describe('NewNotaComponent', () => {
  let component: NewNotaComponent;
  let fixture: ComponentFixture<NewNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
