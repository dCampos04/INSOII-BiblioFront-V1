import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegistrarLibroComponent } from './body-registrar-libro.component';

describe('BodyRegistrarLibroComponent', () => {
  let component: BodyRegistrarLibroComponent;
  let fixture: ComponentFixture<BodyRegistrarLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRegistrarLibroComponent]
    });
    fixture = TestBed.createComponent(BodyRegistrarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
