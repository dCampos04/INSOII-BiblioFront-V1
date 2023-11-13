import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGestionarSolicitudesComponent } from './body-gestionar-solicitudes.component';

describe('BodyGestionarSolicitudesComponent', () => {
  let component: BodyGestionarSolicitudesComponent;
  let fixture: ComponentFixture<BodyGestionarSolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyGestionarSolicitudesComponent]
    });
    fixture = TestBed.createComponent(BodyGestionarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
