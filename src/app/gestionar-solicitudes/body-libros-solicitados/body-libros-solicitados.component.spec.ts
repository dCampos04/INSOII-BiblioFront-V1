import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLibrosSolicitadosComponent } from './body-libros-solicitados.component';

describe('BodyLibrosSolicitadosComponent', () => {
  let component: BodyLibrosSolicitadosComponent;
  let fixture: ComponentFixture<BodyLibrosSolicitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyLibrosSolicitadosComponent]
    });
    fixture = TestBed.createComponent(BodyLibrosSolicitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
