import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHistorialSolicitudesComponent } from './body-historial-solicitudes.component';

describe('BodyHistorialSolicitudesComponent', () => {
  let component: BodyHistorialSolicitudesComponent;
  let fixture: ComponentFixture<BodyHistorialSolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyHistorialSolicitudesComponent]
    });
    fixture = TestBed.createComponent(BodyHistorialSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
